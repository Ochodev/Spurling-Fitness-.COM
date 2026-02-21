import { generatePageMetadata } from "@/lib/metadata";
import ThankYouTemplate from "@/components/sections/ThankYouTemplate";

export const metadata = generatePageMetadata({
  title: "Thank You – South Portland",
  description: "Thank you for contacting Spurling Fitness South Portland. Our team will be in touch shortly.",
  path: "/thank-you-south-portland/",
});

export default function ThankYouSouthPortlandPage() {
  return (
    <ThankYouTemplate
      heading="Thank You!"
      subheading="Our South Portland team will be reaching out shortly."
      locationNote="239 Ocean St, South Portland, ME 04106"
    />
  );
}
