import Script from "next/script";

interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

/**
 * Renders JSON-LD structured data using next/script.
 * Safe to use with static data objects — no user input involved.
 */
export default function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  );
}
