import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { GoogleReview } from "@/types";
import { fetchAllLocationReviews } from "@/lib/google-reviews";
import { BRAND } from "@/lib/constants";
import Image from "next/image";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-6 w-6" : "h-4 w-4";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "currentColor" : "none"}
          stroke={star <= Math.round(rating) ? "none" : "currentColor"}
          className={`${cls} ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="flex min-w-[300px] max-w-[380px] shrink-0 flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm snap-start">
      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p className="mb-4 mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
        {review.text.length > 200
          ? `${review.text.slice(0, 200)}...`
          : review.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {review.authorPhotoUrl ? (
          <Image
            src={review.authorPhotoUrl}
            alt={review.authorName}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
            {review.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-heading text-sm font-semibold text-brand-dark">
            {review.authorName}
          </p>
          <div className="flex items-center gap-2">
            {review.locationName && (
              <span className="text-xs text-brand-gray-light">
                {review.locationName}
              </span>
            )}
            {review.relativeTime && (
              <>
                <span className="text-xs text-gray-300">&middot;</span>
                <span className="text-xs text-brand-gray-light">
                  {review.relativeTime}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <section className="bg-white py-16 sm:py-20">
      <JsonLd id="aggregate-rating-schema" data={aggregateRatingSchema} />
      <Container className="text-center">
        <h2
          className="mb-8 font-heading text-4xl font-semibold uppercase text-brand-red sm:text-6xl md:text-[76px]"
          style={{ lineHeight: "1" }}
        >
          Success Stories
        </h2>

        {/* Aggregate rating */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div>
            <p className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-dark">
              {averageRating >= 4.5 ? "Excellent" : "Great"}
            </p>
            <div className="flex items-center justify-center">
              <StarRating rating={averageRating} size="lg" />
            </div>
            <p className="mt-1 text-sm text-brand-gray-light">
              Based on {totalReviews}+ reviews
            </p>
          </div>
        </div>

        {/* Scrollable review cards */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, idx) => (
              <ReviewCard key={`${review.authorName}-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Google attribution */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-xs text-brand-gray-light">Google Reviews</span>
        </div>

        <div className="mt-8">
          <Button href="/testimonial/" variant="outlined" size="large">
            View More Testimonials
          </Button>
        </div>
      </Container>
    </section>
  );
}
