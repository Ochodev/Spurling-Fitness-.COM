import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/sections/LocationPageTemplate";

export const metadata = generatePageMetadata({
  title: "Kennebunk Personal Training Gym",
  description:
    "Spurling Fitness Kennebunk — personal training for people over 50 at 1 Alewive Park Road. Small group & private sessions. Rated 4.9 stars with 170+ Google reviews.",
  path: "/locations/kennebunk/",
});

export default function KennebunkLocationPage() {
  return (
    <LocationPageTemplate
      locationName="Kennebunk"
      address="1 Alewive Park Road"
      city="Kennebunk"
      state="ME"
      zip="04043"
      lat={43.4080817}
      lng={-70.5638155}
      mapUrl="https://maps.google.com/?cid=16299652932729274437"
      directionsUrl="https://maps.google.com/maps?daddr=1+Alewive+Park+Road,+Kennebunk,+ME+04043"
      heroImage="/images/heroes/dsc-1042.webp"
      placeId="ChIJazfD8tGtskwRRYQLLKBfb-I"
      formSource="location-kennebunk"
    />
  );
}
