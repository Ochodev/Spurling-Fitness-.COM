import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface ThankYouTemplateProps {
  heading?: string;
  subheading?: string;
  locationNote?: string;
}

export default function ThankYouTemplate({
  heading = "Thank You!",
  subheading = "Our team will be reaching out shortly.",
  locationNote,
}: ThankYouTemplateProps) {
  return (
    <section className="flex min-h-[80vh] items-center bg-brand-dark py-20 pt-32">
      <Container className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
          {subheading}
        </p>
        {locationNote && (
          <p className="mt-2 text-gray-400">{locationNote}</p>
        )}
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
