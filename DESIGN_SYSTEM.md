# DESIGN_SYSTEM.md — Tokens & Component Conventions

The single reference for visual decisions in this project. Update this file when tokens change; do not let inline values drift.

---

## Status

No project-specific design system has been defined yet. The defaults below are placeholders — replace once a brand, codebase, or UI kit is attached.

---

## Type

- **Stack:** to be defined. Default fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`.
- **Scale (rem):** `0.75 · 0.875 · 1 · 1.125 · 1.25 · 1.5 · 1.875 · 2.25 · 3 · 3.75`.
- **Weights:** 400 / 500 / 600 / 700. Avoid 800–900 in body UI.
- **Line-height:** 1.5 body, 1.2 display, 1.35 dense UI.
- Apply `text-wrap: pretty` to paragraphs; `text-wrap: balance` to headings.

Avoid overused families (Inter, Roboto, Arial as a brand choice). Pick intentionally.

---

## Color

Define in `oklch()` so accents share chroma and lightness; vary hue.

- **Surface / FG:** tonal whites and blacks. Keep chroma ≤ 0.02.
- **Accents:** 0–2 max. Same `L` and `C`, different `h`.
- **State colors:** success / warning / danger / info — desaturated, not pure CSS keywords.

Document tokens here when set:

```
--surface-0:
--surface-1:
--fg-0:
--fg-1:
--accent-1:
--accent-2:
```

---

## Spacing

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. One scale, no off-scale values.

Use `gap` with flex/grid for sibling spacing. Reserve margins for vertical flow.

---

## Radius & Elevation

- **Radius:** `2 · 4 · 8 · 12 · 16 · 9999`.
- **Shadows:** define 2–3 levels max. Avoid heavy drop shadows; prefer soft, large, low-opacity.

---

## Components

When components are introduced, register each here with: purpose, anatomy, states, density. Until then, follow these rules:

- Flex/grid + `gap` for any sibling group (buttons, chips, nav, cards).
- Min hit target 44px on mobile.
- States: rest / hover / focus-visible / active / disabled — never skip focus-visible.
- Empty states have a primary action, not just an illustration.

---

## Imagery

- Real images > illustrations > SVG drawings.
- Placeholders: subtly striped gray rectangle + monospace label of what belongs there (e.g. `[ product shot · 3:2 ]`).
- Never hand-draw complex SVG illustrations.

### Image-aware rules

When references are supplied:
- Style guidance only unless told otherwise.
- Preserve identity on request.
- Realistic anatomy, lighting, composition. No fantasy mutation, no over-stylization.
- Cinematic vocabulary stays grounded: focal length, light source, time of day. Avoid prompt-soup ("hyperreal 8K cinematic ultra").

---

## Visual Consistency Checklist

Before shipping any artifact:

- [ ] All sizes come from the spacing scale.
- [ ] All colors are tokens, not raw hex.
- [ ] Type uses defined scale + line-heights.
- [ ] Hover, focus-visible, active, disabled states all present on interactive elements.
- [ ] No invented radii, no invented shadows.
- [ ] Visual rhythm matches surrounding UI (density, chrome, copy tone).
