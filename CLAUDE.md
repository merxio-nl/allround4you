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

## Git workflow and approval gates

Claude may inspect the repository, edit approved files, run safe checks, and prepare Git actions.

Claude must never decide independently to commit, push, publish, deploy, create or switch branches, merge, revert, reset, clean, or rewrite Git history.

### Approval levels

The following phrases are explicit approval gates:

1. "Только анализ"
   - Inspect files and Git state.
   - Do not modify files.
   - Do not run Git commands that change repository state.

2. "Разрешаю локальные изменения"
   - Modify only files explicitly related to the approved task.
   - Do not commit.
   - Do not push.
   - Do not publish or deploy.

3. "Разрешаю локальный commit"
   - First show `git status` and a concise diff summary.
   - Commit only files related to the current task.
   - Prefer explicit file staging over `git add .`.
   - Do not push.

4. "Разрешаю push в origin/main"
   - First confirm the active branch is `main`.
   - Confirm the exact commit that will be pushed.
   - Push only to `origin/main`.
   - Do not create branches, tags, pull requests, or additional commits.

### Mandatory Git rules

- Never commit automatically after editing files.
- Never push automatically after a commit.
- Never publish or deploy automatically.
- One logical task per commit.
- Use short, descriptive commit messages in English.
- Before proposing a commit, show:
  - active branch;
  - `git status`;
  - changed files;
  - concise diff summary;
  - checks performed.
- After committing, report:
  - commit hash;
  - commit message;
  - files included;
  - whether the commit is local or pushed.
- Never use `git push --force`.
- Never use `git reset --hard`.
- Never use `git clean -fd`.
- Never rewrite published history.
- For already pushed changes, prefer a new revert commit instead of deleting history.
- If the repository state is unclear or unexpected, stop and ask for confirmation.