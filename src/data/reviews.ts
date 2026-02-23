import { GoogleReview } from "@/types";

/**
 * Static fallback reviews displayed when the Google Places API
 * is unavailable or GOOGLE_PLACES_API_KEY is not set.
 */
export const fallbackReviews: GoogleReview[] = [
  {
    authorName: "Lynn Jourdan",
    authorPhotoUrl: null,
    rating: 5,
    text: "Spurling is exceptional. I am 73 and have been going to the gym since I was in my late 40s. The professional team makes all the difference.",
    relativeTime: "",
    locationName: "Kennebunk",
  },
  {
    authorName: "Washburn Family",
    authorPhotoUrl: null,
    rating: 5,
    text: "We joined Spurling because we needed accountability and direction with our fitness goals. The coaches are amazing and truly care about each member.",
    relativeTime: "",
    locationName: "Scarborough",
  },
  {
    authorName: "Martha Crow",
    authorPhotoUrl: null,
    rating: 5,
    text: "Spurling has been life changing! I've been going for over a year and have gained strength, confidence and friends. Best decision I ever made.",
    relativeTime: "",
    locationName: "South Portland",
  },
];

export const fallbackRating = 5.0;
export const fallbackTotalReviews = 194;
