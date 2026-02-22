import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Accordion from "@/components/sections/Accordion";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { clientFaqItems } from "@/data/faq";

export const metadata = generatePageMetadata({
  title: "Client Electronic Bulletin Board",
  description:
    "Everything you need as a Spurling Fitness client — scheduling, billing, nutrition, programming, and more. Your go-to resource hub.",
  path: "/client/",
});

export default function ClientPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-0926.webp"
        headline="Your Spurling Fitness Resource Hub"
        subheadline="Everything you need — workouts, nutrition guides, community links, and more — all in one place."
      />

      {/* FAQ Accordion Sections */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {clientFaqItems.map((category) => (
              <div key={category.category} className="mb-10">
                <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-dark">
                  {category.category}
                </h2>
                <Accordion items={category.items} />
              </div>
            ))}
          </div>

          {/* App & Resource Links */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-brand-gray-lighter p-8">
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-brand-dark">
              Helpful Links
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://apps.apple.com/us/app/spurling-fitness/id6740281031"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white p-4 text-center font-semibold text-brand-red no-underline shadow-sm transition-shadow hover:shadow-md"
              >
                Kennebunk Scheduling App
              </a>
              <a
                href="https://client.naamly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white p-4 text-center font-semibold text-brand-red no-underline shadow-sm transition-shadow hover:shadow-md"
              >
                Scarborough / South Portland Portal
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLGTbfEmXJinaCc_2j_x0aORmXQppu967j"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white p-4 text-center font-semibold text-brand-red no-underline shadow-sm transition-shadow hover:shadow-md"
              >
                Virtual Workout Library
              </a>
              <a
                href="https://inbodyusa.com/inbody-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white p-4 text-center font-semibold text-brand-red no-underline shadow-sm transition-shadow hover:shadow-md"
              >
                InBody App
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* Contact Footer */}
      <ContactFooterSection source="client-page" />
    </>
  );
}
