# Logging Policy

This repository uses mandatory update logging in `docs/maintenance`.

## Scope

Log all future updates that affect:

- content
- styles/UI
- components/pages
- deployment/config
- SEO/metadata
- routing/navigation

## Required Logging Actions per Update

1. Append a concise, timestamped entry in `CHANGELOG.md`.
2. Add details in the active dated session file:
   - `SESSION_LOG_YYYY-MM-DD.md`
3. Reference changed files and any follow-up TODOs.

## Timestamp Format

Use local timezone (America/New_York) and this format:

- `YYYY-MM-DD HH:MM ET`

Example:

- `2026-03-08 09:15 ET - Updated project card hover states`

## Entry Quality

Each entry should state:

- what changed
- why it changed
- where it changed (files)
- any manual actions required

## If No User-Facing Change

For purely internal maintenance, still log the change with a short rationale.
