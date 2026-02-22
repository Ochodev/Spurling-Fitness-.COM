import { generatePageMetadata } from "@/lib/metadata";
import ServiceLocationTemplate from "@/components/sections/ServiceLocationTemplate";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "nutritional-guidance")!;
const location = locations.find((l) => l.id === "scarborough")!;

export const metadata = generatePageMetadata({
  title: "Nutrition Coaching in Scarborough, ME",
  description:
    "Nutrition coaching at Spurling Fitness in Scarborough, Maine. Practical, habit-based nutrition strategies tailored to your lifestyle. For adults over 50. Schedule your free intro.",
  path: "/what-we-do/nutritional-guidance/scarborough/",
});

export default function NutritionScarboroughPage() {
  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      heroHeadline="Nutrition Coaching in Scarborough, Maine"
      introText="Our Scarborough studio on Market Street offers personalized nutrition coaching that goes beyond generic meal plans. We focus on helping you build sustainable habits around food — based on your schedule, your preferences, and your real life. No extreme diets, no counting every calorie — just practical guidance that works."
      benefitsHeading="Why Scarborough Residents Choose Nutrition Coaching at Spurling"
    />
  );
}
