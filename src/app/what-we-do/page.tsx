import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
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
        headline="Personal Training Services Across Kennebunk, Scarborough & South Portland."
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
              <p className="mt-6 text-[16px] leading-[24px] text-brand-dark">
                At Spurling Fitness, we offer a smarter, more supportive approach to
                fitness for adults 50+. Whether you&apos;re just getting started or
                looking to break through a plateau, we combine expert coaching, a
                proven system, and a welcoming community to help you look, move, and
                feel your best. With locations in{" "}
                <strong>Kennebunk, Scarborough &amp; South Portland</strong> we
                specialize in <strong>small group personal training</strong>,{" "}
                <strong>1-on-1 coaching</strong>, and{" "}
                <strong>nutrition guidance</strong> tailored to your life — not the
                other way around.
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
                <p className="mt-4 text-[16px] leading-[24px] text-white/90">
                  Our most popular option,{" "}
                  <strong>Small Group Personal Training</strong> delivers the results
                  of one-on-one coaching with the energy and accountability of a small
                  group. Each session is led by a professional coach, so you get
                  personalized attention in every workout. You&apos;ll follow a plan
                  designed specifically for your goals, abilities, and fitness
                  level—no more guessing, no generic workouts. Available at both our{" "}
                  <strong>Kennebunk,</strong>{" "}
                  <strong>Scarborough, &amp; South Portland</strong> locations.
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
                <p className="mt-4 text-[16px] leading-[24px] text-white/90">
                  Looking for a completely customized experience? Our{" "}
                  <strong>One-on-One Personal Training</strong> gives you the undivided
                  attention of your coach.
                  It&apos;s ideal for clients recovering from injury, managing chronic
                  conditions, or just wanting extra accountability. We build your
                  workouts, monitor your progress, and make adjustments in real time
                  so every session gets you closer to your goals. Private training is
                  available in both Kennebunk and Scarborough.
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
                <p className="mt-4 text-[16px] leading-[24px] text-white/90">
                  Nutrition shouldn&apos;t be complicated — and it definitely
                  shouldn&apos;t be one-size-fits-all. Our{" "}
                  <strong>nutrition coaching</strong> focuses
                  on helping you build sustainable habits around food, based on your
                  lifestyle and goals. Whether you want to lose weight, gain strength,
                  or boost your energy, we&apos;ll help you cut through the noise and
                  get results that last. This program complements your training and
                  gives you the tools to succeed beyond the gym.
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
