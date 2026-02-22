import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import CountdownTimer from "@/components/sections/CountdownTimer";
import Button from "@/components/ui/Button";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { videoTestimonials } from "@/data/testimonials";

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

export default function WaitlistPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Reclaim Your Body at 50+"
        subheadline="Finally... a personal training gym in South Portland/Cape Elizabeth Area that UNDERSTANDS how the 50+ body actually works."
        ctaText="Join the Waitlist Now!"
        ctaHref="#form"
      />

      {/* Value Props / Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="text-center">
          <ul className="mx-auto max-w-xl space-y-4 text-left">
            {waitlistBenefits.map((item) => (
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
              Join the Waitlist Now!
            </Button>
          </div>
        </Container>
      </section>

      {/* Countdown Timer — Dark section */}
      <section
        className="relative bg-brand-dark py-12"
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
        <Container className="relative z-[1] text-center">
          <p className="mb-4 font-heading text-xl text-white">
            3 Month Membership Winner Will Be Drawn On 12/1
          </p>
          <CountdownTimer targetDate="2026-12-01T00:00:00" />
        </Container>
      </section>

      {/* CTA repeat */}
      <section className="bg-white py-12 text-center">
        <Container>
          <Button href="#form" variant="filled" size="large">
            Join the Waitlist Now!
          </Button>
        </Container>
      </section>

      {/* Video Testimonials — Dark section */}
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
        </Container>
      </section>

      {/* Contact Form */}
      <ContactFooterSection source="waitlist-page" />
    </>
  );
}
