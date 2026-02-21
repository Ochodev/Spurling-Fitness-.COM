import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface HeroProps {
  backgroundImage: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
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
          <h1 className="font-heading text-4xl font-semibold uppercase text-white sm:text-5xl md:text-[64px]" style={{ lineHeight: "1" }}>
            {headline}
          </h1>
          {subheadline && (
            <h2 className={`mt-4 max-w-2xl font-heading text-[26px] font-normal text-white ${align === "center" ? "mx-auto" : ""}`} style={{ lineHeight: "1" }}>
              {subheadline}
            </h2>
          )}
          {ctaText && ctaHref && (
            <div className="mt-8">
              <Button href={ctaHref} variant="filled" size="default">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
