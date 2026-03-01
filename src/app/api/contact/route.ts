import { NextResponse } from "next/server";

const WEBHOOK_URLS: Record<string, string | undefined> = {
  kennebunk: process.env.WEBHOOK_URL_KENNEBUNK,
  scarborough: process.env.WEBHOOK_URL_SCARBOROUGH,
  "south-portland": process.env.WEBHOOK_URL_SOUTH_PORTLAND,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl =
      WEBHOOK_URLS[body.location as string] || process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      console.error(`No webhook configured for location: ${body.location}`);
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
