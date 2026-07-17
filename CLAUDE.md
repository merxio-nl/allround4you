# CLAUDE.md — ALLROUND4YOU project rules

## Project
Static one-page website for ALLROUND4YOU Bouw & Service, intended for GitHub Pages.

## Technology constraints
- Use plain HTML, CSS and JavaScript only.
- Do not introduce React, Next.js, Vite, Tailwind, Bootstrap, package managers or build steps unless explicitly requested.
- Preserve relative paths so the site continues to work on GitHub Pages.
- Do not add secrets, tokens or private credentials.

## Change policy
- Analyze the current implementation before editing.
- Make the smallest change required for the task.
- Do not redesign unrelated sections.
- Do not rename classes or move files without a clear need.
- Do not delete existing SEO metadata, accessibility attributes or responsive behavior.
- Do not invent company facts, guarantees, certifications, testimonials, prices or service conditions.
- Explain which files will change before a large modification.
- Never commit, push, publish or delete Git history without explicit approval.

## Quality checks
After each change, verify:
1. Desktop layout.
2. Mobile layout around 390 px.
3. Navigation and anchor links.
4. Telephone, WhatsApp and email links.
5. Gallery and lightbox.
6. Image paths and browser console errors.
7. GitHub Pages compatibility.

## Workflow
One task -> local test -> one clear commit -> push -> published-site check.
Keep `main` stable and suitable for client review.
