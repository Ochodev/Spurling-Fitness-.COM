"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/types";
import { BRAND } from "@/lib/constants";
import { SCHEDULE_PRICING_HEADER } from "@/components/ui/FormModal";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  onScheduleClick?: (headerText?: string) => void;
}

export default function MobileMenu({ open, onClose, links, onScheduleClick }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[10000] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[10001] h-full w-[300px] bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-brand-dark hover:text-brand-red transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Nav links */}
        <nav className="mt-16 flex flex-col px-6">
          {links.map((link) =>
            link.label === "Schedule & Pricing" && onScheduleClick ? (
              <button
                key={`${link.label}-${link.href}`}
                onClick={() => {
                  onClose();
                  onScheduleClick(SCHEDULE_PRICING_HEADER);
                }}
                className="cursor-pointer border-b border-gray-100 bg-transparent py-4 text-left font-heading text-lg font-medium text-brand-dark transition-colors hover:text-brand-red border-t-0 border-x-0 p-0 px-0"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                onClick={onClose}
                className="border-b border-gray-100 py-4 font-heading text-lg font-medium text-brand-dark no-underline transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA button */}
        <div className="mt-6 px-6">
          <button
            onClick={() => { onClose(); onScheduleClick?.(); }}
            className="block w-full cursor-pointer rounded-[5px] border-none bg-brand-red py-3 text-center font-heading text-[15px] font-normal uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
          >
            Talk to a Trainer
          </button>
        </div>

        {/* Contact info */}
        <div className="mt-8 px-6 text-sm text-brand-gray-light">
          <a
            href={BRAND.phoneHref}
            className="block py-1 text-brand-gray-light no-underline hover:text-brand-red"
          >
            📞 {BRAND.phone}
          </a>
          <a
            href={BRAND.emailHref}
            className="block py-1 text-brand-gray-light no-underline hover:text-brand-red"
          >
            ✉️ {BRAND.email}
          </a>
        </div>
      </div>
    </>
  );
}
