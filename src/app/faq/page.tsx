import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata = generatePageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Spurling Fitness personal training. Learn about our programs, scheduling, and what to expect.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <Hero
        backgroundImage="/images/heroes/dsc-1003.webp"
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about training at Spurling"
        compact
      />

      <FaqAccordion />

      <SuccessStoriesSection />

      <ContactFooterSection source="faq" />
    </>
  );
}
