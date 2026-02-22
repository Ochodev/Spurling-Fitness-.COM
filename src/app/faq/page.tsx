import { generatePageMetadata } from "@/lib/metadata";
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
      {/* No hero — FAQ page goes straight to Success Stories with Google Reviews */}
      <div className="pt-24" />
      <SuccessStoriesSection />

      <ContactFooterSection source="faq" />
    </>
  );
}
