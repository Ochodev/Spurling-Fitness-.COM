import Link from "next/link";
import Container from "./Container";
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
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-poppins text-[19px] font-normal leading-[20px] text-white no-underline transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contacts */}
          <div>
            <h3 className="mb-4 font-poppins text-[19px] font-bold leading-[19px] text-brand-red">
              Contacts
            </h3>

            {/* Locations with pin icon */}
            <div className="mb-4 space-y-3">
              {locations.map((loc) => (
                <div key={loc.id} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>
                    {loc.address}, {loc.city}, {loc.state} {loc.zip}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone / Text / Email */}
            <div className="space-y-1 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-gray-300 no-underline hover:text-brand-red"
                >
                  {BRAND.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">Text:</span>{" "}
                <a
                  href={BRAND.textPhoneHref}
                  className="text-gray-300 no-underline hover:text-brand-red"
                >
                  {BRAND.textPhone}
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href={BRAND.emailHref}
                  className="text-gray-300 no-underline hover:text-brand-red"
                >
                  {BRAND.email}
                </a>
              </div>
            </div>
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
