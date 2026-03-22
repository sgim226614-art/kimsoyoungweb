import type { Locale } from "@/lib/i18n";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export type HomeHeroInput = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type HomeHeroContent = HomeHeroInput & {
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
  updated_at: string;
};

export async function getHomeHeroContent(
  locale: Locale,
  fallback: HomeHeroInput,
): Promise<HomeHeroContent> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ...fallback, source: "fallback" };
  }

  const { data, error } = await supabase
    .from("site_home_content")
    .select("locale, hero_title, hero_description, primary_cta, secondary_cta, updated_at")
    .eq("locale", locale)
    .maybeSingle<HomeContentRow>();

  if (error || !data) {
    return { ...fallback, source: "fallback" };
  }

  return {
    title: data.hero_title || fallback.title,
    description: data.hero_description || fallback.description,
    primaryCta: data.primary_cta || fallback.primaryCta,
    secondaryCta: data.secondary_cta || fallback.secondaryCta,
    source: "database",
  };
}

export async function saveHomeHeroContent(
  locale: Locale,
  payload: HomeHeroInput,
): Promise<SaveResult> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, reason: "config" };
  }

  const { error } = await supabase.from("site_home_content").upsert(
    {
      locale,
      hero_title: payload.title,
      hero_description: payload.description,
      primary_cta: payload.primaryCta,
      secondary_cta: payload.secondaryCta,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "locale" },
  );

  if (error) {
    return { ok: false, reason: "database", message: error.message };
  }

  return { ok: true };
}
