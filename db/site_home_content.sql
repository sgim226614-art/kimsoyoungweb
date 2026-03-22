create table if not exists public.site_home_content (
  locale text primary key,
  hero_title text not null,
  hero_description text not null,
  primary_cta text not null,
  secondary_cta text not null,
  about_title text not null,
  about_body text not null,
  contact_title text not null,
  contact_body text not null,
  updated_at timestamptz not null default now()
);

alter table public.site_home_content
  add column if not exists about_title text;

alter table public.site_home_content
  add column if not exists about_body text;

alter table public.site_home_content
  add column if not exists contact_title text;

alter table public.site_home_content
  add column if not exists contact_body text;
