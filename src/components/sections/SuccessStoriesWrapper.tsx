import { fetchAllLocationReviews } from "@/lib/google-reviews";
import { BRAND } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import SuccessStoriesCarousel from "@/components/sections/SuccessStoriesSection";

/**
 * Server component that fetches Google reviews and renders the
 * client-side SuccessStoriesCarousel with AggregateRating schema.
 */
export default async function SuccessStoriesSection() {
  const { reviews, averageRating, totalReviews } =
    await fetchAllLocationReviews();

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: BRAND.name,
    url: BRAND.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      bestRating: "5",
      ratingCount: totalReviews,
    },
  };

  return (
    <>
      <JsonLd id="aggregate-rating-schema" data={aggregateRatingSchema} />
      <SuccessStoriesCarousel
        reviews={reviews}
        averageRating={averageRating}
        totalReviews={totalReviews}
      />
    </>
  );
}
