"use client";

import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { captureTrackingParams } from "@/lib/tracking";

export default function TrackingCapture() {
  const posthog = usePostHog();

  useEffect(() => {
    captureTrackingParams();
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='tel:']");
      if (anchor) {
        posthog.capture("phone_click", {
          phone_number: anchor.href.replace("tel:", ""),
          page_url: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [posthog]);

  return null;
}
