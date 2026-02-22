import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "small-group-personal-training")!;
const location = locations.find((l) => l.id === "kennebunk")!;

export const metadata = generatePageMetadata({
  title: "Small Group Personal Training in Kennebunk, ME",
  description:
    "Join small group personal training at Spurling Fitness in Kennebunk, Maine. Personalized coaching in groups of 6 or fewer for adults over 50. Schedule your free intro today.",
  path: "/what-we-do/small-group-personal-training/kennebunk/",
});

export default function SmallGroupKennebunkPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Small Group Personal Training in Kennebunk, Maine"
      introText="At Spurling Fitness in Kennebunk, our small group personal training program delivers the results of one-on-one coaching with the energy and accountability of a small group. Each session is led by a professional coach who tailors every workout to your abilities and goals — all in a group of 6 or fewer at our Alewive Park Road studio."
      benefitsHeading="Why Kennebunk Residents Choose Small Group Training at Spurling"
    />
  );
}
