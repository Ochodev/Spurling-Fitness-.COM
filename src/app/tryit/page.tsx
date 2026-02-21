import { generatePageMetadata } from "@/lib/metadata";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";

export const metadata = generatePageMetadata({
  title: "28-Day Risk-Free Trial",
  description:
    "Try Spurling Fitness for 28 days risk-free. Personal training for adults over 50 with expert coaches, personalized plans, and a supportive community.",
  path: "/tryit/",
});

export default function TryItPage() {
  return (
    <LandingPageTemplate
      heroImage="/images/heroes/dsc-1017.webp"
      headline="Try 28 Days Risk-Free at Spurling Fitness"
      subheadline="Come visit us, meet our team, and experience our incredible community. We can't wait to meet you."
      ctaText="Redeem Your 28-Day Pass!"
      formSource="tryit-landing"
      formButtonText="Start My 28-Day Trial"
    />
  );
}
