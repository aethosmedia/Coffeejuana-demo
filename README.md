# Coffeejuana — demo website

A Next.js 14 (App Router) demo built for a pitch to Coffeejuana, a cafe in
Krishna Nagar, Delhi. Built by Aethos Media.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's real vs. sample

- **Real, pulled from Coffeejuana's Google Maps listing:** business name,
  address (F1/9, Block E, Krishna Nagar, Delhi, 110051), coordinates,
  5.0★ rating from 17 reviews, and the guest quotes used in the
  testimonials section and the "guest favourite" tags (hazelnut cold
  coffee, cheesy Maggi, paneer wrap).
- **Sample / placeholder, to replace before launch:** opening hours, full
  menu items and prices beyond the three guest favourites, phone number,
  and photography. All of this lives in one file — `src/lib/data.js` —
  so swapping in the real menu, hours and photos is a quick edit, not a
  rebuild.

## Structure

- `src/app/page.js` — home (hero, about, menu preview, testimonials, map + CTA)
- `src/app/menu/page.js` — full menu
- `src/app/locations/page.js` — all locations (built to scale past one)
- `src/app/locations/[slug]/page.js` — single location detail
- `src/app/locations/[slug]/book/page.js` — booking form for that location
- `src/components/` — Nav, Footer, Hero, Reveal (scroll animation
  wrapper), Testimonials, MenuPreview, BookingForm
- `src/lib/data.js` — all cafe content in one place

## Animation

GSAP powers the hero entrance, the floating "bean" details, and
scroll-triggered reveals across every section (`src/components/Reveal.js`
wraps GSAP + ScrollTrigger so any section can animate in on scroll with one
component).

## Before this goes live

1. Swap in real photography (currently no images are used — add a
   `public/` folder with real shots of the cafe, drinks and food).
2. Replace sample hours, phone number, and full menu pricing.
3. Wire `BookingForm` up to a real destination — email notification, a
   Google Sheet, or a booking API (Tock, SevenRooms, or a simple
   serverless function).
4. Add Instagram feed embed / link once handle is confirmed.
