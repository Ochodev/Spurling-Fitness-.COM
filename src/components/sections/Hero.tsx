import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface HeroProps {
  backgroundImage: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "filled" | "outlined";
  overlay?: boolean;
  align?: "left" | "center";
  compact?: boolean;
}

export default function Hero({
  backgroundImage,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  ctaVariant = "outlined",
  overlay = true,
  align = "left",
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        compact ? "min-h-[300px] py-16" : "min-h-[500px] py-20 sm:min-h-[600px]"
      }`}
    >
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Full-width reflected brushstroke at bottom — matches live site subpage hero pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
          backgroundSize: "60%",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* Content */}
      <Container className={`relative z-10 ${align === "center" ? "text-center" : "text-left"}`}>
        <div className={align === "left" ? "max-w-2xl" : ""}>
          <h1 className="font-heading text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl md:text-[64px] md:leading-[1.1]">
            {headline}
          </h1>
          {subheadline && (
            <p className={`mt-4 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl ${align === "center" ? "mx-auto" : ""}`}>
              {subheadline}
            </p>
          )}
          {ctaText && ctaHref && (
            <div className="mt-8">
              <Button href={ctaHref} variant={ctaVariant} size="large">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
