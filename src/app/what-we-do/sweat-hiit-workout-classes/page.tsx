import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { services } from "@/data/services";

const service = services.find((s) => s.id === "sweat-hiit-workout-classes")!;

export const metadata = generatePageMetadata({
  title: "Sweat – HIIT Workout Classes",
  description: service.shortDescription,
  path: "/what-we-do/sweat-hiit-workout-classes/",
});

export default function SweatHiitPage() {
  return (
    <>
      <Hero
        backgroundImage={service.image}
        headline="HIIT Workout Classes in Kennebunk"
        subheadline={service.shortDescription}
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-gray">
            Our classes combine short bursts of intense activity with periods of
            rest to maximize fat burn and improve cardiovascular health. Whether
            you&apos;re a seasoned athlete or new to HIIT, our trainers will
            ensure you get the most out of each workout. Join us to experience
            the benefits of increased endurance, strength, and overall fitness in
            a fun and challenging environment.
          </p>
        </Container>
      </section>

      {/* Benefits — Dark section */}
      <section className="bg-brand-dark py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src={service.image}
                alt="HIIT workout class"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-8 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                Why Choose HIIT Workout Classes at Spurling Fitness
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
                      <p className="mt-1 text-sm leading-relaxed text-gray-300">
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

      <SuccessStoriesSection />
      <ContactFooterSection
        source="sweat-hiit"
        formSubheading="Unleash your full potential and experience a life-changing transformation with our empowering fitness programs designed to help you achieve your dreams."
      />
    </>
  );
}
