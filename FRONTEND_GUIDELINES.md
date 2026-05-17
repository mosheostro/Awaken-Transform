# FRONTEND_GUIDELINES.md — Code-Level UI Standards

How UI code is written and structured in this project.

---

## HTML

- Canonical markup: close every non-void element, double-quote every attribute, no implied closes.
- Use semantic elements (`<button>`, `<nav>`, `<main>`, `<section>`) — never `<div>` for clickable things.
- Every interactive element has a visible focus ring (`:focus-visible`).
- `data-screen-label` on slide/screen roots so comments and exports stay legible.
- Preserve `data-comment-anchor` attributes across edits.

---

## CSS

- Prefer flex/grid with `gap` over margin chains and inline-block whitespace.
- One spacing/type/radius scale (see `DESIGN_SYSTEM.md`). No off-scale values.
- Use `text-wrap: pretty` on paragraphs, `text-wrap: balance` on headings.
- Use `oklch()` for color so accents stay tonally coherent.
- Keep transitions short (120–240ms) with `cubic-bezier(0.2, 0, 0, 1)` as a default.
- Avoid heavy gradients and aggressive drop shadows.

---

## React / JSX

- Pin React and Babel versions exactly as in the system prompt — never `react@18` unpinned.
- **Never** name a global style object `styles`. Use a component-specific name (`heroStyles`, `tableStyles`) or inline.
- Export shared components to `window` at the end of each component file when multiple Babel scripts are in play.
- Avoid `type="module"` on script imports.
- Keep components under ~200 lines; split when they grow.

---

## State & Persistence

- Use `useState` for ephemeral UI state; `localStorage` for things the user expects to survive reload (playback position, panel open/closed, theme).
- Tweaks: wrap defaults in `/*EDITMODE-BEGIN*/{ ... }/*EDITMODE-END*/` so the host can persist edits.
- Register message listeners *before* posting `__edit_mode_available`.

---

## Accessibility

- Minimum hit target: 44×44px on touch surfaces.
- Color contrast: 4.5:1 body, 3:1 large text and UI components.
- Keyboard reachable: every interactive element. Tab order matches visual order.
- `aria-label` on icon-only buttons. `aria-current` on active nav items.
- Respect `prefers-reduced-motion` — skip non-essential animation when set.

---

## Token Discipline (frontend-specific)

- Don't recreate components that already exist. `grep` first.
- Don't dump entire stylesheets into chat; reference the path.
- When copying assets from a UI kit, copy only what the artifact actually uses — never bulk-copy a resource folder.
- Inline SVG > external SVG > raster, for icons. Sprites if many.

---

## Image Workflow

- Reference images = style guidance; not source-of-truth.
- Preserve identity (faces, products, logos) when requested.
- Placeholders for missing assets: striped gray box + monospace label.
- Photographic output stays realistic — natural light, plausible anatomy, no fantasy mutation.

See `DESIGN_SYSTEM.md` for the imagery section in full.

---

## LazyWeb Hooks in Frontend Work

- Use LazyWeb references to validate **structure** before writing markup: column count, density, hierarchy.
- Translate references into the project's tokens — never copy raw values from a reference UI.
- Branded layouts stay at the reference desk. Build originals.

---

## Quality Bar Before Shipping

- [ ] Console clean (no errors, no React warnings).
- [ ] Layout holds at 1024 / 1440 / 1920 (or the documented viewport).
- [ ] Focus-visible on every interactive element.
- [ ] No off-scale spacing, no inline hex colors.
- [ ] Tweaks panel hidden when tweaks-mode is off.
- [ ] File size sane; large constants moved to disk.
