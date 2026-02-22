import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "sweat-hiit-workout-classes")!;
const location = locations.find((l) => l.id === "south-portland")!;

export const metadata = generatePageMetadata({
  title: "HIIT Workout Classes in South Portland, ME",
  description:
    "SWEAT HIIT workout classes at Spurling Fitness in South Portland, Maine. High-intensity, low-impact cardio sessions for adults over 50. Burn fat and build endurance. Free intro available.",
  path: "/what-we-do/sweat-hiit-workout-classes/south-portland/",
});

export default function SweatSouthPortlandPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="HIIT Workout Classes in South Portland, Maine"
      introText="Spurling Fitness on Ocean Street in South Portland brings our SWEAT HIIT workout classes to the Greater Portland area. These high-intensity, low-impact sessions are meticulously designed to boost your metabolism, burn maximum calories, and keep you energized — all in a supportive, coach-led environment built for adults over 50."
      benefitsHeading="Why South Portland Residents Choose HIIT Classes at Spurling"
    />
  );
}
