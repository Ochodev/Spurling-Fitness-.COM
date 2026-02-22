import { generatePageMetadata } from "@/lib/metadata";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";

export const metadata = generatePageMetadata({
  title: "10 market St",
  description:
    "Claim your free 14-day pass at Spurling Fitness Scarborough. Located at 10 Market St, we specialize in personal training for adults over 50.",
  path: "/10market/",
});

export default function TenMarketPage() {
  return (
    <LandingPageTemplate
      heroImage="/images/heroes/dsc-1042.webp"
      headline="10 Market St Neighbors Get Your Free 14-Day Pass at Spurling Fitness"
      subheadline="Come visit us, meet our team, and experience our incredible community — risk-free!"
      ctaText="Redeem Your Free 14-Day Pass!"
      formSource="10market-landing"
      formLocation="scarborough"
      formButtonText="Claim My Free Pass"
    />
  );
}
