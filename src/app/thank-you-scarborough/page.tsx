import { generatePageMetadata } from "@/lib/metadata";
import ThankYouTemplate from "@/components/sections/ThankYouTemplate";

export const metadata = generatePageMetadata({
  title: "Thank You – Scarborough",
  description: "Thank you for contacting Spurling Fitness Scarborough. Our team will be in touch shortly.",
  path: "/thank-you-scarborough/",
});

export default function ThankYouScarboroughPage() {
  return (
    <ThankYouTemplate
      heading="Thank You!"
      subheading="Our Scarborough team will be reaching out shortly."
      locationNote="10 Market St, Suite 103, Scarborough, ME 04074"
    />
  );
}
