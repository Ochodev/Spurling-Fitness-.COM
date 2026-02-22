import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "private-one-on-one")!;
const location = locations.find((l) => l.id === "south-portland")!;

export const metadata = generatePageMetadata({
  title: "Private One-on-One Personal Training in South Portland, ME",
  description:
    "Private one-on-one personal training at Spurling Fitness in South Portland, Maine. Customized coaching for adults over 50. Injury recovery, chronic conditions, and personalized fitness plans.",
  path: "/what-we-do/private-one-on-one/south-portland/",
});

export default function PrivateSouthPortlandPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Private One-on-One Personal Training in South Portland, Maine"
      introText="Spurling Fitness on Ocean Street in South Portland offers completely private personal training sessions with a dedicated coach. Get the undivided attention you deserve — with workouts designed specifically for your body, your goals, and your timeline. Perfect for the Greater Portland area."
      benefitsHeading="Why South Portland Residents Choose Private Training at Spurling"
    />
  );
}
