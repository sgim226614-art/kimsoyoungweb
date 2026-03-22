import type { Locale } from "@/lib/i18n";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export type HomeContentInput = {
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  aboutTitle: string;
  aboutBody: string;
  contactTitle: string;
  contactBody: string;
};

export type HomeContent = HomeContentInput & {
  source: "database" | "fallback";
};

type SaveResult =
  | { ok: true }
  | { ok: false; reason: "config" | "database"; message?: string };

type HomeContentRow = {
  locale: Locale;
  hero_title: string;
  hero_description: string;
  primary_cta: string;
  secondary_cta: string;
  about_title: string;
  about_body: string;
  contact_title: string;
  contact_body: string;
  updated_at: string;
};

export async function getHomeContent(
  locale: Locale,
  fallback: HomeContentInput,
): Promise<HomeContent> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ...fallback, source: "fallback" };
  }

  const { data, error } = await supabase
    .from("site_home_content")
    .select(
      "locale, hero_title, hero_description, primary_cta, secondary_cta, about_title, about_body, contact_title, contact_body, updated_at",
    )
    .eq("locale", locale)
    .maybeSingle<HomeContentRow>();

  if (error || !data) {
    return { ...fallback, source: "fallback" };
  }

  return {
    heroTitle: data.hero_title || fallback.heroTitle,
    heroDescription: data.hero_description || fallback.heroDescription,
    primaryCta: data.primary_cta || fallback.primaryCta,
    secondaryCta: data.secondary_cta || fallback.secondaryCta,
    aboutTitle: data.about_title || fallback.aboutTitle,
    aboutBody: data.about_body || fallback.aboutBody,
    contactTitle: data.contact_title || fallback.contactTitle,
    contactBody: data.contact_body || fallback.contactBody,
    source: "database",
  };
}

export async function saveHomeContent(
  locale: Locale,
  payload: HomeContentInput,
): Promise<SaveResult> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, reason: "config" };
  }

  const { error } = await supabase.from("site_home_content").upsert(
    {
      locale,
      hero_title: payload.heroTitle,
      hero_description: payload.heroDescription,
      primary_cta: payload.primaryCta,
      secondary_cta: payload.secondaryCta,
      about_title: payload.aboutTitle,
      about_body: payload.aboutBody,
      contact_title: payload.contactTitle,
      contact_body: payload.contactBody,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "locale" },
  );

  if (error) {
    return { ok: false, reason: "database", message: error.message };
  }

  return { ok: true };
}
