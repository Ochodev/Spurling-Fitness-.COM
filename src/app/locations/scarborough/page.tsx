import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/sections/LocationPageTemplate";

export const metadata = generatePageMetadata({
  title: "Scarborough Personal Training Gym",
  description:
    "Spurling Fitness Scarborough — personal training for people over 50 at 10 Market St, Suite 103. Small group & private sessions. Rated 5.0 stars on Google.",
  path: "/locations/scarborough/",
});

export default function ScarboroughLocationPage() {
  return (
    <LocationPageTemplate
      locationName="Scarborough"
      address="10 Market St, Suite 103"
      city="Scarborough"
      state="ME"
      zip="04074"
      lat={43.5981077}
      lng={-70.3604024}
      mapUrl="https://maps.google.com/?cid=5563613025174790019"
      directionsUrl="https://maps.google.com/maps?daddr=10+Market+St+Suite+103,+Scarborough,+ME+04074"
      heroImage="/images/heroes/dsc-1042.webp"
      placeId="ChIJeeHVzWKZskwRgwyFSFwxKU0"
      formSource="location-scarborough"
    />
  );
}
