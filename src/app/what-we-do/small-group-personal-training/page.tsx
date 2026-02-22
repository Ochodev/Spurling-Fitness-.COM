import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const service = services.find((s) => s.id === "small-group-personal-training")!;

export const metadata = generatePageMetadata({
  title: "Small Group Personal Training in Maine",
  description: service.shortDescription,
  path: "/what-we-do/small-group-personal-training/",
});

export default function SmallGroupPage() {
  return (
    <>
      <Hero
        backgroundImage={service.image}
        headline="Small Group Personal Training in Kennebunk, Scarborough & South Portland"
        subheadline="Experience the best of both worlds with Small Group Personal Training at Spurling Fitness. Enjoy the benefits of a customized workout within a supportive and energetic group setting."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* Centered intro paragraph (white bg) */}
      <section className="py-16 sm:py-20">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-gray">
            {service.shortDescription}
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
                src="/images/heroes/dsc-0906.webp"
                alt="Small group training"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-8 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                Why Choose Small Group Personal Training at Spurling Fitness
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                      <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
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
                  Talk to a Trainer!
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Available at All 3 Locations */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <Container>
          <h2 className="mb-4 text-center font-heading text-3xl font-semibold text-brand-dark sm:text-4xl">
            Available at All 3 Locations
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-brand-gray">
            Small group personal training is offered at every Spurling Fitness location across Southern Maine.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={`/what-we-do/small-group-personal-training/${loc.id}/`}
                className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-1 font-heading text-xl font-semibold text-brand-dark group-hover:text-brand-red">
                  {loc.name}
                </h3>
                <p className="mb-3 text-sm text-brand-gray">
                  {loc.address}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <span className="text-sm font-semibold text-brand-red">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />
      <ContactFooterSection source="small-group" />
    </>
  );
}
