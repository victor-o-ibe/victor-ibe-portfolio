# Victor Ibe technical portfolio

Public recruiter-facing site for Victor Ibe, covering AWS, cloud architecture, AI/ML systems and MLOps.

Live site: https://howards12.github.io/victor-ibe-portfolio/

## Stack

- [Astro](https://astro.build) static site
- TypeScript
- Plain CSS
- GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

## Content updates

Personal, contact and project copy live in:

- `src/data/portfolio.ts`
- `src/data/projects.ts`

Fill these placeholders before public launch:

- `contact.linkedinUrl`
- `contact.githubUrl`
- `contact.email`
- `profile.image` (file in `public/images/profile/`)

Optional: add a PDF resume under `public/resume/` and link it from the data files.

## GitHub Pages

The site is configured for:

https://howards12.github.io/victor-ibe-portfolio/

In the GitHub repository, open Settings, then Pages, and confirm the source is GitHub Actions.

If you later attach a custom domain, update `site` in `astro.config.mjs` and remove `base`.

## Boundary

This repository is independent of any commercial product codebase. It does not include proprietary source, internal roadmaps, customer data, or unpublished implementation details.
