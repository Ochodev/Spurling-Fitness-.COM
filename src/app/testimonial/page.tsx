import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "Testimonial",
  description:
    "Read success stories from Spurling Fitness clients. Real people, real results — see how our personal training helps adults over 50 transform their lives.",
  path: "/testimonial/",
});

export default function TestimonialPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1017.webp"
        headline="Testimonials"
        subheadline="Discover how our programs have transformed lives and helped our members achieve their fitness goals. Read real stories and experiences from our dedicated community at Spurling Fitness."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* Testimonials Grid */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="mb-12 text-center font-heading text-4xl font-semibold uppercase text-brand-dark sm:text-6xl md:text-[76px]" style={{ lineHeight: "1" }}>
            Stories That Inspire
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
              >
                {t.photo && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="mb-3 text-sm leading-relaxed text-brand-gray">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-heading text-sm font-semibold text-brand-dark">
                    — {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Grunge divider + Contact Footer */}
      <ContactFooterSection source="testimonial-page" />
    </>
  );
}
