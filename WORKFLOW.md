# WORKFLOW.md — Session Structure & Hygiene

How a working session is organized so output stays high-quality and context stays small.

---

## Standard Session Shape

1. **Intake** — read the ask; read attached references; read `CLAUDE.md` + `DESIGN_SYSTEM.md` if not already in context.
2. **Clarify** — one round of focused questions if anything is ambiguous.
3. **Plan** — short todo list. No essays.
4. **Build** — write to disk; show the user early, iterate.
5. **Verify** — `done` for clean load; `fork_verifier_agent` for thorough check.
6. **Summarize** — caveats and next steps only.

Steps 4–5 may loop. Steps 1–3 should not.

---

## Targeted Retrieval Over Scanning

- Know the path? → `read_file` it directly.
- Know the symbol? → `grep` first, then read the matching window.
- Don't know either? → list one directory level, then drill. Never `depth: 5+` on a root.
- Cross-project files: copy only what's needed into this project. Don't bulk-copy.

---

## Compressed Summaries

When a phase wraps:

- ≤ 5 bullets describing what was decided.
- Pointers to files, not pasted contents.
- Register a snip for the exploration that produced the decision.

Example checkpoint:

```
## Checkpoint — landing page v1
- Direction: warm neutral + single teal accent
- Layout: 3-section pace (hero / proof / CTA)
- Open: imagery — placeholders for now
- Files: Landing.html, DESIGN_SYSTEM.md (tokens added)
- Next: real imagery, secondary CTA copy
```

---

## `_session.md` Template

For long sessions, drop this in the project root and snip everything before it:

```
# Session Checkpoint — <date>

## Goal
<one line>

## Decisions
- ...
- ...

## File Inventory
- path/to/file — <one line role>

## Open Questions
- ...

## Next Steps
- ...
```

---

## LazyWeb in the Workflow

Researcher pulls a reference → returns a **pattern note** (1–2 lines describing density, hierarchy, rhythm) → Designer maps it to project tokens → Build proceeds.

Never paste a reference screenshot back into the chat after the pattern note exists.

---

## Image-Aware Workflow

1. User attaches reference(s) and states the role (style / layout / identity / inspiration only).
2. Agent confirms interpretation in one line.
3. Build proceeds with realistic anatomy, plausible lighting, natural composition.
4. No fantasy mutation, no over-stylization unless explicitly requested.
5. Identity preserved when asked.

---

## Verifier Cadence

- After `done` reports clean: `fork_verifier_agent` (silent on pass).
- Mid-task: `fork_verifier_agent({task: "..."})` for a directed probe.
- Don't pre-screenshot defensively; let the verifier catch it.

---

## Token Budget Heuristics

If you're feeling slow or context feels heavy:

- Did you read more than you needed? Likely yes.
- Did you snip the last completed sub-task? Probably not.
- Is there an old draft of the artifact still in context? Move to `vN` and snip.
- Are you re-quoting tool output? Reference the path instead.

---

## Done Definition

A unit of work is done when:

- The artifact loads clean (no console errors).
- It honors the design system tokens.
- States are covered (rest / hover / focus-visible / active / disabled where relevant).
- The user has seen the latest version.
- The verifier passed (silent return) or its `needs_work` is addressed.

---

## Related

- `CLAUDE.md` — operating manual
- `AGENTS.md` — roles + handoffs
- `DESIGN_SYSTEM.md` — tokens
- `FRONTEND_GUIDELINES.md` — code standards
- `PROMPTING_GUIDE.md` — prompt patterns
