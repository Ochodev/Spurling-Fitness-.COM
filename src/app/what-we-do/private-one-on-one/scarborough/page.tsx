import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "private-one-on-one")!;
const location = locations.find((l) => l.id === "scarborough")!;

export const metadata = generatePageMetadata({
  title: "Private One-on-One Personal Training in Scarborough, ME",
  description:
    "Private personal training at Spurling Fitness in Scarborough, Maine. Fully customized one-on-one sessions with a dedicated coach for adults over 50. Book your free intro today.",
  path: "/what-we-do/private-one-on-one/scarborough/",
});

export default function PrivateScarboroughPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Private One-on-One Personal Training in Scarborough, Maine"
      introText="Our Scarborough studio on Market Street offers private one-on-one personal training with a coach who focuses entirely on you. Each session is tailored to your fitness level, health history, and goals — whether you're recovering from surgery, managing a chronic condition, or simply want a fully personalized experience."
      benefitsHeading="Why Scarborough Residents Choose Private Training at Spurling"
    />
  );
}
