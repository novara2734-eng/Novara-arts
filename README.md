# Novara Arts by Prashasti

A full-stack Next.js (App Router) storefront for original textured acrylics,
gold leaf commissions, and archival fine art prints.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom butter / espresso / cream / terracotta+gold palette)
- Framer Motion (hero crossfade, gold-seam signature reveal, drawers, modals)
- Client-side cart with `localStorage` persistence (no backend required)

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project structure

```
app/
  page.tsx                 Home: hero, shop, about, commissions
  shop/[slug]/page.tsx     Individual product page
  layout.tsx               Fonts, header, footer, cart provider
components/                All UI components
context/CartContext.tsx    Cart state + localStorage sync
data/artworks.ts           Mock product database (edit here to add/edit pieces)
lib/format.ts              Currency + shipping helpers
public/images/             Artwork & artist photography
```

## Editing the catalog

Add or edit pieces in `data/artworks.ts`. Each artwork supports multiple
price variants (e.g. Original vs. Fine Art Print) and optional images — if
`images` is empty, product cards render an elegant placeholder automatically.

## Notes

- Checkout is a styled summary + shipping estimator; wire it to Stripe/Shopify
  or your payment processor of choice for live payments.
- The commission form captures inquiries client-side; connect the `onClick`
  handler in `components/CommissionForm.tsx` to your email/CRM endpoint.
- Social links in the footer are placeholders — update with real profile URLs.
