import { GoogleReview } from "@/types";
import { PLACE_IDS } from "@/lib/constants";
import {
  fallbackReviews,
  fallbackRating,
  fallbackTotalReviews,
} from "@/data/reviews";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

/** 7-day revalidation in seconds */
const REVALIDATE_SECONDS = 604800;

const LOCATION_NAMES: Record<string, string> = {
  [PLACE_IDS.kennebunk]: "Kennebunk",
  [PLACE_IDS.scarborough]: "Scarborough",
  [PLACE_IDS.southPortland]: "South Portland",
};

interface PlacesApiReview {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
}

interface PlacesApiResponse {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
}

/**
 * Fetch reviews for a single location from the Google Places API (New).
 */
async function fetchLocationReviews(
  placeId: string
): Promise<{ rating: number; totalReviews: number; reviews: GoogleReview[] } | null> {
  if (!API_KEY) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews",
          "Content-Type": "application/json",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!res.ok) {
      console.error(
        `Google Places API error for ${placeId}: ${res.status} ${res.statusText}`
      );
      return null;
    }

    const data: PlacesApiResponse = await res.json();
    const locationName = LOCATION_NAMES[placeId] ?? "Spurling Fitness";

    const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
      authorName: r.authorAttribution?.displayName ?? "Anonymous",
      authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 5,
      text: r.text?.text ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
      locationName,
    }));

    return {
      rating: data.rating ?? 5,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
    };
  } catch (err) {
    console.error(`Failed to fetch reviews for ${placeId}:`, err);
    return null;
  }
}

export interface AllReviewsResult {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}

/**
 * Fetch reviews from all 3 Spurling Fitness locations.
 * Returns combined reviews, average rating, and total review count.
 * Falls back to static data if the API is unavailable.
 */
export async function fetchAllLocationReviews(): Promise<AllReviewsResult> {
  const placeIds = Object.values(PLACE_IDS);

  const results = await Promise.all(placeIds.map(fetchLocationReviews));

  // Check if we got any real data
  const validResults = results.filter(
    (r): r is NonNullable<typeof r> => r !== null
  );

  if (validResults.length === 0) {
    // Fallback to static data
    return {
      reviews: fallbackReviews,
      averageRating: fallbackRating,
      totalReviews: fallbackTotalReviews,
    };
  }

  // Combine all reviews, only include 5-star reviews
  const allReviews = validResults
    .flatMap((r) => r.reviews)
    .filter((r) => r.rating === 5);

  // Calculate weighted average rating
  const totalReviews = validResults.reduce((sum, r) => sum + r.totalReviews, 0);
  const weightedRatingSum = validResults.reduce(
    (sum, r) => sum + r.rating * r.totalReviews,
    0
  );
  const averageRating =
    totalReviews > 0
      ? Math.round((weightedRatingSum / totalReviews) * 10) / 10
      : 5.0;

  return {
    reviews: allReviews,
    averageRating,
    totalReviews,
  };
}
