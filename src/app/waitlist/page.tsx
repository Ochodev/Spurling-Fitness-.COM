import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import CountdownTimer from "@/components/sections/CountdownTimer";
import { fetchAllLocationReviews } from "@/lib/google-reviews";
import { videoTestimonials } from "@/data/testimonials";
import WaitlistCTA from "./WaitlistCTA";

export const metadata = generatePageMetadata({
  title: "Waitlist SOPO",
  description:
    "Join the Spurling Fitness waitlist. Be the first to know when a spot opens up at Maine's best personal training gym for adults over 50.",
  path: "/waitlist/",
});

const waitlistBenefits = [
  "BE ENTERED TO WIN A 3-MONTH MEMBERSHIP ($1188 VALUE)",
  "20% OFF FOR LIFE",
  "WAIVED ENROLLMENT FEE",
  "EARLY VIP ACCESS BEFORE THE OFFICIAL LAUNCH",
  "PROVEN RESULTS: MORE STRENGTH, BETTER MOBILITY & PAIN-FREE MOVEMENT",
  "ACCESS TO EXPERT COACHES SPECIALIZING IN STRENGTH & MOBILITY",
];

export default async function WaitlistPage() {
  const { averageRating, totalReviews } = await fetchAllLocationReviews();

  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative flex min-h-[550px] items-center overflow-hidden py-20 sm:min-h-[600px]">
        <Image
          src="/images/heroes/img-49071.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
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
          {/* Social proof badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-base font-bold text-white">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-sm font-bold text-white">
              from {totalReviews}+ Google Reviews
            </span>
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          <h1 className="font-heading text-4xl font-extrabold uppercase text-white sm:text-5xl md:text-[56px]" style={{ lineHeight: "1.1", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Reclaim Your Body<br />
            <span className="text-brand-red">at 50+</span>
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-xl font-bold text-white sm:text-2xl" style={{ lineHeight: "1.3", textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}>
            Move Without Pain.<br />
            Feel Energetic Again.<br />
            Enjoy Life on <span className="underline">YOUR</span> Terms.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-relaxed text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
            Finally... a personal training gym in South Portland that{" "}
            <strong className="text-white">UNDERSTANDS</strong> how the 50+ body actually works.
          </p>

          <div className="mt-12 mb-8">
            <WaitlistCTA className="mx-auto max-w-xl" />
          </div>
        </Container>
      </section>

      {/* ─── 2. THREE VERTICAL VIDEOS ─── */}
      <section className="bg-white py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            <YouTubeEmbed videoId="qjwXmItUufA" title="COMFORTABLE" className="!aspect-[9/16]" />
            <YouTubeEmbed videoId="IH2ucKNQwRQ" title="EXPERIENCE." className="!aspect-[9/16]" />
            <YouTubeEmbed videoId="nkERQ3pRuIk" title="COMMUNITY." className="!aspect-[9/16]" />
          </div>
        </Container>
      </section>

      {/* ─── 3. CTA REPEAT ─── */}
      <section className="bg-white pb-10">
        <Container>
          <WaitlistCTA className="mx-auto max-w-xl" />
        </Container>
      </section>

      {/* ─── 4. COUNTDOWN TIMER ─── */}
      <section
        className="relative bg-brand-dark py-20 sm:py-28"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        <Container className="relative z-[1] text-center">
          <p className="mb-4 font-heading text-xl text-white">
            3 Month Membership Winner Will Be Drawn Soon
          </p>
          <CountdownTimer daysFromNow={12} />
        </Container>
      </section>

      {/* ─── 5. WHY JOIN THE WAITLIST + FORM ─── */}
      <section className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src="/images/heroes/img-what-we-do.webp"
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
                {waitlistBenefits.map((item) => (
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
                <WaitlistCTA />
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* ─── 6. VIDEO TESTIMONIALS ─── */}
      <section className="bg-white py-6">
        {/* Spacer for transition */}
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
            <WaitlistCTA className="mx-auto max-w-xl" />
          </div>
        </Container>
      </section>

      {/* ─── 7. GOOGLE REVIEWS CAROUSEL ─── */}
      <SuccessStoriesSection />

      {/* ─── 8. VIEW MORE TESTIMONIALS ─── */}
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

      {/* ─── 9. CONTACT US / FINAL FORM ─── */}
      <section id="waitlist" className="bg-brand-dark py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
            Contact Us
          </h2>
          <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <ContactForm
              source="waitlist-page-bottom"
              submitLabel="Get Started"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
