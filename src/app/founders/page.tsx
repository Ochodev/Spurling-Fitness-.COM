import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import Image from "next/image";
import { videoTestimonials } from "@/data/testimonials";
import { teamMembers } from "@/data/team";

const joseph = teamMembers.find((m) => m.id === "joseph-davenport")!;

export const metadata = generatePageMetadata({
  title: "VIP Founders Membership – South Portland",
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

export default function FoundersPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Reclaim Your Body at 50+"
        subheadline="Move Without Pain. Feel Energetic Again. Enjoy Life on YOUR Terms. Finally... a personal training gym in South Portland that UNDERSTANDS how the 50+ body actually works."
        ctaText="Only 15 Spots Remain"
        ctaHref="#form"
      />

      {/* Why Join the Waitlist */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="mb-6 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-[42px] sm:leading-tight">
            Why Join the Waitlist...
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-brand-gray-light">
            This is only for those over 50 who want a fitness solution that is
            easy and personalized to them so they can get stronger, have more
            energy, and create a lasting habit of health.
          </p>

          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs text-white">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="font-heading text-base font-semibold text-brand-dark">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="#form" variant="filled" size="large">
              Only 15 Spots Remain
            </Button>
          </div>
        </Container>
      </section>

      {/* Video Testimonials — Dark section with brushstroke top + bottom */}
      <section
        className="relative bg-brand-dark py-16 sm:py-20"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
            backgroundSize: "800px",
            backgroundPosition: "50% 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <Container className="relative z-[1]">
          <h2 className="mb-12 text-center font-heading text-4xl font-semibold uppercase text-brand-red sm:text-6xl md:text-[76px] md:leading-[1.1]">
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

          <div className="mt-12 text-center">
            <Button href="#form" variant="filled" size="large">
              Only 15 Spots Remain
            </Button>
          </div>
        </Container>
      </section>

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
                Integrator. Those experiences shaped how I lead, push through
                adversity, and motivate others through challenge and growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-light">
                Mixed Martial Arts deepened my understanding of movement, power,
                balance, and mental toughness — reinforcing that real progress
                comes through consistency. My background in rehabilitation
                support and corrective exercise inform a hands-on, detailed,
                supportive coaching approach.
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

      {/* Contact Form */}
      <ContactFooterSection
        source="founders-page"
        locationDefault="south-portland"
      />
    </>
  );
}
