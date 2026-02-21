import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface CtaSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "red" | "dark";
}

export default function CtaSection({
  headline = "Ready to Get Started?",
  subheadline = "Book a free consultation and see what Spurling Fitness can do for you.",
  ctaText = "Talk to a Trainer",
  ctaHref = "/contact-us/",
  variant = "red",
}: CtaSectionProps) {
  const bg = variant === "red" ? "bg-brand-red" : "bg-brand-dark";

  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <Container className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
          {headline}
        </h2>
        {subheadline && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            {subheadline}
          </p>
        )}
        <div className="mt-8">
          <Button
            href={ctaHref}
            variant={variant === "red" ? "outlined" : "filled"}
            className={
              variant === "red"
                ? "!border-white !text-white hover:!bg-white hover:!text-brand-red"
                : ""
            }
          >
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
