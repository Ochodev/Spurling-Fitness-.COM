import { generatePageMetadata } from "@/lib/metadata";
import ThankYouTemplate from "@/components/sections/ThankYouTemplate";

export const metadata = generatePageMetadata({
  title: "Application Received",
  description: "Thank you for applying to Spurling Fitness. We'll review your application and be in touch.",
  path: "/thank-you-jobs/",
});

export default function ThankYouJobsPage() {
  return (
    <ThankYouTemplate
      heading="Application Received!"
      subheading="Thank you for your interest in joining the Spurling team. We'll review your application and be in touch soon."
    />
  );
}
