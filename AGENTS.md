# AGENTS.md

Machine-oriented instructions for coding agents working in this repository.

## Purpose

This file is the single source of truth for agent execution rules.
Use this file instead of creating multiple tool-specific instruction files.

Human contributors should read `README.md`.

## Project Context

Project: `kimsoyoungweb`

Goal:
- Build a bilingual portfolio website from Figma designs.
- Include a separate admin area with login.

Products:
- Main site
- Admin site

Locales:
- `ko`
- `en`

## Priority Order

1. Preserve Git history and user-owned changes.
2. Keep behavior consistent with Figma.
3. Keep routes and i18n structure stable.
4. Keep admin auth safe and explicit.
5. Keep code readable and small.

## Expected Architecture

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- i18n: locale-segment routing
- Auth: admin login + protected admin routes

Route baseline:
- `/ko`, `/en`
- `/ko/admin`, `/en/admin`
- `/ko/admin/login`, `/en/admin/login`

## Execution Rules

- Before coding, inspect current repository state.
- Do not delete unrelated files.
- Do not run destructive git commands unless explicitly requested.
- Keep changes scoped to the requested task.
- Prefer small commits with high-signal messages.

## Coding Conventions

- Use TypeScript strict mode where possible.
- Favor server components by default in Next.js.
- Use client components only when interactivity requires it.
- Keep reusable UI in dedicated component files.
- Keep i18n strings centralized.
- Avoid hardcoded secrets and credentials.

## Validation Checklist

Before closing a task, verify:
- Lint passes
- Build passes
- Main/Admin routes resolve
- `ko` and `en` pages both work
- Admin protected routes redirect correctly when unauthenticated

## Commands

Preferred command sequence after scaffold:

```bash
npm install
npm run lint
npm run build
```

For local dev:

```bash
npm run dev
```

## Documentation Policy

- Keep `README.md` human-friendly.
- Keep `AGENTS.md` machine-actionable.
- If workflow changes, update both files in the same commit.

## Source Note

This setup follows the workflow described in:
- https://www.youtube.com/watch?v=TC7dK0gwgg0
- https://agents.md/
