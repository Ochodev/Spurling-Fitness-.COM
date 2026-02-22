import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "small-group-personal-training")!;
const location = locations.find((l) => l.id === "scarborough")!;

export const metadata = generatePageMetadata({
  title: "Small Group Personal Training in Scarborough, ME",
  description:
    "Experience small group personal training at Spurling Fitness in Scarborough, Maine. Expert coaching in groups of 6 or fewer, designed for adults over 50. Book your free intro session.",
  path: "/what-we-do/small-group-personal-training/scarborough/",
});

export default function SmallGroupScarboroughPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Small Group Personal Training in Scarborough, Maine"
      introText="At our Scarborough studio on Market Street, Spurling Fitness offers small group personal training that combines expert coaching with the motivation of training alongside a small, supportive group. Every session is customized to your fitness level and goals — with no more than 6 people per group."
      benefitsHeading="Why Scarborough Residents Choose Small Group Training at Spurling"
    />
  );
}
