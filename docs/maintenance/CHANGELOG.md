# Changelog

All significant changes are listed here in reverse chronological order.

## 2026-03-07

### 16:08 ET - Projects/Insights content system added
- Added Astro content collections for `projects` and `insights`
- Added markdown-driven list/detail pages:
  - `/projects`, `/projects/[slug]`
  - `/insights`, `/insights/[slug]`
- Added reusable components:
  - `ProjectCard.astro`
  - `InsightCard.astro`
- Added homepage previews for featured projects and latest insights
- Added category filters for projects/insights pages
- Added starter placeholder content entries and placeholder thumbnail asset
- Updated navbar/footer and styling to support new sections
- Updated README with authoring documentation for new content areas

### 16:01 ET - Deployment hardening and metadata updates
- Verified successful production build (`npm run build`)
- Updated GitHub Actions workflow for Pages:
  - Added `actions/configure-pages@v5`
  - Switched CI runtime to Node 22
  - Standardized dependency install to `npm ci`
- Added `package-lock.json` for deterministic CI installs
- Improved Open Graph and Twitter image alt metadata
- Normalized social/contact values (LinkedIn URL format and GitHub profile URL)
- Reworked README for deployment and maintenance clarity

### 15:42-15:59 ET - Portfolio implementation and refinement
- Implemented Astro + TypeScript portfolio architecture
- Added centralized data modules and reusable components
- Implemented pages: Home, About, Education, Experience, Publications, Skills, Contact
- Added responsive styling, subtle motion, and active navigation
- Added SEO + Open Graph metadata framework
- Added GitHub Pages deployment workflow
- Refined copy and visual hierarchy for recruiter-facing presentation
