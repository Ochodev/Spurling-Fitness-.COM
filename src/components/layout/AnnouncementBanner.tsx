"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BANNER_DISMISSED_KEY = "sf_banner_dismissed";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

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

  if (!visible) return null;

  return (
    <div className="relative z-[99999] bg-brand-red text-white text-center">
      <Link
        href="/founders/?utm_source=banner&utm_medium=sitewide&utm_campaign=sp_opening_2025-12-01"
        className="block py-2.5 px-10 text-white text-sm sm:text-base font-medium no-underline hover:opacity-90 transition-opacity"
      >
        🎉 New Location Now Open In South Portland 🎉 Reserve Your VIP
        Membership (15 Spots Left)
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
