import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "nutritional-guidance")!;
const location = locations.find((l) => l.id === "kennebunk")!;

export const metadata = generatePageMetadata({
  title: "Nutrition Coaching in Kennebunk, ME",
  description:
    "Personalized nutrition coaching at Spurling Fitness in Kennebunk, Maine. Build sustainable eating habits that support your fitness goals. For adults over 50. Free intro available.",
  path: "/what-we-do/nutritional-guidance/kennebunk/",
});

export default function NutritionKennebunkPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Nutrition Coaching in Kennebunk, Maine"
      introText="At Spurling Fitness in Kennebunk, our nutrition coaching program helps you build sustainable habits around food — based on your lifestyle, your preferences, and your goals. Whether you want to lose weight, gain strength, or boost your energy, our coaches guide you with practical, habit-based strategies that actually fit your life."
      benefitsHeading="Why Kennebunk Residents Choose Nutrition Coaching at Spurling"
    />
  );
}
