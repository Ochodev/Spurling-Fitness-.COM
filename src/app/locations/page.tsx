import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { locations } from "@/data/locations";
import { BRAND } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Locations",
  description:
    "Find a Spurling Fitness location near you. Personal training gyms for people over 50 in Kennebunk, Scarborough, and South Portland, Maine.",
  path: "/locations/",
});

const locationDetails = [
  {
    ...locations[0],
    slug: "kennebunk",
    tagline: "Our flagship location — where it all started.",
  },
  {
    ...locations[1],
    slug: "scarborough",
    tagline: "Conveniently located in the heart of Scarborough.",
  },
  {
    ...locations[2],
    slug: "south-portland",
    tagline: "Serving the greater Portland area.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1042.webp"
        headline="Our Locations"
        subheadline="Three convenient locations across Southern Maine, each designed to help you feel your best after 50."
        align="left"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {locationDetails.map((loc) => (
              <div
                key={loc.id}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                {/* Map */}
                <div className="h-[200px] w-full bg-gray-100">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`)}&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${loc.name}`}
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-1 font-heading text-2xl font-semibold text-brand-dark">
                    {loc.name}
                  </h2>
                  <p className="mb-3 text-sm text-brand-gray-light">
                    {loc.tagline}
                  </p>
                  <p className="mb-1 text-sm text-brand-gray">
                    {loc.address}
                  </p>
                  <p className="mb-4 text-sm text-brand-gray">
                    {loc.city}, {loc.state} {loc.zip}
                  </p>

                  <div className="mb-4 space-y-1">
                    <p className="text-sm text-brand-gray">
                      <span className="font-semibold">M–F:</span> 5:00 AM – 7:00 PM
                    </p>
                    <p className="text-sm text-brand-gray">
                      <span className="font-semibold">Sat:</span> 7:00 AM – 11:00 AM
                    </p>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Button
                      href={`/locations/${loc.slug}/`}
                      variant="filled"
                      size="default"
                      className="flex-1"
                    >
                      Learn More
                    </Button>
                    <a
                      href={`https://maps.google.com/maps?daddr=${encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-md border border-brand-red px-4 py-2 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="mt-12 text-center">
            <p className="mb-2 text-lg text-brand-gray">
              Questions? Give us a call.
            </p>
            <a
              href={BRAND.phoneHref}
              className="font-heading text-2xl font-bold text-brand-red hover:underline"
            >
              {BRAND.phone}
            </a>
          </div>
        </Container>
      </section>

      <ContactFooterSection source="locations-index" />
    </>
  );
}
