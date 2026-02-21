import Image from "next/image";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md">
      {/* Photo */}
      {testimonial.photo && (
        <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      )}

      {/* Quote */}
      {testimonial.quote && (
        <blockquote className="mb-4 flex-1 text-center text-sm italic leading-relaxed text-brand-gray">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      )}

      {/* Name */}
      <p className="text-center font-heading text-base font-semibold text-brand-dark">
        {testimonial.name}
      </p>
    </div>
  );
}
