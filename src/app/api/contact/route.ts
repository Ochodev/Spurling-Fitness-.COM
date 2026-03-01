import { NextResponse } from "next/server";

const WEBHOOK_URLS: Record<string, string | undefined> = {
  kennebunk: process.env.WEBHOOK_URL_KENNEBUNK,
  scarborough: process.env.WEBHOOK_URL_SCARBOROUGH,
  "south-portland": process.env.WEBHOOK_URL_SOUTH_PORTLAND,
};

const SEARCH_ENGINES = [
  "google.com",
  "bing.com",
  "yahoo.com",
  "duckduckgo.com",
  "baidu.com",
  "yandex.com",
];

const SOCIAL_PLATFORMS = [
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "linkedin.com",
  "tiktok.com",
  "pinterest.com",
  "youtube.com",
  "reddit.com",
  "threads.net",
];

const AI_PLATFORMS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "claude.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
  "you.com",
  "phind.com",
  "kagi.com",
];

const SOCIAL_AD_SOURCES = [
  "facebook",
  "fb",
  "instagram",
  "ig",
  "meta",
  "tiktok",
  "linkedin",
  "pinterest",
  "twitter",
  "x",
  "snapchat",
  "reddit",
  "youtube",
];

interface SourceDetectionInput {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  referrer: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
}

function detectSessionSource(input: SourceDetectionInput): string {
  const utmSource = input.utm_source.toLowerCase();
  const utmMedium = input.utm_medium.toLowerCase();
  const hasUtm = utmSource || utmMedium || input.utm_campaign;
  const hasClickId = input.gclid || input.fbclid || input.msclkid;
  const referrer = input.referrer.toLowerCase();

  const isPaid =
    hasClickId || (hasUtm && utmMedium.match(/cpc|ppc|paid|ad|display/));

  if (isPaid) {
    const isSocial =
      !!input.fbclid ||
      SOCIAL_AD_SOURCES.some(
        (s) => utmSource.includes(s) || utmMedium.includes(s)
      );
    return isSocial ? "Paid Social" : "Paid Search";
  }

  if (hasUtm) {
    if (utmMedium.includes("social")) return "Paid Social";
    if (utmMedium.includes("email")) return "Email";
    return "Referral";
  }

  if (referrer) {
    if (AI_PLATFORMS.some((ai) => referrer.includes(ai))) {
      return "AI";
    }
    if (SEARCH_ENGINES.some((engine) => referrer.includes(engine))) {
      return "Organic Search";
    }
    if (SOCIAL_PLATFORMS.some((platform) => referrer.includes(platform))) {
      return "Organic Social";
    }
    return "Referral";
  }

  return "Direct";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const isFormEncoded = !contentType.includes("application/json");

  try {
    let body: Record<string, string>;

    if (isFormEncoded) {
      const formData = await request.formData();
      body = {};
      formData.forEach((value, key) => {
        body[key] = value.toString();
      });
    } else {
      body = await request.json();
    }

    // Map field names to GHL standard contact properties
    if (body.fullName) {
      body.name = body.fullName.trim();
      if (!body.firstName) {
        const parts = body.name.split(/\s+/);
        body.firstName = parts[0] || "";
        body.lastName = parts.slice(1).join(" ") || "";
      }
      delete body.fullName;
    }

    // Auto-detect traffic source (must run before field renames)
    const internalSource = body.source || "";
    delete body.source;
    body.sessionSource = detectSessionSource({
      utm_source: body.utm_source || "",
      utm_medium: body.utm_medium || "",
      utm_campaign: body.utm_campaign || "",
      referrer: body.referrer || "",
      gclid: body.gclid || "",
      fbclid: body.fbclid || "",
      msclkid: body.msclkid || "",
    });

    // Consolidate click IDs → clickId
    const clickId = body.gclid || body.fbclid || body.msclkid;
    if (clickId) {
      body.clickId = clickId;
    }
    delete body.gclid;
    delete body.fbclid;
    delete body.msclkid;

    // Rename all fields to GHL Last Attribution camelCase names
    const renames: [string, string][] = [
      ["utm_source", "utmSource"],
      ["utm_medium", "utmMedium"],
      ["utm_campaign", "campaign"],
      ["utm_content", "utmContent"],
      ["utm_term", "utmKeyword"],
      ["utm_matchtype", "utmMatchType"],
      ["landing_page", "url"],
      ["adsu_cid", "campaignId"],
      ["adsu_asid", "adGroupId"],
      ["adsu_aid", "adId"],
    ];
    for (const [from, to] of renames) {
      if (body[from]) {
        body[to] = body[from];
      }
      delete body[from];
    }

    const webhookUrl =
      WEBHOOK_URLS[body.location as string] || process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(`No webhook configured for location: ${body.location}`);
      if (isFormEncoded) {
        return NextResponse.redirect(new URL("/thank-you/", request.url), 303);
      }
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!webhookRes.ok) {
      throw new Error(`Webhook responded with ${webhookRes.status}`);
    }

    if (isFormEncoded) {
      const location = body.location || "";
      let redirectPath = "/thank-you/";

      if (internalSource === "jobs-page") {
        redirectPath = "/thank-you-jobs/";
      } else if (location) {
        redirectPath = `/thank-you-${location}/`;
      }

      return NextResponse.redirect(new URL(redirectPath, request.url), 303);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (isFormEncoded) {
      return NextResponse.redirect(new URL("/thank-you/", request.url), 303);
    }

    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
