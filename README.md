# Liora & Co. — Website (first draft)

A static marketing site for the Liora & Co. outdoor furniture brand, built from
**Brochure 7 (Final 2025-2026)**. No build step, no dependencies — open `index.html`.

## Structure

```
index.html      Page shell (nav, hero, sections, footer, lightbox)
style.css       All styling (warm-neutral palette, serif/sans pairing)
app.js          Renders collections/contract/materials from data.js
data.js         ← EDIT THIS. All collection copy, product specs and image paths.
img/heroes/     One lifestyle image per collection + cover.jpg
img/specs/      Brochure spec-sheet page renders (dimensions + model codes)
```

## Editing content

Everything is data-driven. To change copy, prices, dimensions or images, edit
`data.js` only — no HTML changes needed. Each collection object takes a `hero`
image, `description`, a `products` list (name / cm / inch / code) and `specImages`.

## Known cleanup items (first draft)

- **Carter & Suri heroes are placeholders.** The brochure has no lifestyle photo
  for these two (the intro pages reuse a generic studio chair). Swap in real shots.
- **Terra spec sheet has errors in the source brochure** — every module lists the
  same dimensions (860 × 2380 × 860) and code (DCA520). Terra is shown image-only
  until corrected.
- **Brochure URL typo:** inside cover reads `www.lioraand company.com` (broken
  space). The site uses the correct `lioraandcompany.com`.
- Contract program (loungers, stools, parasols) is summarised text-only for now;
  add per-item pages/images when ready.

## Deploy

Hosted via GitHub Pages from the `main` branch root. Any push republishes.
