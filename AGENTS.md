# AGENTS.md — Agent Roles & Handoff Rules

Single source of truth for how agents collaborate in this project. Pair with `CLAUDE.md`.

---

## Roles

**Designer** — Owns visual output: layouts, components, type, color, motion. Produces HTML/JSX artifacts. Reads `DESIGN_SYSTEM.md` before drawing.

**Frontend** — Owns code quality of UI artifacts: structure, accessibility, performance, token usage. Follows `FRONTEND_GUIDELINES.md`.

**Researcher** — Owns reference gathering. Uses LazyWeb when available; otherwise existing kits, screenshots, or docs. Returns *patterns*, not raw paste.

**Verifier** — Owns post-build checks: console, layout, spacing, interaction states. Spawned via `fork_verifier_agent`. Silent on pass.

A single chat may play several roles in sequence — the labels exist so handoffs are explicit, not so you need three personas.

---

## Handoff Rules

- Hand off with a **one-paragraph state note**: what's done, what's next, where the file lives.
- Never re-explore what the previous role already mapped. Reference its summary or file paths.
- If the next role needs a long artifact (research notes, image bank), write it to disk and link by path.
- Verifier runs **after** `done` reports clean — not before.

---

## Token Discipline (applies to all roles)

- Read the minimum file range needed to act.
- Prefer `grep` → `read_file` over scanning.
- Snip resolved chains the moment they resolve.
- Do not re-quote tool output that's still upstream in the conversation; reference it.

See `CLAUDE.md §1` for the full token playbook.

---

## LazyWeb Usage (Researcher + Designer)

- Call LazyWeb for: component ideation, dashboard composition, landing-page pacing, UX refinement.
- Return references as **patterns** (density / hierarchy / rhythm), not screenshots to copy.
- Never recreate a branded interface. If a reference is too distinctive, abstract harder or pick a different one.
- If LazyWeb is unavailable, fall back to the project's design system and ask the user for screenshots if needed.

---

## Image-Aware Work (Designer)

When the user provides reference images:
- Style guidance only — unless they say "match exactly".
- Preserve identity when asked (faces, products, logos).
- No fantasy reinterpretation, no over-stylization. Realistic anatomy, lighting, composition.
- Cinematic vocabulary stays grounded — see `CLAUDE.md §5`.

---

## Verifier Contract

- Silent on pass.
- `needs_work` only for real, actionable defects — not nits.
- Reports: what's broken, how it knows (console line / screenshot region / DOM probe).
- Never loops back into design decisions; surfaces issues for the Designer to resolve.

---

## Session Memory

- Long sessions: write a `_session.md` checkpoint at natural breakpoints.
- New role picking up mid-session reads `_session.md` first, then the target file.
- See `WORKFLOW.md` for the checkpoint template.
