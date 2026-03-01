import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface HeroProps {
  backgroundImage: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaNode?: React.ReactNode;
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
  ctaNode,
  overlay = true,
  align = "left",
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        compact ? "min-h-[400px] py-24 sm:py-32" : "min-h-[500px] py-20 sm:min-h-[600px]"
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
          <h1 className="font-heading text-4xl font-semibold uppercase leading-[1.15] text-white sm:text-5xl sm:leading-[1.1] md:text-[64px] md:leading-[1]">
            {headline}
          </h1>
          {subheadline && (
            <h2 className={`mt-8 max-w-2xl font-heading text-xl leading-[1.3] font-normal text-white sm:text-[26px] sm:leading-[1.2] ${align === "center" ? "mx-auto" : ""}`}>
              {subheadline}
            </h2>
          )}
          {ctaNode ? (
            <div className="mt-8">{ctaNode}</div>
          ) : ctaText && ctaHref ? (
            <div className="mt-8">
              <Button href={ctaHref} variant="filled" size="large">
                {ctaText}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
