# CLAUDE.md — Project Operating Manual

Persistent instructions for every chat in this project. Keep additions short, modular, production-oriented.

---

## 1. Token Optimization

Default to the cheapest path that preserves reasoning quality.

- **Targeted reads.** Open the specific file/range you need. Never `ls -R` or read whole directories when a path is known.
- **Use `grep` before `read_file`.** Locate the symbol first; read only the matching window.
- **No raw redumps.** When a long file or tool result has already been seen, refer back to it by path + line range. Do not paste the content again.
- **Compressed summaries.** When a phase wraps, summarize outcomes in ≤5 bullets and snip the intermediate exploration.
- **Batch independent calls.** Fire parallel tool calls in one block when there is no dependency between them.
- **Cache-friendly prompts.** Put stable context (this file, design system, type tokens) early; put volatile task context late.
- **Stop confirming.** No "I will now…" or "Let me…" preambles. Act, then report.
- **Tool-result discipline.** Trim large fixtures before pasting into chat; write them to disk and reference the path.

See `PROMPTING_GUIDE.md` for prompt-side tactics and `WORKFLOW.md` for session hygiene.

---

## 2. Context Compression

Long sessions decay quickly without active cleanup.

- Register snips as soon as a sub-task is complete — exploration trees, superseded drafts, resolved error chases.
- Replace verbose tool output with a one-line note pointing to the file.
- When iterating on a design, keep only the latest version in working memory; archive prior versions to disk with `vN` suffixes.
- If context pressure spikes, write a `_session.md` checkpoint (current goal, decisions made, open questions, file inventory) and snip everything before it.

---

## 3. LazyWeb Usage Strategy

LazyWeb is the visual reference engine. Use it as a sparring partner for layout and component decisions, not as a paste-source.

When to call it:
- Component ideation (cards, tables, empty states, command palettes)
- Dashboard composition and information hierarchy
- Landing-page section pacing
- UX refinement after a first pass feels generic

How to use the references:
- **Extract patterns, not pixels.** Spacing rhythm, hierarchy, density, content-to-chrome ratio.
- **Never lift branded UI.** Trade dress, distinctive icon styles, and copyrighted layouts stay at the reference desk.
- **Cite the move, not the source.** "Tightened the metric row to match a 6-col dense pattern" — don't name-drop the product.
- **One reference per decision.** Pulling 8 references and averaging them produces mush.

If LazyWeb is unavailable in the current environment, fall back to: existing project design system → UI kit components → first-principles layout.

---

## 4. Visual Consistency Rules

- One type scale, one spacing scale, one radius scale per project. Define them once in `DESIGN_SYSTEM.md`.
- Reuse tokens; do not invent new colors or sizes inline.
- Match the visual vocabulary of any existing UI in the project — copywriting tone, shadow patterns, density, hover/active states.
- Placeholder over bad attempt. A labeled gray rectangle beats a hand-drawn SVG that's nearly right.

---

## 5. Realistic Cinematic Rendering Guidance

For any image-aware or photographic work:

- Treat reference images as **style guidance**, not pixel templates.
- Preserve identity when the user requests it — facial structure, proportions, distinctive features.
- Default to: realistic anatomy, plausible lighting (key + fill + practical), natural composition (rule-of-thirds or centered intentional), believable depth-of-field.
- No fantasy mutations, no over-stylization, no excessive bloom/HDR/lens-flare unless asked.
- Camera vocabulary that travels well: 35mm/50mm/85mm equivalents, soft window light, golden hour, overcast diffusion, tungsten interior. Avoid "cinematic 8K hyperreal" prompt soup.

---

## 6. Frontend Inspiration Workflow

1. Ask: what's the surface? (dashboard / marketing / app / form / data view)
2. Pull one or two LazyWeb references that match the surface and the density target.
3. Identify the **pattern** (e.g., "sidebar + condensed table + right-side detail rail").
4. Map the pattern to the project's existing tokens. If tokens are missing, define them in `DESIGN_SYSTEM.md` before drawing.
5. Build the first pass with placeholder content. Show the user. Iterate.
6. Refine type, spacing, and color last — not first.

---

## 7. Related Documents

- `AGENTS.md` — agent roles and handoff rules
- `DESIGN_SYSTEM.md` — tokens, type, color, spacing, components
- `FRONTEND_GUIDELINES.md` — code-level standards for UI work
- `PROMPTING_GUIDE.md` — prompt patterns for efficiency and quality
- `WORKFLOW.md` — session structure, checkpoints, handoffs
