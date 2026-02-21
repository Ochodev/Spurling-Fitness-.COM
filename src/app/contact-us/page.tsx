import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { locations } from "@/data/locations";
import { BRAND } from "@/lib/constants";
import { teamMembers } from "@/data/team";

const joseph = teamMembers.find((m) => m.id === "joseph-davenport")!;

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Spurling Fitness. Schedule your free introductory meeting at our Kennebunk, Scarborough, or South Portland location.",
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Get In Touch With Us"
        subheadline="We're here to answer any questions you have and help you get started on your fitness journey. Reach out to us today and take the first step towards a healthier, happier you."
        align="left"
      />

      {/* Contact Form + Locations (white bg, 2-column) */}
      <section id="pricing_form" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left — Form */}
            <div className="lg:w-1/2">
              <ContactForm source="contact-page" />
            </div>

            {/* Right — Contact Info + Locations */}
            <div className="lg:w-1/2">
              {/* Contact methods */}
              <div className="mb-8 flex flex-wrap gap-6">
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-red no-underline hover:underline"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {BRAND.phone}
                </a>
                <a
                  href={BRAND.textPhoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-red no-underline hover:underline"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
                  </svg>
                  Text {BRAND.textPhone}
                </a>
                <a
                  href={BRAND.emailHref}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-red no-underline hover:underline"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {BRAND.email}
                </a>
              </div>

              {/* 3 Location blocks with maps */}
              <div className="space-y-8">
                {locations.map((loc) => (
                  <div key={loc.id}>
                    <div className="mb-2 flex items-start gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <div>
                        <p className="font-heading text-sm font-semibold text-brand-dark">
                          {loc.name}
                        </p>
                        <p className="text-sm text-brand-gray-light">
                          {loc.address}, {loc.city}, {loc.state} {loc.zip}
                        </p>
                      </div>
                    </div>
                    {/* Map embed placeholder */}
                    <div className="h-[200px] w-full overflow-hidden rounded-lg bg-gray-100">
                      <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`)}&output=embed`}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${loc.name}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />

      {/* Coach Bio — Joseph Davenport */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src={joseph.photo}
                alt={joseph.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-2 font-heading text-2xl font-semibold uppercase text-brand-dark sm:text-3xl">
                {joseph.name}
              </h2>
              <p className="mb-6 font-heading text-lg text-brand-red">
                {joseph.role}
              </p>
              <p className="text-base leading-relaxed text-brand-gray-light">
                I&apos;m a coach who believes movement is a doorway to
                confidence, resilience, and unlocking the strength people
                don&apos;t always see in themselves. My foundation was built
                through 21 years of U.S. Army service — as a Supply Specialist,
                Drill Instructor, and H2F (Holistic Health and Fitness)
                Integrator.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-light">
                My mission is to help people rise — to move with confidence,
                think with strength, and build the kind of resilience that
                transforms their life inside and outside the gym.
              </p>
              <p className="mt-6 text-sm italic text-brand-gray-light">
                &ldquo;Desire and imagination have the potential to position a
                person for greatness&rdquo; — Eric Thomas
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactFooterSection source="contact-page" hideForm />
    </>
  );
}
