# aldrinpadua.github.io Portfolio

Professional portfolio for **Aldrin Padua** built with **Astro + TypeScript**, optimized for **GitHub Pages**.

The site is recruiter-facing first, with structured content areas for:

- profile, education, experience, publications, skills
- projects (technical portfolio entries)
- insights (professional updates/writing)

## Architecture Summary

- Astro static output (`dist/`)
- Reusable components in `src/components`
- Centralized profile data in `src/data`
- Scalable markdown content collections in `src/content`
- GitHub Actions deployment to GitHub Pages

## Maintenance + Update Logs

Repository operations docs and timestamped update logs are in:

- `docs/maintenance/`

Start here:

- `docs/maintenance/README.md`
- `docs/maintenance/LOGGING_POLICY.md`

## Project Tree

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public/
│   └── assets/
│       ├── favicon.svg
│       ├── og-image.svg
│       └── project-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── InsightCard.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   └── SectionHeading.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── insights/
│   │   │   ├── publication-note-placeholder.md
│   │   │   └── ros2-note-placeholder.md
│   │   └── projects/
│   │       ├── robotic-end-effector-placeholder.md
│   │       ├── ros2-workflow-placeholder.md
│   │       └── simulation-framework-placeholder.md
│   ├── data/
│   │   ├── contentSettings.ts
│   │   ├── contentTaxonomy.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── publications.ts
│   │   ├── skills.ts
│   │   ├── socials.ts
│   │   └── types.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── education.astro
│   │   ├── experience.astro
│   │   ├── index.astro
│   │   ├── insights/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── projects/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── publications.astro
│   │   └── skills.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── content.ts
│   │   └── resume.ts
│   └── env.d.ts
└── tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in `dist/`.

## Deployment (GitHub Pages)

This repository is a user site (`aldrinpadua.github.io`), so it deploys at root:

- `https://aldrinpadua.github.io/`

Automated workflow:

- `.github/workflows/deploy.yml`

One-time GitHub setup:

1. Push to `main`
2. GitHub Settings -> Pages
3. Set Source to **GitHub Actions**
4. Ensure Actions are enabled

## Where to Edit Content

### Core profile pages

- Profile/about text + SEO defaults: `src/data/profile.ts`
- Education: `src/data/education.ts`
- Experience: `src/data/experience.ts`
- Publications: `src/data/publications.ts`
- Skills: `src/data/skills.ts`
- Social links: `src/data/socials.ts`

### Projects content

Add/edit project entries in:

- `src/content/projects/*.md`

Each project supports frontmatter:

- `title`
- `tagline`
- `category`
- `status`
- `date`
- `summary`
- `goal`
- `tools` (array)
- `highlights` (optional array)
- `featured` (`true/false`)
- `draft` (`true/false`)
- `thumbnail` (optional path in `/public/assets/...`)
- `thumbnailAlt` (optional)
- `links` (optional object: `github`, `paper`, `demo`, `article`)

### Insights content

Add/edit technical updates in:

- `src/content/insights/*.md`

Each insight supports frontmatter:

- `title`
- `summary`
- `category`
- `tags` (array)
- `date`
- `draft` (`true/false`)
- `readingTime` (optional, auto-estimated if omitted)
- `cover` and `coverAlt` (optional)

### Homepage featured content

- Featured projects are controlled by `featured: true` in project markdown.
- Home preview limits are controlled in `src/data/contentSettings.ts`.

### Categories and tags

- Suggested categories are in `src/data/contentTaxonomy.ts`
- Actual categories/tags are assigned in each markdown entry frontmatter.

## Assets

- Resume file: `public/assets/resume.pdf`
- Favicon: `public/assets/favicon.svg`
- Social preview image: `public/assets/og-image.svg`
- Placeholder project thumbnail: `public/assets/project-placeholder.svg`

### Resume button behavior

The hero "Download Resume" button appears only when `public/assets/resume.pdf` exists.

## Privacy + Public Profile Rules

Current public-safe contact setup:

- Location: `New Jersey, USA`
- Email: `aldrin.d.padua@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/aldrinpadua/`
- GitHub: `https://github.com/aldrinpadua`

No phone number or full street address is displayed.

## Starter Placeholder Content

Starter demo entries are intentionally marked as placeholder/demo and should be replaced:

- `src/content/projects/robotic-end-effector-placeholder.md`
- `src/content/projects/simulation-framework-placeholder.md`
- `src/content/projects/ros2-workflow-placeholder.md`
- `src/content/insights/publication-note-placeholder.md`
- `src/content/insights/ros2-note-placeholder.md`

## Remaining Manual TODO

- Set the second publication year in `src/data/publications.ts` (`year: 'TODO'`).
- Replace placeholder project/insight markdown entries with your finalized public content.
