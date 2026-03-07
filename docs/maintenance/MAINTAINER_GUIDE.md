# Maintainer Guide

## Update Workflow (Recommended)

1. Edit content/data/components as needed
2. Run local build check
3. Validate pages affected by change
4. Update logs in `docs/maintenance` (required)
5. Commit with clear message
6. Push to `main`

## Content Update Locations

- Profile/about: `src/data/profile.ts`
- Education: `src/data/education.ts`
- Experience: `src/data/experience.ts`
- Publications: `src/data/publications.ts`
- Skills: `src/data/skills.ts`
- Social links: `src/data/socials.ts`
- Projects: `src/content/projects/*.md`
- Insights: `src/content/insights/*.md`

## Homepage Featured Controls

- Project featured flag is per-entry frontmatter: `featured: true`
- Home preview count controls: `src/data/contentSettings.ts`

## Asset Management

- Shared site assets: `public/assets/`
- Project/insight cover and thumbnails should live in `public/assets/`
- Keep asset names stable or update references in frontmatter/layout metadata

## Quality Checks Before Merge

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

Manual checks:

- Navbar links and active states work
- Mobile layout remains readable
- Metadata values still correct
- Privacy requirements still respected

## Privacy Checklist (Must Always Pass)

- No phone number published
- No full street address published
- Location displayed only as `New Jersey, USA`

## Logging Requirement

After each meaningful change:

1. Add entry to `docs/maintenance/CHANGELOG.md`
2. Add/update dated session log file (e.g., `SESSION_LOG_YYYY-MM-DD.md`)
3. Use `UPDATE_TEMPLATE.md` format
