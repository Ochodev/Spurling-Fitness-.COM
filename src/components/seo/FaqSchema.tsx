import JsonLd from "./JsonLd";
import { clientFaqItems } from "@/data/faq";

export default function FaqSchema() {
  const allItems = clientFaqItems.flatMap((cat) => cat.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd id="faq-schema" data={faqSchema} />;
}
