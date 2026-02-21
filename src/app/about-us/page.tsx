import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import TeamGrid from "@/components/team/TeamGrid";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { teamMembers } from "@/data/team";

export const metadata = generatePageMetadata({
  title: "Who We Are",
  description:
    "Meet the coaching team at Spurling Fitness. Our certified coaches are dedicated to helping adults over 50 build strength, move better, and live their best lives.",
  path: "/about-us/",
});

export default function AboutUsPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-0926.webp"
        headline="Welcome to Spurling Fitness"
        subheadline="We're more than a gym, we're a community across Kennebunk, Scarborough, and South Portland areas dedicated to helping individuals over 50 find confidence, strength, and wellness in every step of their journey."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* Dark team section with brushstroke top + bottom */}
      <section
        className="relative bg-brand-dark py-16 sm:py-24"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        {/* Bottom reflected brushstroke */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
            backgroundSize: "800px",
            backgroundPosition: "50% 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <div className="relative z-[1]">
          <TeamGrid members={teamMembers} heading="Meet Our Team" />
        </div>
      </section>

      <SuccessStoriesSection />

      <ContactFooterSection source="about-us" />
    </>
  );
}
