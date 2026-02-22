import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { videoTestimonials } from "@/data/testimonials";

export const metadata = generatePageMetadata({
  title: "Founders",
  description:
    "Reserve your VIP Founders membership at Spurling Fitness South Portland. Limited spots available for our brand new location at 239 Ocean St.",
  path: "/founders/",
});

const benefits = [
  "20% OFF FOR LIFE",
  "WAIVED ENROLLMENT FEE",
  "EARLY VIP ACCESS BEFORE THE OFFICIAL LAUNCH",
  "PROVEN RESULTS: MORE STRENGTH, BETTER MOBILITY & PAIN-FREE MOVEMENT",
  "ACCESS TO EXPERT COACHES SPECIALIZING IN STRENGTH & MOBILITY",
];

/** Reusable CTA block — link wrapping heading + sub-text (matches live site pattern) */
function FoundersCTA({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#waitlist"
      className={`group block rounded-lg bg-brand-red px-8 py-6 text-center transition-opacity hover:opacity-90 ${className}`}
    >
      <h3 className="font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
        Only 15 Spots Remain
      </h3>
      <span className="mt-1 block text-sm text-white/90">
        Enter to claim one of our Founders Memberships today to our brand new
        South Portland/Cape Elizabeth LOCATION
      </span>
    </Link>
  );
}

export default function FoundersPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Reclaim Your Body at 50+"
        subheadline="Finally... a personal training gym in South Portland that UNDERSTANDS how the 50+ body actually works."
        ctaText="Only 15 Spots Remain"
        ctaHref="#waitlist"
      />

      {/* 3-Image Row — COMFORTABLE / EXPERIENCE / COMMUNITY */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "COMFORTABLE.", image: "/images/heroes/dsc-0926.webp" },
              { label: "EXPERIENCE.", image: "/images/heroes/dsc-1017.webp" },
              { label: "COMMUNITY.", image: "/images/heroes/dsc-1034.webp" },
            ].map((item) => (
              <div
                key={item.label}
                className="relative h-[300px] overflow-hidden rounded-lg sm:h-[350px]"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-heading text-2xl font-semibold uppercase text-white sm:text-3xl">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white pb-8">
        <Container>
          <FoundersCTA className="mx-auto max-w-xl" />
        </Container>
      </section>

      {/* Why Join the Waitlist — Dark section */}
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src="/images/heroes/img-0601.webp"
                alt="Spurling Fitness training"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-[42px] sm:leading-tight">
                Why Join the Waitlist...
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                This is only for those over 50 who want a fitness solution that
                is easy and personalized to them so they can get stronger, have
                more energy, and create a lasting habit of health.
              </p>

              <div className="space-y-5">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-red text-brand-red">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h3 className="font-heading text-base font-semibold text-white">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <FoundersCTA />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Inline Form Section */}
      <section id="waitlist" className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <ContactForm
              source="founders-page"
              locationDefault="south-portland"
              submitLabel="Lock In Your Founding Membership"
            />
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="mb-12 text-center font-heading text-4xl font-semibold uppercase text-brand-dark sm:text-6xl md:text-[76px] md:leading-[1.1]">
            Success Stories
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((video) => (
              <YouTubeEmbed
                key={video.id}
                videoId={video.videoId}
                title={video.name}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <FoundersCTA className="mx-auto max-w-xl" />
          </div>
        </Container>
      </section>

      {/* Contact Footer */}
      <ContactFooterSection
        source="founders-page"
        locationDefault="south-portland"
        formSubheading="Unleash your full potential and experience a life-changing transformation with our empowering fitness programs designed to help you achieve your dreams."
      />
    </>
  );
}
