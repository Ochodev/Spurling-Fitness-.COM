import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import SelfHostedVideo from "@/components/ui/SelfHostedVideo";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import { fetchAllLocationReviews } from "@/lib/google-reviews";
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

/** Reusable CTA block — direct response style with urgency + first-person language */
function FoundersCTA({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#waitlist"
      className={`group block rounded-lg bg-brand-red px-8 py-5 text-center shadow-lg shadow-brand-red/25 transition-all hover:shadow-xl hover:shadow-brand-red/30 hover:brightness-110 ${className}`}
    >
      <span className="mb-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
        Only 15 Founding Spots Remain
      </span>
      <h3 className="mt-2 font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
        Claim My Founders Membership
      </h3>
      <span className="mt-1 block text-sm text-white/90">
        South Portland / Cape Elizabeth &mdash; No commitment required
      </span>
    </Link>
  );
}

export default async function FoundersPage() {
  const { averageRating, totalReviews } = await fetchAllLocationReviews();

  return (
    <>
      {/* ─── 1. HERO — centered text with intro + CTA inside (matches WP) ─── */}
      <section className="relative flex min-h-[550px] items-center overflow-hidden py-20 sm:min-h-[600px]">
        <Image
          src="/images/heroes/dsc-1042.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Brushstroke bottom edge */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
            backgroundSize: "60%",
            backgroundPosition: "100% 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <Container className="relative z-10 text-center">
          {/* Social proof badge bar */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-sm text-white/80">
              from {totalReviews}+ Google Reviews
            </span>
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          <h1 className="font-heading text-4xl font-semibold uppercase text-white sm:text-5xl md:text-[56px]" style={{ lineHeight: "1.1" }}>
            Get Stronger, Move Better<br />
            <span className="text-brand-red">&amp; Feel Amazing at 50+</span>
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-xl font-normal text-white sm:text-2xl" style={{ lineHeight: "1.3" }}>
            Move Without Pain.<br />
            Feel Energetic Again.<br />
            Enjoy Life on <span className="underline">YOUR</span> Terms.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Finally... a personal training gym in South Portland that{" "}
            <strong className="text-white">UNDERSTANDS</strong> how the 50+ body actually works.
            <span className="mt-2 block text-base text-white/70">
              Expert coaches specializing in strength, mobility &amp; pain-free movement for adults over 50.
            </span>
          </p>

          {/* Micro-benefits strip */}
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Customized to Your Body", "Expert 50+ Coaches", "No Long-Term Contracts"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <FoundersCTA className="mx-auto max-w-xl" />
          </div>
        </Container>
      </section>

      {/* ─── 2. THREE SELF-HOSTED VIDEOS (white bg) ─── */}
      <section className="bg-white py-10 sm:py-14">
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

      {/* ─── 3. CTA ─── */}
      <section className="bg-white pb-10">
        <Container>
          <FoundersCTA className="mx-auto max-w-xl" />
        </Container>
      </section>

      {/* ─── 4. WHY JOIN THE WAITLIST + FORM (both in dark section, matches WP) ─── */}
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          {/* Why Join content */}
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
              <h2 className="mb-6 font-heading text-3xl font-semibold uppercase italic text-brand-red sm:text-[42px] sm:leading-tight">
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

          {/* Form directly in the dark section (no heading — matches WP) */}
          <div id="waitlist" className="mx-auto mt-16 max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <ContactForm
              source="founders-page"
              locationDefault="south-portland"
              submitLabel="Lock In Your Founding Membership"
            />
          </div>
        </Container>
      </section>

      {/* ─── 5. SUCCESS STORIES — YouTube Video Testimonials (dark bg, matches WP) ─── */}
      <section className="bg-white py-6">
        {/* Spacer for brushstroke transition */}
      </section>
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold uppercase text-white sm:text-4xl">
            Success Stories
          </h2>
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

      {/* ─── 6. SUCCESS STORIES — Google Reviews carousel ─── */}
      <SuccessStoriesSection />

      {/* ─── 7. VIEW MORE TESTIMONIALS ─── */}
      <section className="bg-white pb-12 text-center">
        <Container>
          <Link
            href="/testimonial/"
            className="inline-block rounded border border-brand-red px-6 py-3 text-sm font-semibold uppercase text-brand-red transition-colors hover:bg-brand-red hover:text-white"
          >
            View More Testimonials
          </Link>
        </Container>
      </section>

      {/* ─── 8. CONTACT US / FINAL FORM (dark bg, matches WP) ─── */}
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
            Contact Us
          </h2>
          <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <ContactForm
              source="founders-page-bottom"
              submitLabel="Get Started"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
