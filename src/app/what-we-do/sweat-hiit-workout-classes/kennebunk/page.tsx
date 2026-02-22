import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "sweat-hiit-workout-classes")!;
const location = locations.find((l) => l.id === "kennebunk")!;

export const metadata = generatePageMetadata({
  title: "HIIT Workout Classes in Kennebunk, ME",
  description:
    "SWEAT HIIT workout classes at Spurling Fitness in Kennebunk, Maine. High-intensity, low-impact cardio sessions designed for adults over 50. Boost metabolism and burn calories. Free intro.",
  path: "/what-we-do/sweat-hiit-workout-classes/kennebunk/",
});

export default function SweatKennebunkPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="HIIT Workout Classes in Kennebunk, Maine"
      introText="At Spurling Fitness in Kennebunk, our SWEAT HIIT workout classes combine short bursts of intense activity with recovery periods to maximize fat burn and improve cardiovascular health. These high-intensity, low-impact sessions are designed for adults over 50 who want to push their limits in a supportive, coach-led environment."
      benefitsHeading="Why Kennebunk Residents Choose HIIT Classes at Spurling"
    />
  );
}
