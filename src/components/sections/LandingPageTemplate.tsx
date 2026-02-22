import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";

interface LandingPageTemplateProps {
  heroImage: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  formSource: string;
  formLocation?: string;
  formSubheading?: string;
  formButtonText?: string;
}

export default function LandingPageTemplate({
  heroImage,
  headline,
  subheadline,
  ctaText = "Get Started",
  formSource,
  formLocation = "",
  formSubheading = "Fill out the form below and we will send you information on scheduling and pricing.",
  formButtonText = "Claim Your Free Pass",
}: LandingPageTemplateProps) {
  return (
    <>
      <Hero
        backgroundImage={heroImage}
        headline={headline}
        subheadline={subheadline}
        ctaText={ctaText}
        ctaHref="#form"
      />

      {/* 3-Step Process — Dark section */}
      <section
        className="relative bg-brand-dark py-16 sm:py-20"
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
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
            Simply Follow These Three Steps
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Fill Out the Form",
                description:
                  "Complete the short form below and tell us about your goals.",
              },
              {
                number: "2",
                title: "Keep an Eye Out",
                description:
                  "Keep an eye out for a text and/or email from our team.",
              },
              {
                number: "3",
                title: "Get Started",
                description:
                  "We'll chat to get to know all about you, answer your questions, and get you started in our introductory program.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-2xl font-bold text-white font-heading">
                  {step.number}
                </div>
                <h3 className="mb-2 font-heading text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* Form Section */}
      <section id="form" className="bg-brand-dark">
        <div className="relative h-[120px] w-full sm:h-[200px] md:h-[260px] lg:h-[308px]">
          <Image
            src="/images/dividers/texture-grunge.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="py-16 sm:py-20">
          <Container>
            <h2
              className="mb-4 text-center text-[42px] font-semibold uppercase text-brand-red sm:text-[54px]"
              style={{ fontFamily: "var(--font-teko), sans-serif" }}
            >
              Contact Us
            </h2>
            <p className="mb-10 text-center text-gray-300">
              {formSubheading}
            </p>

            <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <ContactForm
                source={formSource}
                locationDefault={formLocation}
                submitLabel={formButtonText}
              />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
