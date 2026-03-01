import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import Image from "next/image";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "Testimonials",
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
        subheadline="Discover how our programs have transformed lives and helped our members achieve their fitness goals. Real stories from our dedicated community at Spurling Fitness."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
        align="left"
      />

      {/* ─── VIDEO TESTIMONIALS ─── */}
      <section
        className="relative bg-brand-dark py-20 sm:py-28"
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
          <h2 className="mb-4 text-center font-heading text-4xl font-semibold uppercase text-white sm:text-5xl">
            Success Stories
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-300">
            Hear directly from our members about how Spurling Fitness changed their lives.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((video) => (
              <YouTubeEmbed
                key={video.id}
                videoId={video.videoId}
                title={video.name}
                poster={video.poster}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ─── WRITTEN TESTIMONIALS ─── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <h2
            className="mb-4 text-center font-heading text-4xl font-semibold uppercase text-brand-dark sm:text-5xl"
          >
            Stories That Inspire
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-brand-gray-light">
            Real results from real people — our members share what training at Spurling means to them.
          </p>
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
                  <p className="mb-3 text-base leading-relaxed text-brand-gray">
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

      {/* ─── GOOGLE REVIEWS CAROUSEL ─── */}
      <SuccessStoriesSection />

      {/* Grunge divider + Contact Footer */}
      <ContactFooterSection source="testimonial-page" />
    </>
  );
}
