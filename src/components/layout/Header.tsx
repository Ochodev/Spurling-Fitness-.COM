"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { mainNavLinks } from "@/data/navigation";
import { useFormModal } from "@/components/ui/FormModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openFormModal } = useFormModal();

  return (
    <header className="absolute top-0 left-0 right-0 z-[9998] bg-transparent">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-horizontal.webp"
            alt="Spurling Fitness"
            width={220}
            height={50}
            className="h-auto w-[180px] sm:w-[220px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <button
            onClick={openFormModal}
            className="cursor-pointer bg-transparent font-heading text-[20px] leading-[20px] font-medium text-brand-red hover:text-brand-red-dark transition-colors border-none p-0"
          >
            Schedule &amp; Pricing
          </button>
          <Link
            href="/contact-us/"
            className="inline-block rounded-[5px] border border-brand-red bg-brand-red px-6 py-3 font-heading text-[15px] leading-[15px] font-normal text-white no-underline transition-colors hover:bg-brand-red-dark hover:border-brand-red-dark"
          >
            TALK TO A TRAINER
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col gap-[5px] lg:hidden cursor-pointer p-2"
          aria-label="Open menu"
        >
          <span className="block h-[3px] w-[25px] bg-white" />
          <span className="block h-[3px] w-[25px] bg-white" />
          <span className="block h-[3px] w-[25px] bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={mainNavLinks}
        onScheduleClick={openFormModal}
      />
    </header>
  );
}
