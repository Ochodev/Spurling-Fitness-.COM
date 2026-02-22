import JsonLd from "./JsonLd";
import { BRAND } from "@/lib/constants";

const locations = [
  {
    name: "Spurling Fitness – Kennebunk",
    address: "1 Alewive Park Road",
    city: "Kennebunk",
    state: "ME",
    zip: "04043",
    lat: 43.4080817,
    lng: -70.5638155,
    mapUrl: "https://maps.google.com/?cid=16299652932729274437",
    placeId: "ChIJazfD8tGtskwRRYQLLKBfb-I",
  },
  {
    name: "Spurling Fitness – Scarborough",
    address: "10 Market St, Suite 103",
    city: "Scarborough",
    state: "ME",
    zip: "04074",
    lat: 43.5981077,
    lng: -70.3604024,
    mapUrl: "https://maps.google.com/?cid=5563613025174790019",
    placeId: "ChIJeeHVzWKZskwRgwyFSFwxKU0",
  },
  {
    name: "Spurling Fitness – South Portland",
    address: "239 Ocean St",
    city: "South Portland",
    state: "ME",
    zip: "04106",
    lat: 43.634134,
    lng: -70.252508,
    mapUrl: "https://maps.google.com/?cid=4008052610521210393",
    placeId: "ChIJ4YrbeBafskwRGRlo0jb6eDc",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BRAND.url}/#organization`,
  name: BRAND.name,
  url: BRAND.url,
  logo: `${BRAND.url}/images/logo.svg`,
  description:
    "Maine's best personal training gym for people over 50. Locations in Kennebunk, Scarborough, and South Portland.",
  telephone: BRAND.phone,
  email: BRAND.email,
  sameAs: [
    "https://www.facebook.com/SpurlingFitness",
    "https://www.instagram.com/spurlingfitness",
    "https://www.youtube.com/@SpurlingFitness",
  ],
  address: locations.map((loc) => ({
    "@type": "PostalAddress",
    streetAddress: loc.address,
    addressLocality: loc.city,
    addressRegion: loc.state,
    postalCode: loc.zip,
    addressCountry: "US",
  })),
};

const locationSchemas = locations.map((loc) => ({
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "@id": `${BRAND.url}/#${loc.city.toLowerCase().replace(" ", "-")}`,
  name: loc.name,
  url: BRAND.url,
  telephone: BRAND.phone,
  email: BRAND.email,
  image: `${BRAND.url}/images/logo.svg`,
  hasMap: loc.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: loc.address,
    addressLocality: loc.city,
    addressRegion: loc.state,
    postalCode: loc.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: loc.lat,
    longitude: loc.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "11:00",
    },
  ],
  parentOrganization: {
    "@id": `${BRAND.url}/#organization`,
  },
}));

export default function OrganizationSchema() {
  return (
    <>
      <JsonLd id="org-schema" data={organizationSchema} />
      {locationSchemas.map((schema, i) => (
        <JsonLd key={i} id={`location-schema-${i}`} data={schema} />
      ))}
    </>
  );
}
