"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BANNER_DISMISSED_KEY = "sf_banner_dismissed";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const hidden =
    pathname.startsWith("/win") || pathname.startsWith("/thank-you");

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(BANNER_DISMISSED_KEY, "1");
  };

  if (!visible || hidden) return null;

  return (
    <div className="relative z-[99999] bg-brand-red text-white text-center">
      <Link
        href="/win/?utm_source=banner&utm_medium=sitewide&utm_campaign=3mo_giveaway"
        className="flex items-center justify-center gap-2 py-2.5 px-10 text-white no-underline hover:opacity-90 transition-opacity"
      >
        <span className="text-lg" aria-hidden="true">
          🎁
        </span>
        <span className="text-sm font-bold sm:text-base">
          WIN 3 FREE MONTHS OF PERSONAL TRAINING
        </span>
        <span className="ml-1 text-sm font-semibold text-white/90">
          Enter Now →
        </span>
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity text-xl leading-none cursor-pointer"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
