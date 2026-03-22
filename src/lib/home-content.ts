import type { Locale } from "@/lib/i18n";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export type ProgramItem = {
  title: string;
  description: string;
};

export type HomeContentInput = {
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  heroStatLabel: string;
  heroStatValue: string;
  heroNote: string;
  aboutTitle: string;
  aboutBody: string;
  contactTitle: string;
  contactBody: string;
  programs: ProgramItem[];
  reviews: string[];
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
  hero_stat_label: string;
  hero_stat_value: string;
  hero_note: string;
  about_title: string;
  about_body: string;
  contact_title: string;
  contact_body: string;
  programs_json: unknown;
  reviews_json: unknown;
  updated_at: string;
};

function readString(value: unknown, fallback: string) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
}

function normalizePrograms(value: unknown, fallback: ProgramItem[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  const result = fallback.map((item, index) => {
    const raw = value[index];

    if (typeof raw !== "object" || raw === null) {
      return item;
    }

    const record = raw as { title?: unknown; description?: unknown };

    return {
      title: readString(record.title, item.title),
      description: readString(record.description, item.description),
    };
  });

  return result;
}

function normalizeReviews(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  return fallback.map((item, index) => readString(value[index], item));
}

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
      "locale, hero_title, hero_description, primary_cta, secondary_cta, hero_stat_label, hero_stat_value, hero_note, about_title, about_body, contact_title, contact_body, programs_json, reviews_json, updated_at",
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
    heroStatLabel: data.hero_stat_label || fallback.heroStatLabel,
    heroStatValue: data.hero_stat_value || fallback.heroStatValue,
    heroNote: data.hero_note || fallback.heroNote,
    aboutTitle: data.about_title || fallback.aboutTitle,
    aboutBody: data.about_body || fallback.aboutBody,
    contactTitle: data.contact_title || fallback.contactTitle,
    contactBody: data.contact_body || fallback.contactBody,
    programs: normalizePrograms(data.programs_json, fallback.programs),
    reviews: normalizeReviews(data.reviews_json, fallback.reviews),
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
      hero_stat_label: payload.heroStatLabel,
      hero_stat_value: payload.heroStatValue,
      hero_note: payload.heroNote,
      about_title: payload.aboutTitle,
      about_body: payload.aboutBody,
      contact_title: payload.contactTitle,
      contact_body: payload.contactBody,
      programs_json: payload.programs,
      reviews_json: payload.reviews,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "locale" },
  );

  if (error) {
    return { ok: false, reason: "database", message: error.message };
  }

  return { ok: true };
}
