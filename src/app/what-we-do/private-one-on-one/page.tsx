import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { services } from "@/data/services";

const service = services.find((s) => s.id === "private-one-on-one")!;

export const metadata = generatePageMetadata({
  title: "One-on-One Personal Training",
  description: service.shortDescription,
  path: "/what-we-do/private-one-on-one/",
});

export default function PrivateTrainingPage() {
  return (
    <>
      <Hero
        backgroundImage={service.image}
        headline="Private Personal Training in Kennebunk & Scarborough Designed Just for You"
        subheadline="Personalized training sessions with our expert coaches provide an amazing fitness experience tailored to your unique goals and needs. Our one-on-one sessions ensure that every workout is designed specifically for you, maximizing efficiency and results."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

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
                src="/images/heroes/dsc-1003.webp"
                alt="Private training"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-8 font-heading text-2xl font-semibold text-brand-red sm:text-3xl">
                Why Choose Private One-on-One at Spurling Fitness
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

      <SuccessStoriesSection />
      <ContactFooterSection source="private-training" />
    </>
  );
}
