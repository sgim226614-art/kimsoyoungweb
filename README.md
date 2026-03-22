# kimsoyoungweb

Portfolio website project for Kim So Young.

This project has two products in one repo:
- Main website
- Admin website

Both products must support:
- Korean and English
- Mobile and desktop layouts

Admin must also support:
- Login
- Protected routes

## Why This Repo Uses `AGENTS.md`

This repository follows the `AGENTS.md` approach:
- `README.md` is for humans
- `AGENTS.md` is for coding agents

Video source used for this setup:
- https://www.youtube.com/watch?v=TC7dK0gwgg0
- Title: `AGENTS.md Explained: One File to Rule All Agents`

Key idea from the video:
- Keep one predictable machine instruction file instead of many tool-specific rule files.
- Centralize setup, coding style, and testing guidance for agents.
- Keep human onboarding docs separate and readable.

## Product Scope

- Main: public portfolio pages based on Figma
- Admin: content management pages with login
- i18n: `ko` and `en` for both Main and Admin

## Target Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- i18n routing
- Auth for admin

## Environment Variables

Create `.env.local` and set:

```bash
ADMIN_LOGIN_ID=your-admin-id
ADMIN_LOGIN_PASSWORD=your-admin-password
ADMIN_SESSION_SECRET=replace-with-a-long-random-secret
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Notes:
- Admin login is disabled when these values are missing.
- Use a strong random value for `ADMIN_SESSION_SECRET`.
- `SUPABASE_SERVICE_ROLE_KEY` is server-only and must never be exposed on client.

## Supabase Table

Create this table before using Admin Content save:

```sql
create table if not exists public.site_home_content (
  locale text primary key,
  hero_title text not null,
  hero_description text not null,
  primary_cta text not null,
  secondary_cta text not null,
  hero_stat_label text not null,
  hero_stat_value text not null,
  hero_note text not null,
  about_title text not null,
  about_body text not null,
  contact_title text not null,
  contact_body text not null,
  programs_json jsonb not null default '[]'::jsonb,
  reviews_json jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
```

## Initial Route Draft

- `/ko`, `/en`
- `/ko/admin`, `/en/admin`
- `/ko/admin/login`, `/en/admin/login`

## Development Order

1. GitHub initialization and branch baseline
2. Documentation baseline (`README.md`, `AGENTS.md`)
3. Next.js scaffold
4. Route and layout skeleton (main/admin + i18n)
5. Auth integration for admin
6. Figma-first UI implementation
7. QA pass (responsive + i18n + auth flows)
8. Commit and push by feature unit

## Collaboration Notes

- Make focused commits with clear messages.
- Do not mix refactors and feature changes in one commit.
- Keep security-sensitive data in `.env.local`.
- If implementation conflicts with Figma, follow Figma and document the delta.
