import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import SelfHostedVideo from "@/components/ui/SelfHostedVideo";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
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

/** Reusable CTA block — matches live site red banner */
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
      {/* ─── 1. HERO ─── */}
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Reclaim Your Body at 50+"
        subheadline="Move Without Pain. Feel Energetic Again. Enjoy Life on YOUR Terms."
        ctaText="Only 15 Spots Remain"
        ctaHref="#waitlist"
      />

      {/* ─── 2. INTRO TEXT ─── */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-gray">
            Finally... a personal training gym in South Portland that{" "}
            <strong>UNDERSTANDS</strong> how the 50+ body actually works.
          </p>
        </Container>
      </section>

      {/* ─── 3. CTA ─── */}
      <section className="bg-white pb-8">
        <Container>
          <FoundersCTA className="mx-auto max-w-xl" />
        </Container>
      </section>

      {/* ─── 4. THREE SELF-HOSTED VIDEOS ─── */}
      <section className="bg-white pb-8 sm:pb-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            <SelfHostedVideo
              src="https://spurlingfitness.com/wp-content/uploads/video-5-spurling-5mp4.mp4"
              poster="https://spurlingfitness.com/wp-content/uploads/CleanShot-2025-11-06-at-16.56.02.png"
              label="COMFORTABLE"
            />
            <SelfHostedVideo
              src="https://spurlingfitness.com/wp-content/uploads/video-4-spurling-4.mp4"
              poster="https://spurlingfitness.com/wp-content/uploads/CleanShot-2025-11-06-at-16.54.44.png"
              label="EXPERIENCE."
            />
            <SelfHostedVideo
              src="https://spurlingfitness.com/wp-content/uploads/video-2-spurling-2mp4.mp4"
              poster="https://spurlingfitness.com/wp-content/uploads/CleanShot-2025-11-06-at-17.00.32.png"
              label="COMMUNITY."
            />
          </div>
        </Container>
      </section>

      {/* ─── 5. CTA ─── */}
      <section className="bg-white pb-12">
        <Container>
          <FoundersCTA className="mx-auto max-w-xl" />
        </Container>
      </section>

      {/* ─── 6. WHY JOIN THE WAITLIST (dark) ─── */}
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

      {/* ─── 7. SUCCESS STORIES — Google Reviews carousel ─── */}
      <SuccessStoriesSection />

      {/* ─── 8. YOUTUBE VIDEO TESTIMONIALS — carousel-style grid ─── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((video) => (
              <YouTubeEmbed
                key={video.id}
                videoId={video.videoId}
                title={video.name}
                poster={video.poster}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <FoundersCTA className="mx-auto max-w-xl" />
          </div>
        </Container>
      </section>

      {/* ─── 9. SUCCESS STORIES — Google Reviews carousel (2nd instance) ─── */}
      <SuccessStoriesSection />

      {/* ─── 10. VIEW MORE TESTIMONIALS ─── */}
      <section className="bg-white pb-12 text-center">
        <Container>
          <Link
            href="/testimonial/"
            className="inline-block rounded bg-brand-dark px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-red"
          >
            View More Testimonials
          </Link>
        </Container>
      </section>

      {/* ─── 11. CONTACT US / WAITLIST FORM ─── */}
      <section id="waitlist" className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold uppercase text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-300">
            Unleash your full potential and experience a life-changing
            transformation at Spurling. Fill out the form below and we will send
            you information on scheduling and pricing.
          </p>
          <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <ContactForm
              source="founders-page"
              locationDefault="south-portland"
              submitLabel="Lock In Your Founding Membership"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
