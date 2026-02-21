import { generatePageMetadata } from "@/lib/metadata";
import ThankYouTemplate from "@/components/sections/ThankYouTemplate";

export const metadata = generatePageMetadata({
  title: "Thank You – Kennebunk",
  description: "Thank you for contacting Spurling Fitness Kennebunk. Our team will be in touch shortly.",
  path: "/thank-you-kennebunk/",
});

export default function ThankYouKennebunkPage() {
  return (
    <ThankYouTemplate
      heading="Thank You!"
      subheading="Our Kennebunk team will be reaching out shortly."
      locationNote="1 Alewive Park Road, Kennebunk, ME 04043"
    />
  );
}
