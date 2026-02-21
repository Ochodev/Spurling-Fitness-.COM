import { generatePageMetadata } from "@/lib/metadata";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";

export const metadata = generatePageMetadata({
  title: "Free 7-Day Guest Pass",
  description:
    "Get a free 7-day guest pass at Spurling Fitness. Experience personal training for adults over 50 at our Kennebunk, Scarborough, or South Portland location.",
  path: "/guestpass/",
});

export default function GuestPassPage() {
  return (
    <LandingPageTemplate
      heroImage="/images/heroes/dsc-0906.webp"
      headline="Experience Spurling Fitness With a Free 7-Day Guest Pass"
      subheadline="Try our workouts, meet our coaches, and feel the difference — 100% commitment-free!"
      ctaText="Redeem Your Free 7-Day Pass!"
      formSource="guestpass-landing"
      formButtonText="Get My Free Pass"
    />
  );
}
