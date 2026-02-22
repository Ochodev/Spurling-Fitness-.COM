# Google Reviews Integration Design

**Date:** 2026-02-22
**Status:** Approved

## Goal

Replace hardcoded review cards in the Success Stories section with live Google reviews pulled from all 3 Spurling Fitness locations via the Google Places API (New).

## Architecture

```
Google Places API (New) → Next.js Server Component (cached 7 days) → SuccessStoriesSection
                                                                    ↓ (fallback)
                                                     Static reviews in src/data/reviews.ts
```

## Place IDs

| Location | Place ID |
|----------|----------|
| Kennebunk | `ChIJazfD8tGtskxFhAssoF9v4g` |
| Scarborough | `ChIJeeHVzWKZskyDDIVIXDEpTQ` |
| South Portland | `ChIJ4YrbeBafskwZGWjSNvp4Nw` |

## Files

### New

- **`src/lib/google-reviews.ts`** — Server-side fetch utility. Calls `GET https://places.googleapis.com/v1/places/{PLACE_ID}` with `X-Goog-FieldMask: reviews,rating,userRatingCount,displayName` for each location. Uses `next: { revalidate: 604800 }` (7-day cache). Falls back to static data on failure.

- **`src/data/reviews.ts`** — Static fallback reviews (current 3 hardcoded reviews from SuccessStoriesSection, shaped as GoogleReview[]).

### Updated

- **`src/types/index.ts`** — Add `GoogleReview` interface: `{ authorName, authorPhotoUrl, rating, text, relativeTime, locationName }`.

- **`src/lib/constants.ts`** — Add `PLACE_IDS` object with all 3 location place IDs.

- **`src/components/sections/SuccessStoriesSection.tsx`** — Remove `showReviews` boolean. Accept `reviews: GoogleReview[]` and `totalRatingCount: number` and `averageRating: number` props. Display aggregate rating header, scrollable review cards with star ratings/author info/location badges, and Google attribution logo.

- **All 14 pages using SuccessStoriesSection** — Call `fetchAllLocationReviews()` at the server component level and pass result as props.

## Environment Variables

- `GOOGLE_PLACES_API_KEY` — The Google Maps API key (must allow server-side requests to Places API New).

## Caching Strategy

- Weekly revalidation (604800 seconds) via Next.js fetch cache
- ~12 API requests/month (3 locations x 4 weeks) — well within 1,000 free monthly limit
- Static fallback ensures the site works even if API is unreachable or key is missing

## Google Attribution Requirements

- Display "Google" text or logo near reviews
- Show reviewer name and photo
- Do not modify review text
