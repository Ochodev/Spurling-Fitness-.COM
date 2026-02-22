import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "small-group-personal-training")!;
const location = locations.find((l) => l.id === "south-portland")!;

export const metadata = generatePageMetadata({
  title: "Small Group Personal Training in South Portland, ME",
  description:
    "Small group personal training at Spurling Fitness in South Portland, Maine. Personalized coaching in groups of 6 or fewer for adults over 50. Try your first session free.",
  path: "/what-we-do/small-group-personal-training/south-portland/",
});

export default function SmallGroupSouthPortlandPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Small Group Personal Training in South Portland, Maine"
      introText="Spurling Fitness on Ocean Street in South Portland brings our signature small group personal training to the Greater Portland area. Train in a group of 6 or fewer with a dedicated coach who customizes every workout to your abilities and goals — in a welcoming, results-driven environment."
      benefitsHeading="Why South Portland Residents Choose Small Group Training at Spurling"
    />
  );
}
