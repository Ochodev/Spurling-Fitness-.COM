import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "private-one-on-one")!;
const location = locations.find((l) => l.id === "kennebunk")!;

export const metadata = generatePageMetadata({
  title: "Private One-on-One Personal Training in Kennebunk, ME",
  description:
    "Private one-on-one personal training at Spurling Fitness in Kennebunk, Maine. Fully customized sessions with your own dedicated coach. Ideal for adults over 50. Schedule your free intro.",
  path: "/what-we-do/private-one-on-one/kennebunk/",
});

export default function PrivateKennebunkPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Private One-on-One Personal Training in Kennebunk, Maine"
      introText="At Spurling Fitness in Kennebunk, our private one-on-one personal training gives you the undivided attention of a dedicated coach. Every session is completely customized to your body, your goals, and your pace — ideal for clients recovering from injury, managing chronic conditions, or wanting maximum accountability."
      benefitsHeading="Why Kennebunk Residents Choose Private Training at Spurling"
    />
  );
}
