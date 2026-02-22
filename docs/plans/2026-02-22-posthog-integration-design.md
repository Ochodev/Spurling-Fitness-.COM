# PostHog Integration Design

## Goal
Add PostHog analytics to the Spurling Fitness website for product analytics, session replays, and autocapture — using their recommended `defaults: '2025-11-30'` config.

## Approach
Client-side only integration using `posthog-js` and `@posthog/react` with the App Router provider pattern.

## Files to Create
1. `src/app/providers.tsx` — PostHogProvider client component
2. `.env.local` — add `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`

## Files to Modify
1. `src/app/layout.tsx` — wrap children with PostHogProvider
2. Vercel env vars — add PostHog key and host to production

## Dependencies
- `posthog-js`
- `@posthog/react`

## Configuration
- `defaults: '2025-11-30'` — enables web analytics, session replays, autocapture
- Debug mode enabled in development
- No reverse proxy (can add later)
- No server-side tracking (static/ISR site)
- No cookie consent changes (matches existing GTM/FB Pixel pattern)

## Environment Variables
```
NEXT_PUBLIC_POSTHOG_KEY=phc_7ChOQSR2hvH7HDkBadqyWlDgeZOmHcfnIllMriU6X4k
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```
