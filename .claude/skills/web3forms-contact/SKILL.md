---
name: web3forms-contact
description: Add or fix a reliable contact form on any static site (HTML / React / Vue / Next / plain) that delivers email through Web3Forms to moshe.svarga@gmail.com. Use whenever the user asks to "add a contact form", "fix email delivery", "form doesn't send", "wire up the form", mentions Web3Forms/Formspree/FormSubmit, or wants leads from a landing page to reach Moshe's inbox. Contains the per-domain access-key registry, ready templates (vanilla HTML form, React hook component), and the honest-success response pattern (never optimistic UI).
---

# Web3Forms contact form — reusable pattern

This skill replaces every ad-hoc "static-site email" attempt (mailto:, FormSubmit activation flows, EmailJS dashboards) with one tested pattern that works on day one: a public Web3Forms access key + a fetch that only shows success when the API confirms delivery.

## When to use it

- Adding a Contact section to a landing page, marketing site, or product page
- Fixing a form that shows "Message sent" but doesn't actually deliver
- Migrating off FormSubmit / Formspree / EmailJS because they require activation, dashboards, or paid tiers
- Any time the destination inbox is `moshe.svarga@gmail.com`

## Key registry

Web3Forms access keys are **public by design** — they identify the destination inbox, not authenticate a user. Safe to commit and ship in client-side JS.

| Domain / Project           | Access Key                                | Delivers to                  |
| -------------------------- | ----------------------------------------- | ---------------------------- |
| **(generic, any project)** | `49a62359-8c1c-4e83-bb80-78817e1aced3`    | moshe.svarga@gmail.com       |
| **awaken-transform.com**   | `beb93abe-d1f3-4ce7-b12b-4e3bc915465a`    | moshe.svarga@gmail.com       |

**Which one to use:** if the project has its own domain registered with Web3Forms, prefer the project-specific key (cleaner per-project metrics in the Web3Forms dashboard). Otherwise use the generic key. Both deliver to the same inbox.

**Adding a new project:** ask the user to go to https://web3forms.com, enter `moshe.svarga@gmail.com`, get a fresh access key emailed instantly. Append it to the table above and commit the skill update.

## The pattern (non-negotiable rules)

1. **POST JSON to `https://api.web3forms.com/submit`** — never form-encoded, never no-cors. We need the response body.
2. **`success === true` is the only thing that shows success.** Anything else (HTTP error, network throw, `success: false`) shows the error state. No "optimistic UI". No `delivered = true` fallbacks.
3. **Honeypot field** named `botcheck` (or `_honey`) — must be empty. Hide via CSS, not JS.
4. **Server-side spam guard is on by default**; do not pass `botcheck` with a value.
5. **Client-side validation** before submit: name, valid email, message ≥ 10 chars. Show inline errors.
6. **Disable the submit button** while `status === 'sending'`.

## Templates

Two ready files in `templates/` next to this SKILL.md:

- `templates/vanilla.html` — plain HTML form + small inline JS. Drop into any static site.
- `templates/react.jsx` — React functional component with hooks. Drop into a Babel/Vite/Next project.

Copy the relevant template, replace `WEB3FORMS_KEY` with the right key from the registry above, adjust the styling to match the project's design tokens.

## Response shape (for reference)

Success:
```json
{ "success": true, "message": "Email sent successfully!", "data": "..." }
```

Failure (rare — usually invalid key or quota exceeded):
```json
{ "success": false, "message": "Invalid Access Key" }
```

## Limits & monitoring

- **Free tier:** 250 submissions / month per access key. Plenty for a landing page; check Web3Forms dashboard if a campaign is expected to spike.
- **Spam:** Web3Forms runs Akismet on every submission. False positives are rare but possible — if a real customer says they submitted and you didn't receive, check Web3Forms dashboard → Spam folder.
- **Deliverability:** sends from Web3Forms' own verified domain via AWS SES. Lands in Gmail Primary tab in our tests. First message from a new key may go to Promotions; mark as "not spam" once.

## Anti-patterns (do not do)

- ❌ `mode: 'no-cors'` — you can't read the response, so you can't tell if it succeeded
- ❌ `setStatus('ok')` before awaiting the fetch
- ❌ `mailto:` fallback that auto-clicks an anchor (opens user's email client unexpectedly)
- ❌ Hiding the access key with obfuscation — it's public, ship it plainly
- ❌ Sending HTML in the message field — Web3Forms strips most HTML, send plain text
