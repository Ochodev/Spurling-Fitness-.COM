"use client";

import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  heading?: string;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials,
  heading = "Success Stories",
  className = "",
}: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <SectionHeading className="mb-10 text-3xl sm:text-4xl">
          {heading}
        </SectionHeading>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-brand-red hover:text-white md:block cursor-pointer"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-brand-red hover:text-white md:block cursor-pointer"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          {/* Carousel track */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[300px] shrink-0 snap-start sm:w-[340px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
