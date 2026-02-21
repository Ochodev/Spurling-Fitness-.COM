import { generatePageMetadata } from "@/lib/metadata";
import ThankYouTemplate from "@/components/sections/ThankYouTemplate";

export const metadata = generatePageMetadata({
  title: "Thank You",
  description: "Thank you for contacting Spurling Fitness. Our team will be in touch shortly.",
  path: "/thank-you/",
});

export default function ThankYouPage() {
  return <ThankYouTemplate />;
}
