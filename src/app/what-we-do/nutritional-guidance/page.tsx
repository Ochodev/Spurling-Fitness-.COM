import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { services } from "@/data/services";

const service = services.find((s) => s.id === "nutritional-guidance")!;

export const metadata = generatePageMetadata({
  title: "Nutritional Guidance",
  description: service.shortDescription,
  path: "/what-we-do/nutritional-guidance/",
});

export default function NutritionPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/misc/nutrition-food.webp"
        headline="Nutritional Coaching in Kennebunk & Scarborough That Actually Fits Your Life"
        subheadline="Achieving your fitness goals is not just about exercise; it's about fueling your body correctly too. At Spurling Fitness, our Nutritional Guidance service pairs you with a dedicated nutrition coach who will work with you to develop a sustainable eating plan tailored to your needs."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="mb-6 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
            You Can&apos;t Out-Train a Bad Diet — But You Can Build Habits
            That Last
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 text-center text-[16px] leading-[24px] text-brand-gray">
            <p>
              What you eat impacts how you feel, how you move, and how you show
              up every day. But with all the noise out there — keto, fasting,
              macros, low-carb, high-protein — it&apos;s easy to get
              overwhelmed. That&apos;s where we come in.
            </p>
            <p>
              Our <strong>nutritional coaching program</strong> is built around{" "}
              <em>you</em>. Your schedule. Your preferences. Your real life.
            </p>
            <p>We focus on sustainable changes that help you:</p>
            <ul className="mx-auto max-w-md space-y-2 text-left">
              <li>Lose weight without extreme restriction</li>
              <li>Fuel your workouts and recovery</li>
              <li>Build confidence around food</li>
              <li>Stay consistent — even when life gets busy</li>
            </ul>
          </div>
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
                src="/images/misc/nutrition-food.webp"
                alt="Nutritional guidance"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-8 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl md:text-[50px]" style={{ lineHeight: "1" }}>
                Why Choose Nutritional Guidance at Spurling Fitness
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
      <ContactFooterSection source="nutrition" />
    </>
  );
}
