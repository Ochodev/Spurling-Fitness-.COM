import { NextResponse } from "next/server";

const WEBHOOK_URLS: Record<string, string | undefined> = {
  kennebunk: process.env.WEBHOOK_URL_KENNEBUNK,
  scarborough: process.env.WEBHOOK_URL_SCARBOROUGH,
  "south-portland": process.env.WEBHOOK_URL_SOUTH_PORTLAND,
};

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

    // Map utm_term → utm_keyword (GHL standard)
    if (body.utm_term) {
      body.utm_keyword = body.utm_term;
      delete body.utm_term;
    }

    // Map landing_page → url (GHL Last Attribution: Landing URL)
    if (body.landing_page) {
      body.url = body.landing_page;
      delete body.landing_page;
    }

    // Map source → sessionSource (GHL Last Attribution: Session source)
    if (body.source) {
      body.sessionSource = body.source;
      delete body.source;
    }

    // Consolidate click IDs → clickId (GHL Last Attribution: Ad click ID)
    const clickId = body.gclid || body.fbclid || body.msclkid;
    if (clickId) {
      body.clickId = clickId;
    }
    delete body.gclid;
    delete body.fbclid;
    delete body.msclkid;

    // Map ad tracking IDs to GHL Last Attribution fields
    if (body.adsu_cid) {
      body.campaignId = body.adsu_cid;
      delete body.adsu_cid;
    }
    if (body.adsu_asid) {
      body.adGroupId = body.adsu_asid;
      delete body.adsu_asid;
    }
    if (body.adsu_aid) {
      body.adId = body.adsu_aid;
      delete body.adsu_aid;
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
      const source = body.sessionSource || "";
      let redirectPath = "/thank-you/";

      if (source === "jobs-page") {
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
