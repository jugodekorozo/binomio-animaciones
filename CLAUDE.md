# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Project Overview

Single-page informational dashboard for "Producción de Animaciones Cortas — El Binomio de Oro de América", a short-animation production project for Festival de la Leyenda Vallenata 2026. Built for a professor to share with 8 graphic design students — **mobile-first**, no backend, no routing.

**Stack:** Vite + React (JavaScript) · Tailwind CSS v3 · Framer Motion · Lucide React

## Architecture

```
src/
  App.jsx              # Root: 5 section refs + scroll handler + Nav + sections
  components/
    Nav.jsx            # Sticky bottom nav (mobile) / top nav (desktop); IntersectionObserver active state
    Hero.jsx           # Full-viewport dark hero with Framer Motion entry animations
    Timeline.jsx       # 15-day expandable card grid, phase color-coded
    Research.jsx       # 5-block accordion with question lists
    Technique.jsx      # Turbulence Displacement guide: principle card, params table, step cards
    Workflow.jsx       # Perplexity → NotebookLM → Claude pipeline visualization
  data/
    schedule.js        # 15-day schedule array + phase color map
    research.js        # 5 research block objects (questions, sources, icon name)
  index.css            # Tailwind directives + .section-pad, .section-title, .card utilities
```

## Key Patterns

**Navigation:** `App.jsx` holds `sectionRefs` (one per section) and passes `scrollTo` down to `Nav` and `Hero`. `Nav` uses `IntersectionObserver` to track which section is visible and highlight the active tab.

**All content lives in `src/data/`** — to add/edit schedule days or research blocks, only touch those files. Components read from data and render.

**Color system** — custom Tailwind tokens in `tailwind.config.js`:
- `primary` (#1B3A4B), `accent` (#D4A03C), `bg` (#F5F0E8), `bg-alt` (#EDE4D3)
- Phase colors: `phase.invest`, `phase.preprod`, `phase.prod`, `phase.postprod`, `phase.entrega`
- Phase colors are also stored inline in `data/schedule.js` for use in inline styles

**Fonts:** DM Sans (body) + DM Serif Display (headings/italic) — loaded via Google Fonts in `index.html`.

**Section backgrounds alternate:** `bg` (cream) and `bg-alt` (warm beige) between sections — set in `App.jsx`.

## Mobile Considerations

The primary audience accesses this on phones. Bottom nav is fixed at `z-50`. Main content has `pb-24` padding to clear the nav bar. The Technique step cards use horizontal scroll on mobile (`overflow-x-auto`).
