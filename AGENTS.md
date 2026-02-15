# AGENTS.md

## Purpose

This repo is migrating from Gatsby to Hugo.
Your job as an implementation agent is to execute that migration in small, safe steps.

Primary reference: `HUGO_MIGRATION_PLAN.md`.

## Migration principles (keep it simple)

1. Preserve behavior before improving design.
2. Preserve URLs before refactoring content.
3. Prefer boring, explicit templates over abstraction-heavy setups.
4. Make small commits with clear scope.

## Current repo facts you should assume

- Gatsby-driven blog today (`gatsby-config.js`, `gatsby-node.js`).
- Blog content lives in `content/blog` with mixed markdown formats.
- About 160 post files currently publish from Gatsby.
- Top-level pages exist in `src/pages` and must be preserved.
- Redirect rules exist in `static/_redirects`.

## Non-negotiable requirements

1. Do not break existing blog post URLs.
2. Keep these routes working:
   - `/`
   - `/archive/`
   - post routes like `/<slug>/`
   - `/about/`, `/coaching/`, `/glossary/`, `/hire-me-kit/`, `/level-up-mastermind/`, `/pair-coding/`, `/projects/`, `/uses/`, `/workshop-javascript/`
3. Keep `static/_redirects` behavior unchanged on first pass.
4. Do not redesign UI in the parity phase.

## Recommended execution order

1. Create Hugo config and base layouts.
2. Recreate blog post rendering.
3. Recreate home and archive pages.
4. Migrate static React pages to Hugo content/templates.
5. Port SEO + analytics.
6. Run link and route validation.
7. Only then remove Gatsby.

## File mapping guidance

- Gatsby site metadata -> Hugo config params.
- `src/templates/blog-post.js` -> `layouts/_default/single.html` (or `layouts/blog/single.html`).
- `src/pages/index.js` -> `layouts/index.html`.
- `src/pages/archive.js` -> Hugo section/list page for archive.
- `src/components/seo.js` -> shared partial (for title, description, OG, Twitter).
- `src/styles/global.css` -> Hugo static stylesheet.

## URL safety guidance

- Existing Gatsby slugs are path-derived via `createFilePath`.
- Hugo permalink config must reproduce current URL shape exactly.
- If permalink behavior is ambiguous, use explicit frontmatter `url` values rather than guessing.

## Content safety guidance

- Keep existing markdown content as source of truth.
- Do not mass-edit post bodies unless required for broken links/assets.
- Frontmatter can be normalized carefully (`tags` format consistency), but avoid churn.

## Known issues already present

- Some links appear typoed:
  - `/focus-closer-to-zero`
  - `/work-out-load`
- Some assets referenced in content/pages are missing from repo:
  - `/content/images/...`
  - `/chancesmith_s.png`
  - `Hire-Me-Kit-Cover.png`

Track these as explicit migration tasks; do not ignore silently.

## Validation checklist for each iteration

- Build succeeds.
- Home page renders.
- Archive page renders.
- Sample old + new post URLs render.
- Previous/next links on posts work.
- Redirects file still present and unchanged unless intentionally updated.

## Definition of done

A migration step is complete only when:

1. Code is committed.
2. Changes are pushed.
3. Route parity checks pass for the affected scope.
4. Notes are added to plan/checklist for any remaining risks.
