import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleMap from "@/components/ui/GoogleMap";
import { locations } from "@/data/locations";

interface LocationsGridProps {
  heading?: string;
  className?: string;
}

export default function LocationsGrid({
  heading = "Our Locations",
  className = "",
}: LocationsGridProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {heading && (
          <SectionHeading className="mb-10 text-3xl sm:text-4xl">
            {heading}
          </SectionHeading>
        )}

        <div className="grid gap-8 md:grid-cols-3">
          {locations.map((loc) => (
            <div key={loc.id} className="overflow-hidden rounded-lg bg-white shadow-md">
              <GoogleMap
                embedUrl={loc.mapEmbedUrl}
                title={`${loc.name} location`}
              />
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-brand-gray-light">
                  {loc.address}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </p>
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-brand-red no-underline hover:text-brand-red-dark"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
