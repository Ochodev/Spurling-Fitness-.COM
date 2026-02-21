import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "What We Do",
  description:
    "Explore Spurling Fitness personal training services: small group training, one-on-one coaching, and nutrition coaching for adults over 50.",
  path: "/what-we-do/",
});

export default function WhatWeDoPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1003.webp"
        headline="Personal Training Services Across Kennebunk, Scarborough & South Portland"
        subheadline="From personalized training to nutritional guidance, Spurling Fitness offers a comprehensive approach to health and wellness. Explore our services and discover how we can help you achieve your fitness goals."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* What We Do — 2-column intro (white bg) */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-1/2">
              <h3 className="font-heading text-4xl font-semibold uppercase text-brand-red sm:text-5xl md:text-[59px]" style={{ lineHeight: "1" }}>
                What We Do
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                At Spurling Fitness, we understand that fitness is not
                one-size-fits-all, especially for adults over 50. That&apos;s why we
                offer a range of services designed to meet you where you are and help
                you get where you want to be.
              </p>
              <div className="mt-8">
                <Button href="/contact-us/" variant="outlined" size="large">
                  Talk to a Trainer!
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg lg:h-[600px] lg:w-1/2">
              <Image
                src="/images/misc/img-7817.webp"
                alt="Spurling Fitness members"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services — Dark section with brushstroke top + bottom */}
      <section
        className="relative bg-brand-dark py-16 sm:py-24"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        {/* Bottom reflected brushstroke */}
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
          <div className="space-y-16">
            {/* Small Group — Image Left, Text Right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg lg:h-[400px] lg:w-1/2">
                <Image
                  src="/images/heroes/dsc-0906.webp"
                  alt="Small group training session"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                  Small Group Personal Training
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  Experience the best of both worlds — personalized coaching in an
                  energizing small group of no more than 6 people. You get individual
                  attention with the energy and accountability of a group.
                </p>
                <div className="mt-6">
                  <Button href="/what-we-do/small-group-personal-training/" variant="outlined" className="!border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white">
                    Tell Me More
                  </Button>
                </div>
              </div>
            </div>

            {/* Private — Text Left, Image Right */}
            <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">
              <div className="lg:w-1/2">
                <h3 className="font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                  Private Personal Training Tailored Just for You
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  Personalized training sessions with our expert coaches provide an
                  amazing fitness experience tailored to your unique goals and needs.
                  Our one-on-one sessions ensure that every workout is designed
                  specifically for you, maximizing efficiency and results.
                </p>
                <div className="mt-6">
                  <Button href="/what-we-do/private-one-on-one/" variant="outlined" className="!border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white">
                    Tell Me More
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg lg:h-[400px] lg:w-1/2">
                <Image
                  src="/images/heroes/dsc-1003.webp"
                  alt="Private training session"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            {/* Nutrition — Image Left, Text Right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg lg:h-[400px] lg:w-1/2">
                <Image
                  src="/images/misc/nutrition-food.webp"
                  alt="Nutritional guidance"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                  Practical Nutrition Guidance That Fits Your Life
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  Achieving your fitness goals is not just about exercise; it&apos;s
                  about fueling your body correctly too. Our Nutritional Guidance
                  service pairs you with a dedicated nutrition coach who will work
                  with you to develop a sustainable eating plan tailored to your needs.
                </p>
                <div className="mt-6">
                  <Button href="/what-we-do/nutritional-guidance/" variant="outlined" className="!border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white">
                    Tell Me More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />

      <ContactFooterSection source="what-we-do" />
    </>
  );
}
