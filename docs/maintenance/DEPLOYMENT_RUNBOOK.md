# Deployment Runbook (GitHub Pages)

## Deployment Model

- Platform: GitHub Pages
- Repository type: user site (`aldrinpadua.github.io`)
- Build/deploy method: GitHub Actions
- Output directory: `dist/`

## Required Files

- `astro.config.mjs`
- `.github/workflows/deploy.yml`
- `package.json`
- `package-lock.json`

## One-Time GitHub Setup

1. Push repository to GitHub.
2. Open **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.
4. Ensure Actions are enabled for this repository.

## Normal Deploy Flow

1. Commit and push changes to `main`.
2. GitHub Actions runs `Deploy Portfolio to GitHub Pages`.
3. Workflow installs dependencies with `npm ci`.
4. Workflow runs `npm run build`.
5. Workflow publishes `dist/` to Pages.

## Local Pre-Deploy Check

Run before pushing:

```bash
npm install
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Verify Successful Production Output

- Build succeeds with no errors
- `dist/index.html` exists
- `dist/projects/index.html` and `dist/insights/index.html` exist
- `dist/assets/favicon.svg` and `dist/assets/og-image.svg` exist

## Rollback Strategy

If a deployment introduces breakage:

1. Revert the problematic commit(s)
2. Push revert commit to `main`
3. Wait for workflow redeploy

## Common Failure Points

- Missing lockfile (`npm ci` fails)
- Invalid frontmatter in content collection markdown
- Broken URL schema in links requiring valid URL format
- Build failures from malformed `.astro` syntax
