import { generatePageMetadata } from "@/lib/metadata";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";

export const metadata = generatePageMetadata({
  title: "Free 14-Day Pass – South Portland",
  description:
    "Claim your free 14-day pass at Spurling Fitness South Portland. Personal training for adults over 50 at 239 Ocean St.",
  path: "/beacon/",
});

export default function BeaconPage() {
  return (
    <LandingPageTemplate
      heroImage="/images/heroes/dsc-1042.webp"
      headline="Beacon Residents Get Your Free 14-Day Pass at Spurling Fitness"
      subheadline="Come visit us, meet our team, and experience our incredible community — risk-free!"
      ctaText="Redeem Your Free 14-Day Pass!"
      formSource="beacon-landing"
      formLocation="south-portland"
      formButtonText="Claim My Free Pass"
    />
  );
}
