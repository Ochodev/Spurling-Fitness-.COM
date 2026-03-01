import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "mike",
    name: "Mike",
    quote:
      "I feel like I can do more physically now at age 56 than I could five years ago — I frequently ride 20 miles on my bike.",
    photo: "/images/testimonials/mike.webp",
  },
  {
    id: "sarah-g",
    name: "Sarah G.",
    quote:
      "Since being a part of the Spurling Family I have lost over 30 lbs, my clothes fit better, and I feel better about my body.",
    photo: "/images/testimonials/sarah-g.webp",
  },
  {
    id: "ashley-b",
    name: "Ashley B.",
    quote:
      "I am getting stronger and tighter. I really like the camaraderie that exists between Coaches and clients.",
    photo: "/images/testimonials/ashley-n.webp",
  },
];

export const videoTestimonials: {
  id: string;
  name: string;
  videoId: string;
  poster: string;
}[] = [
  { id: "video-1", name: "Success Story", videoId: "HSk_HYUHYqQ", poster: "/images/testimonials/testimonial-1.webp" },
  { id: "video-2", name: "Success Story", videoId: "0NIaNQSe2is", poster: "/images/testimonials/testimonial-2.webp" },
  { id: "video-3", name: "Success Story", videoId: "Wi6q-taJY1E", poster: "/images/testimonials/testimonial-3.webp" },
  { id: "video-4", name: "Success Story", videoId: "sBRGg-CLkmw", poster: "/images/testimonials/testimonial-4.webp" },
  { id: "video-5", name: "Success Story", videoId: "ndg04L100IE", poster: "/images/testimonials/testimonial-5.webp" },
  { id: "video-6", name: "Success Story", videoId: "Q-OIGp8MW5U", poster: "/images/testimonials/testimonial-6.webp" },
  { id: "video-7", name: "Success Story", videoId: "ci0SHiva5ac", poster: "/images/testimonials/testimonial-7.webp" },
  { id: "video-8", name: "Success Story", videoId: "RCeaCc6wK8k", poster: "/images/testimonials/testimonial-8.webp" },
  { id: "video-9", name: "Success Story", videoId: "EJ9eHCT-fkg", poster: "/images/testimonials/testimonial-9.webp" },
  { id: "video-10", name: "Comfortable", videoId: "qjwXmItUufA", poster: "" },
  { id: "video-11", name: "Experience", videoId: "IH2ucKNQwRQ", poster: "" },
  { id: "video-12", name: "Community", videoId: "nkERQ3pRuIk", poster: "" },
];
