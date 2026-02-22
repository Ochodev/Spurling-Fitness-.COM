import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "nutritional-guidance")!;
const location = locations.find((l) => l.id === "south-portland")!;

export const metadata = generatePageMetadata({
  title: "Nutrition Coaching in South Portland, ME",
  description:
    "Personalized nutrition coaching at Spurling Fitness in South Portland, Maine. Sustainable, habit-based nutrition strategies for adults over 50. Try your first session free.",
  path: "/what-we-do/nutritional-guidance/south-portland/",
});

export default function NutritionSouthPortlandPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Nutrition Coaching in South Portland, Maine"
      introText="Spurling Fitness on Ocean Street in South Portland brings expert nutrition coaching to the Greater Portland area. We help you build sustainable habits around food that actually fit your life — no extreme diets, no rigid meal plans. Just practical, habit-based guidance tailored to your goals, your schedule, and your preferences."
      benefitsHeading="Why South Portland Residents Choose Nutrition Coaching at Spurling"
    />
  );
}
