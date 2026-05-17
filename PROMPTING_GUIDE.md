# PROMPTING_GUIDE.md — Prompt Patterns for This Project

How to talk to the agent so you get good output at low token cost. Mirrors `CLAUDE.md §1` from the user side.

---

## The Three-Line Brief

For any new piece of work, lead with:

1. **Surface** — what is it? (landing page, dashboard, onboarding flow, single component)
2. **Anchor** — what should it look like? (existing design system, UI kit, attached screenshots, LazyWeb reference, "decide for me")
3. **Constraints** — what must be true? (viewport, brand, must-have content, off-limits patterns)

Three lines beat three paragraphs. The agent will ask follow-ups if it needs more.

---

## Token-Efficient Prompting

- **Don't re-paste.** If a file is already in the project, name the path. The agent will read what it needs.
- **Don't re-explain.** Previous turns are still visible to the agent. New asks can be short.
- **Reference by path + range.** "Tighten the metric row in `Dashboard.html` lines 120–160" is cheaper than re-describing the section.
- **Batch related asks.** "Fix the header spacing, swap the accent to teal, and add a Tweaks toggle" in one message beats three.
- **Stop asking for confirmation.** "Do it" once is enough; the agent doesn't need re-permissioning between micro-steps.

---

## When to Use LazyWeb

Ask the agent to consult LazyWeb when you want:
- Production-grade patterns for a surface you haven't designed before
- A density / hierarchy reference for a complex dashboard
- A landing-page section rhythm that doesn't feel templated
- An empty-state or error-state pattern that goes beyond a centered illustration

Don't ask LazyWeb for:
- Pixel-exact clones of branded UI (won't happen — see copyright guard)
- Final color or type decisions (those come from the design system)
- Content / copy

---

## Image-Aware Prompts

When you attach a reference image:

- Say what role it plays: **"style anchor"**, **"layout anchor"**, **"identity reference"**, **"do not copy, just inspiration"**.
- For people / faces: state if identity should be preserved.
- For products: state if shape, finish, and proportions are fixed.
- For scenes: state lighting (natural / studio / golden hour / overcast) and time of day.

Avoid prompt-soup: "ultra hyperreal cinematic 8K masterpiece". The agent will produce more realistic output from concrete vocabulary — focal length, light source, mood word, two adjectives max.

---

## Context Compression Asks

You can explicitly drive cleanup:

- "Snip the earlier exploration; keep only the current direction."
- "Write a `_session.md` checkpoint and clear the rest."
- "Forget the prior color study; we're going with the warm palette."

The agent will respect these as hard signals.

---

## Multi-Variation Asks

- Default: 3 variations across different dimensions.
- If you want more, say so ("5 variants, all keeping the sidebar fixed, vary the content rail").
- If you want fewer, say "single option" — otherwise the agent will explore.

---

## Tweaks

Whenever you want runtime knobs (color, density, copy, layout mode), say "make X tweakable". The agent will add it to the Tweaks panel rather than forking the file.

---

## What Not to Do

- Don't ask for "the perfect design in one shot" — iteration is cheaper and better.
- Don't re-attach the same image every turn; it's already in context.
- Don't ask the agent to "remember forever" — write it into a `.md` instead.
- Don't recreate branded UI from screenshots; ask for an original in the same spirit.
