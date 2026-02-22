import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/forms/ContactForm";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import JsonLd from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/constants";

interface LocationPageProps {
  locationName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  mapUrl: string;
  directionsUrl: string;
  heroImage: string;
  placeId: string;
  formSource: string;
}

export default function LocationPageTemplate({
  locationName,
  address,
  city,
  state,
  zip,
  lat,
  lng,
  mapUrl,
  directionsUrl,
  heroImage,
  placeId,
  formSource,
}: LocationPageProps) {
  const fullAddress = `${address}, ${city}, ${state} ${zip}`;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: `Spurling Fitness – ${locationName}`,
    url: `${BRAND.url}/locations/${locationName.toLowerCase().replace(" ", "-")}/`,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${BRAND.url}/images/logo.svg`,
    hasMap: mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
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
  };

  return (
    <>
      <JsonLd id={`location-page-schema-${placeId}`} data={locationSchema} />

      <Hero
        backgroundImage={heroImage}
        headline={`Spurling Fitness ${locationName}`}
        subheadline={`Personal training for people over 50 in ${locationName}, Maine. Small group & private sessions in a supportive, results-driven environment.`}
        align="left"
      />

      {/* Location Details + Contact Form */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left — Location Info */}
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-heading text-3xl font-semibold text-brand-dark">
                Visit Our {locationName} Location
              </h2>

              {/* Address */}
              <div className="mb-6 flex items-start gap-3">
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
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-red hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-6 flex items-start gap-3">
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

              {/* Contact */}
              <div className="mb-8 flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-red"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-dark">
                    Contact
                  </p>
                  <a
                    href={BRAND.phoneHref}
                    className="block text-sm text-brand-gray hover:text-brand-red"
                  >
                    Call: {BRAND.phone}
                  </a>
                  <a
                    href={BRAND.textPhoneHref}
                    className="block text-sm text-brand-gray hover:text-brand-red"
                  >
                    Text: {BRAND.textPhone}
                  </a>
                  <a
                    href={BRAND.emailHref}
                    className="block text-sm text-brand-gray hover:text-brand-red"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-[280px] w-full overflow-hidden rounded-lg bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of Spurling Fitness ${locationName}`}
                />
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-heading text-3xl font-semibold text-brand-dark">
                Schedule Your Free Intro
              </h2>
              <p className="mb-6 text-brand-gray">
                Ready to see what Spurling Fitness is all about? Schedule a free,
                no-obligation introductory meeting at our {locationName} location.
                We&apos;ll learn about your goals and show you exactly how we can help.
              </p>
              <ContactForm source={formSource} />
            </div>
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />

      <ContactFooterSection source={formSource} hideForm />
    </>
  );
}
