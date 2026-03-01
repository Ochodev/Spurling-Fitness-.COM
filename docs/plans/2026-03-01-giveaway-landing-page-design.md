# Giveaway Landing Page Design — `/win/`

## Overview
Direct-response landing page for a 3-month membership giveaway. Two winners drawn March 27th. Everyone who enters early gets bonus incentives. No header/footer — distraction-free funnel.

## Page Structure

### 1. Hero (dark overlay on img-49071.webp)
- Google reviews badge (star rating + review count)
- H1: "WIN 3 FREE MONTHS OF PERSONAL TRAINING"
- Sub: "We're giving 2 people the chance to experience our program — completely free. A $1,200 value."
- CTA button scrolls to #enter

### 2. Intro / Framing (white bg)
- Body copy: "We've helped hundreds of people in Maine feel stronger, healthier, and more confident. This quarter, we're giving two people the chance to experience our program completely free — and giving everyone else a chance to start without the usual barriers."

### 3. What You Win (dark bg, brushstroke dividers)
- Two-column: image left, benefits right
- Prize: 3 months unlimited small group training ($1,200 value)
- Checkmark bullet benefits
- CTA repeat

### 4. Countdown Timer (dark bg)
- "Drawing: March 27th" + CountdownTimer targeting 2026-03-27
- CTA repeat

### 5. Start Early Bonus (white bg)
- H2: "Don't Wait — Start Early & Double Your Chances"
- 50% off first month
- No enrollment fee
- Second raffle ticket
- Note: "If you win, your paid month is credited. No downside to starting early."
- CTA repeat

### 6. Video Testimonials (dark bg)
- 6 videos from videoTestimonials data
- H2: "Success Stories"
- CTA repeat

### 7. Google Reviews Carousel (white bg)
- SuccessStoriesSection component

### 8. Entry Form (dark bg, #enter anchor)
- H2: "Enter to Win"
- Fields: Name, Phone, Email, Location (radio), Contact preference, "What would it mean to you to win?" (textarea)
- Submit: "Enter the Giveaway"

### 9. Social Proof Toasts (floating overlay)
- Bottom-left corner
- Rotating names/locations every 8-10 seconds
- Fade in/out, auto-dismiss after 4 seconds

## New Files
- `src/app/win/page.tsx` — main page
- `src/app/win/layout.tsx` — hides header/footer
- `src/app/win/GiveawayForm.tsx` — custom form with extra fields
- `src/app/win/GiveawayCTA.tsx` — CTA button (opens modal or scrolls to form)
- `src/components/ui/SocialProofToast.tsx` — rotating notification toasts

## Reused Components
- Hero, Container, CountdownTimer, YouTubeEmbed, SuccessStoriesSection

## Form Submission
- Posts to /api/contact/ with source: "giveaway-page"
- Includes extra fields: contactPreference, whyWin
- Redirects to location-specific thank-you page
