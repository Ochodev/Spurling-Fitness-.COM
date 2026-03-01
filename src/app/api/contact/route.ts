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

    // Split fullName into first/last if not already provided
    if (body.fullName && !body.firstName) {
      const parts = body.fullName.trim().split(/\s+/);
      body.firstName = parts[0] || "";
      body.lastName = parts.slice(1).join(" ") || "";
    }

    const webhookUrl =
      WEBHOOK_URLS[body.location as string] || process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(`No webhook configured for location: ${body.location}`);
      if (isFormEncoded) {
        return NextResponse.redirect(new URL("/thank-you/", request.url));
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
      const source = body.source || "";
      let redirectPath = "/thank-you/";

      if (source === "jobs-page") {
        redirectPath = "/thank-you-jobs/";
      } else if (location) {
        redirectPath = `/thank-you-${location}/`;
      }

      return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (isFormEncoded) {
      return NextResponse.redirect(new URL("/thank-you/", request.url));
    }

    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
