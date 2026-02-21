import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";

interface ContactFooterSectionProps {
  source?: string;
  locationDefault?: string;
  hideForm?: boolean;
  formSubheading?: string;
  formButtonText?: string;
}

export default function ContactFooterSection({
  source = "website",
  locationDefault = "",
  hideForm = false,
  formSubheading,
  formButtonText,
}: ContactFooterSectionProps) {
  return (
    <section className="bg-brand-dark">
      {/* Orange/red grunge texture divider */}
      <div className="relative h-[120px] w-full sm:h-[200px] md:h-[260px] lg:h-[308px]">
        <Image
          src="/images/dividers/texture-grunge.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {!hideForm && (
        <div className="py-16 sm:py-20">
          <Container>
            <h2 className="mb-4 text-center text-[42px] font-semibold uppercase text-brand-red sm:text-[54px]" style={{ fontFamily: "var(--font-teko), sans-serif" }}>
              Contact Us
            </h2>
            {formSubheading && (
              <p className="mb-10 text-center text-gray-300">
                {formSubheading}
              </p>
            )}
            {!formSubheading && <div className="mb-6" />}

            <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <ContactForm
                source={source}
                locationDefault={locationDefault}
                submitLabel={formButtonText}
              />
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
