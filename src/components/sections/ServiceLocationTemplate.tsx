import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import JsonLd from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/constants";
import { Service, Location } from "@/types";

interface ServiceLocationPageProps {
  service: Service;
  location: Location;
  heroHeadline: string;
  introText: string;
  benefitsHeading: string;
}

export default function ServiceLocationTemplate({
  service,
  location,
  heroHeadline,
  introText,
  benefitsHeading,
}: ServiceLocationPageProps) {
  const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;
  const locationSlug = location.id;
  const serviceSlug = service.id;
  const pageUrl = `${BRAND.url}/what-we-do/${serviceSlug}/${locationSlug}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${location.name}, ME`,
    description: service.shortDescription,
    url: pageUrl,
    serviceType: "Personal Training",
    provider: {
      "@type": "HealthClub",
      name: `Spurling Fitness – ${location.name}`,
      url: `${BRAND.url}/locations/${locationSlug}/`,
      telephone: BRAND.phone,
      email: BRAND.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.lat,
        longitude: location.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
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
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: "Maine",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "What We Do",
        item: `${BRAND.url}/what-we-do/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${BRAND.url}/what-we-do/${serviceSlug}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: pageUrl,
      },
    ],
  };

  const formSource = `${serviceSlug}-${locationSlug}`;

  return (
    <>
      <JsonLd
        id={`service-location-${serviceSlug}-${locationSlug}`}
        data={serviceSchema}
      />
      <JsonLd
        id={`breadcrumb-${serviceSlug}-${locationSlug}`}
        data={breadcrumbSchema}
      />

      <Hero
        backgroundImage={service.image}
        headline={heroHeadline}
        subheadline={service.tagline}
        ctaText="Schedule Your Free Intro"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* Intro Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-gray">
            {introText}
          </p>
        </Container>
      </section>

      {/* Benefits — Dark section with brushstroke top + bottom */}
      <section
        className="relative bg-brand-dark py-16 sm:py-24"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
            backgroundSize: "800px",
            backgroundPosition: "50% 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <Container className="relative z-[1]">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src={service.image}
                alt={`${service.name} at Spurling Fitness ${location.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2
                className="mb-8 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]"
                style={{ lineHeight: "1" }}
              >
                {benefitsHeading}
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="h-4 w-4"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact-us/" variant="filled" size="large">
                  Schedule Your Free Intro
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location Details */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <Container>
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold text-brand-dark sm:text-4xl">
            Visit Our {location.name} Location
          </h2>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Map */}
            <div className="h-[280px] w-full overflow-hidden rounded-lg bg-gray-100 lg:w-1/2">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of Spurling Fitness ${location.name}`}
              />
            </div>

            {/* Info */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-red"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-dark">
                    {fullAddress}
                  </p>
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-red hover:underline"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="mb-4 flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-red"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-dark">
                    Hours
                  </p>
                  <p className="text-sm text-brand-gray">
                    Monday – Friday: 5:00 AM – 7:00 PM
                  </p>
                  <p className="text-sm text-brand-gray">
                    Saturday: 7:00 AM – 11:00 AM
                  </p>
                  <p className="text-sm text-brand-gray">Sunday: Closed</p>
                </div>
              </div>

              <div className="mb-6 flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-red"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="block text-sm text-brand-gray hover:text-brand-red"
                  >
                    Call: {BRAND.phone}
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="block text-sm text-brand-gray hover:text-brand-red"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <Button href="/contact-us/" variant="filled" size="large">
                Schedule Your Free Intro
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />
      <ContactFooterSection source={formSource} />
    </>
  );
}
