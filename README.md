# Velaris Home — Interior Design Studio

A modern, fully responsive website for **Velaris Home**, a luxury interior design studio based in London. Built with React 19 and Vite, the site features smooth scroll animations, a full-page carousel, GDPR-compliant cookie consent, and a complete set of pages for a high-end design practice.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, portfolio preview, philosophy, trends teaser, newsletter |
| `/portfolio` | Full portfolio with carousel hero, masonry gallery, and category filters |
| `/services` | Services overview, 4-step process, feature highlight |
| `/trends` | 2026 Trend Report — interactive colour palette, macro trends, materials |
| `/contact` | Enquiry form with budget selector, studio info sidebar |

---

## Tech Stack

- **React 19** + **Vite 7**
- **React Router 7** — client-side routing
- **CSS Modules** — scoped component styles
- **IntersectionObserver** — custom `useInView` hook for scroll-triggered animations
- **Material Symbols Outlined** — icon font (Google Fonts)
- **Inter** — typography (Google Fonts)

---

## Features

- Full-viewport portfolio carousel with auto-advance, crossfade transitions, dot progress indicators, and keyboard-friendly arrow navigation
- Scroll-triggered animations (fade up, fade in, slide left/right, scale in) across all pages with staggered delays
- Masonry-style portfolio grid with hover overlays and category filtering
- Interactive 2026 colour palette explorer with psychology, codes, and pairing suggestions
- GDPR-compliant cookie consent banner with granular category controls, persisted in `localStorage`
- Privacy Policy and Terms of Service modals (UK GDPR / EU GDPR compliant)
- Responsive header with scroll-based transparency, hamburger menu, and active link indicators
- Enquiry form with project type dropdown and budget pill-grid selector
- All images stored locally in `public/images/portfolio/` — no external image requests at runtime

---

## Project Structure

```
velarishome/
├── public/
│   └── images/
│       └── portfolio/        # All site images (11 files, ~2.5 MB)
│           ├── hero-bg.jpg
│           ├── philosophy.jpg
│           └── p1.jpg – p9.jpg
├── src/
│   ├── components/
│   │   ├── AppRouter/        # Route definitions + CookieBanner mount
│   │   ├── Header/           # Nav, hamburger, scroll transparency
│   │   ├── Footer/           # Sitemap, contact, legal modal triggers
│   │   ├── Hero/             # Homepage hero section
│   │   ├── Portfolio/        # Homepage portfolio preview + filters
│   │   ├── Philosophy/       # Philosophy section
│   │   ├── Trends/           # Homepage trends teaser
│   │   ├── Newsletter/       # Newsletter CTA
│   │   ├── LegalModal/       # Privacy Policy + Terms of Service
│   │   └── CookieBanner/     # GDPR cookie consent banner
│   ├── pages/
│   │   ├── Portfolio/        # Full portfolio page with carousel
│   │   ├── Services/         # Services page
│   │   ├── Trends/           # Full 2026 Trend Report page
│   │   └── Contact/          # Contact + enquiry form
│   ├── hooks/
│   │   └── useInView.js      # IntersectionObserver scroll hook
│   └── index.css             # Global styles + animation utilities
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design System

| Token | Value |
|-------|-------|
| Primary cyan | `#13b6ec` |
| Teal | `#008c99` |
| Bio-lime | `#d2e037` |
| Ochre | `#b68d40` |
| Dark base | `#101d22` |
| Font | Inter, 400–900 |
| Border radius (cards) | `14–24px` |
| Border radius (buttons) | `999px` (pill) |

---

## Legal

This is a demonstration project. All content, images, and branding are fictional and for portfolio purposes only.
