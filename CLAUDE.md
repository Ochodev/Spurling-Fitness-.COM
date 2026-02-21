# Spurling Fitness Website

## Overview
Marketing website for Spurling Fitness, a personal training gym for people over 50 with 3 locations in Maine (Kennebunk, Scarborough, South Portland).

## Tech Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** (PostCSS plugin)
- **Node.js 20+**

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Project Structure
```
src/
  app/           # Pages and routes (App Router)
  components/    # Reusable components
    forms/       # ContactForm, JobApplicationForm
    layout/      # Header, Footer, MobileMenu, Container, AnnouncementBanner
    sections/    # Hero, ThreeStepProcess, SuccessStoriesSection, etc.
    team/        # TeamGrid
    ui/          # Button, SectionHeading, GoogleMap, YouTubeEmbed
  data/          # Static content (team, services, locations, testimonials, faq, navigation)
  lib/           # Constants (BRAND, COLORS), metadata helper
  types/         # TypeScript interfaces
public/images/   # Optimized assets (webp/jpg/svg)
```

## Conventions

### Styling
- Use Tailwind utility classes, not custom CSS
- Brand colors defined in `src/lib/constants.ts` and as CSS custom properties in `globals.css`
- Three fonts: **Kanit** (headings, `font-heading`), **Raleway** (body, `font-body`), **Teko** (display, `font-display`)

### Components
- Section components handle their own background colors and padding
- Alternate dark (#211F20) and light (#f5f5f5 / white) sections
- SVG brushstroke dividers between major sections (in `/public/images/dividers/`)
- Use `Container` component for max-width wrapper (1200px)

### Data
- Content lives in `/src/data/` files, never hardcoded in components
- All data structures have TypeScript interfaces in `/src/types/index.ts`

### Images
- Use Next.js `<Image>` component, never raw `<img>`
- Prefer `.webp` format
- Remote patterns configured for `img.youtube.com`

### Routing
- Trailing slashes enforced (`trailingSlash: true` in next.config.ts)
- Redirects for legacy URLs configured in next.config.ts

### Brand
- Primary red: #D92E27
- Dark: #211F20
- Phone: 207-467-3757
- Email: info@spurlingfitness.com
- All brand constants in `src/lib/constants.ts`

### Forms
- Contact form submits to `/api/contact/` which forwards to external webhook
- `WEBHOOK_URL` env var required for form submissions

### Analytics
- GTM ID: env var `NEXT_PUBLIC_GTM_ID`
- FB Pixel: env var `NEXT_PUBLIC_FB_PIXEL_ID`

## Environment Variables
- `WEBHOOK_URL` - Contact form webhook endpoint (required for forms)
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager container ID
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID
