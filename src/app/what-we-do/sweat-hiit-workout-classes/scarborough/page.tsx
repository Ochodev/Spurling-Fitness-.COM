import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "sweat-hiit-workout-classes")!;
const location = locations.find((l) => l.id === "scarborough")!;

export const metadata = generatePageMetadata({
  title: "HIIT Workout Classes in Scarborough, ME",
  description:
    "SWEAT HIIT workout classes at Spurling Fitness in Scarborough, Maine. High-intensity, low-impact cardio for adults over 50. Burn calories, build endurance, and stay energized. Free intro.",
  path: "/what-we-do/sweat-hiit-workout-classes/scarborough/",
});

export default function SweatScarboroughPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="HIIT Workout Classes in Scarborough, Maine"
      introText="Our Scarborough studio on Market Street offers SWEAT HIIT workout classes that combine high-intensity intervals with low-impact movements — designed specifically for adults over 50. Each session is led by expert coaches who help you push your limits safely while maximizing calorie burn and boosting cardiovascular fitness."
      benefitsHeading="Why Scarborough Residents Choose HIIT Classes at Spurling"
    />
  );
}
