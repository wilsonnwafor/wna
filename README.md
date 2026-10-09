# Wilson Nwafor Accounting Services: brochure site

Next.js 14 (App Router, TypeScript) · Tailwind CSS 3 · Radix UI primitives · Framer Motion · React Hook Form + Zod · Lucide icons

##Run it 

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) in `.env.local` for correct metadata URLs.

## Structure

```
app/
  layout.tsx            fonts, metadata, JSON-LD, skip link, Navbar + Footer
  globals.css           design tokens (CSS variables) + base styles
  page.tsx              Home
  about/page.tsx        About
  services/page.tsx     Services + FAQ
  contact/page.tsx      Contact
  icon.svg              favicon
components/
  Navbar.tsx  Footer.tsx  Logo.tsx  Reveal.tsx  SectionHeading.tsx
  LedgerHero.tsx  Testimonials.tsx  CtaBanner.tsx
  FaqAccordion.tsx  ContactForm.tsx  MapCard.tsx
  ui/button.tsx  ui/accordion.tsx
lib/
  data.ts               ALL editable copy: services, stats, FAQs, testimonials, timeline
  utils.ts
tailwind.config.ts      theme: navy / growth (emerald) / gold, Plus Jakarta Sans
```

## Before you publish

- **Replace placeholder content in `lib/data.ts`**: testimonials, stats ($50M+, 100%, 10+ years, 200+ businesses), and the timeline are illustrative. Use only figures and quotes you can verify, and confirm the "CPA" credential and licensing wording.
- **Contact form** validates client-side with Zod, then *simulates* sending. Wire `onSubmit` in `components/ContactForm.tsx` to a Route Handler (Resend/SendGrid) or a form service.
- **Social links** in `lib/data.ts` point to platform home pages; set your real profiles.
- **Map card** is a stylised placeholder with a "Get directions" link. Swap in a Google Maps/Mapbox embed if you want a live map.
- Colour tokens: `--growth` (#059669) is for fills and accents; `--growth-ink` (#047857) is used for text and buttons on white to meet WCAG AA contrast.
