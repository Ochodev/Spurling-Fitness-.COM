import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/sections/LocationPageTemplate";

export const metadata = generatePageMetadata({
  title: "South Portland Personal Training Gym",
  description:
    "Spurling Fitness South Portland — personal training for people over 50 at 239 Ocean St. Small group & private sessions in a supportive environment.",
  path: "/locations/south-portland/",
});

export default function SouthPortlandLocationPage() {
  return (
    <LocationPageTemplate
      locationName="South Portland"
      address="239 Ocean St"
      city="South Portland"
      state="ME"
      zip="04106"
      lat={43.634134}
      lng={-70.252508}
      mapUrl="https://maps.google.com/?cid=4008052610521210393"
      directionsUrl="https://maps.google.com/maps?daddr=239+Ocean+St,+South+Portland,+ME+04106"
      heroImage="/images/heroes/dsc-1042.webp"
      placeId="ChIJ4YrbeBafskwRGRlo0jb6eDc"
      formSource="location-south-portland"
    />
  );
}
