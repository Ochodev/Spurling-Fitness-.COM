import Link from "next/link";
import Container from "./Container";
import SchedulePricingLink from "./SchedulePricingLink";
import { footerNavLinks } from "@/data/navigation";
import { locations } from "@/data/locations";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Red top divider line */}
      <div className="border-t-2 border-brand-red" />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 — About Us */}
          <div>
            <h3 className="mb-4 font-poppins text-[19px] font-bold leading-[19px] text-brand-red">
              About Us
            </h3>
            <p className="text-[16px] leading-[24px] text-white">
              Founded to serve those intimidated by the typical gym, Spurling
              Fitness is a welcoming space where individuals over 50 can thrive.
              We focus on personalized coaching, tailored workouts, and a
              community that motivates and inspires.
            </p>
          </div>

          {/* Column 2 — Menu */}
          <div>
            <h3 className="mb-4 font-poppins text-[19px] font-bold leading-[19px] text-brand-red">
              Menu
            </h3>
            <nav className="flex flex-col gap-2">
              {footerNavLinks.map((link) =>
                link.label === "Schedule & Pricing" ? (
                  <SchedulePricingLink
                    key={link.label}
                    className="font-poppins text-[19px] font-normal leading-[20px] text-white transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </SchedulePricingLink>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-poppins text-[19px] font-normal leading-[20px] text-white no-underline transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Column 3 — Contacts */}
          <div>
            <h3 className="mb-4 font-poppins text-[19px] font-bold leading-[19px] text-brand-red">
              Contacts
            </h3>

            {/* Locations with pin icon + bold labels */}
            <ul className="mb-4 list-none space-y-4 p-0">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white no-underline hover:text-brand-red"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>
                      <strong className="block">{loc.name} Address</strong>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </a>
                </li>
              ))}

              {/* Call */}
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-start gap-3 text-white no-underline hover:text-brand-red"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>
                    <strong>Call:</strong> {BRAND.phone}
                  </span>
                </a>
              </li>

              {/* Text */}
              <li>
                <a
                  href={BRAND.textPhoneHref}
                  className="flex items-start gap-3 text-white no-underline hover:text-brand-red"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  </svg>
                  <span>
                    <strong>Text:</strong> {BRAND.textPhone}
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={BRAND.emailHref}
                  className="flex items-start gap-3 text-white no-underline hover:text-brand-red"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>
                    <strong>Email</strong><br />
                    {BRAND.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Red bottom divider line */}
      <div className="border-t-2 border-brand-red" />

      {/* Copyright bar */}
      <Container className="py-4">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <h3 className="font-poppins text-[17px] font-normal leading-[17px] text-brand-red">
            All Rights Reserved
          </h3>
          <Link
            href="/privacy-policy/"
            className="font-poppins text-[17px] leading-[17px] font-normal text-brand-red no-underline rounded-[3px] bg-[#a5a5a5] px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
