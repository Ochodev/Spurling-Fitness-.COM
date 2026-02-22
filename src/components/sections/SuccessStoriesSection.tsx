"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { GoogleReview } from "@/types";

/* ── Star (bronze/copper color to match screenshot) ── */
function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#C17F59]">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ── Single review card ── */
function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm snap-start sm:w-[340px]">
      {/* Stars */}
      <div className="mb-5 flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Review text */}
      <p className="mb-6 flex-1 text-[15px] leading-relaxed text-brand-dark">
        &ldquo;{review.text.length > 220
          ? `${review.text.slice(0, 220)}...`
          : review.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="mb-5 border-t border-gray-200" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {review.authorPhotoUrl ? (
          <Image
            src={review.authorPhotoUrl}
            alt={review.authorName}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-400">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
        <div>
          <p className="font-heading text-sm font-semibold text-brand-dark">
            {review.authorName}
          </p>
          <p className="text-xs text-brand-gray-light">Google Review</p>
          {review.locationName && (
            <p className="text-xs text-brand-gray-light">{review.locationName}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Carousel with arrow navigation + dots ── */
interface SuccessStoriesCarouselProps {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}

export default function SuccessStoriesCarousel({
  reviews,
  averageRating,
  totalReviews,
}: SuccessStoriesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cardWidth = 356; // card width + gap
  const totalDots = Math.max(1, reviews.length - 2); // approximate pages

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate active dot
    const scrollPercent = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1);
    const dot = Math.round(scrollPercent * (totalDots - 1));
    setActiveDot(Math.max(0, Math.min(dot, totalDots - 1)));
  }, [totalDots]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Header row: title left, arrows right */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2
              className="font-heading text-4xl font-semibold text-brand-dark sm:text-5xl lg:text-[56px]"
              style={{ lineHeight: "1.1" }}
            >
              What Our Members Say
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-gray-light">
              Real results from real people across our{" "}
              <span className="font-semibold text-brand-dark">
                {totalReviews}+
              </span>{" "}
              five-star Google reviews
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-brand-dark transition-colors hover:border-brand-red hover:text-brand-red disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-brand-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-brand-dark transition-colors hover:border-brand-red hover:text-brand-red disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-brand-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {reviews.map((review, idx) => (
              <ReviewCard key={`${review.authorName}-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        {totalDots > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: Math.min(totalDots, 12) }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const scrollTo =
                    (i / (totalDots - 1)) *
                    (el.scrollWidth - el.clientWidth);
                  el.scrollTo({ left: scrollTo, behavior: "smooth" });
                }}
                aria-label={`Go to reviews page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeDot
                    ? "w-6 bg-brand-red"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Google attribution */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-xs text-brand-gray-light">Google Reviews</span>
        </div>
      </Container>
    </section>
  );
}
