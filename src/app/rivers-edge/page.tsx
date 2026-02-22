import { generatePageMetadata } from "@/lib/metadata";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";

export const metadata = generatePageMetadata({
  title: "Rivers Edge",
  description:
    "Rivers Edge residents: claim your free 14-day pass at Spurling Fitness Scarborough. Personal training for adults over 50.",
  path: "/rivers-edge/",
});

export default function RiversEdgePage() {
  return (
    <LandingPageTemplate
      heroImage="/images/heroes/dsc-1042.webp"
      headline="Rivers Edge Clients Get Your Free 14-Day Pass at Spurling Fitness"
      subheadline="Come visit us, meet our team, and experience our incredible community — risk-free!"
      ctaText="Redeem Your Free 14-Day Pass!"
      formSource="rivers-edge-landing"
      formLocation="scarborough"
      formButtonText="Claim My Free Pass"
    />
  );
}
