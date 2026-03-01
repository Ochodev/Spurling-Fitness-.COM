import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Image from "next/image";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import ClientFaq from "./ClientFaq";

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
        subheadline="Everything you need—workouts, nutrition guides, community links, and more—all in one place."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-8 text-center font-heading text-4xl font-bold uppercase text-brand-dark sm:text-[48px]">
              Frequently Asked Questions
            </h2>
            <ClientFaq />
          </div>
        </Container>
      </section>

      <SuccessStoriesSection />

      <ContactFooterSection source="client-page" />
    </>
  );
}
