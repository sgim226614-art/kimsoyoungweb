import { notFound, redirect } from "next/navigation";

import { saveHomeContentAction } from "@/app/[locale]/admin/content/actions";
import { isAdminAuthenticated } from "@/lib/auth";
import { getHomeContent } from "@/lib/home-content";
import { getDictionary, isLocale } from "@/lib/i18n";
import { isSupabaseAdminConfigured } from "@/lib/supabase-admin";

export default async function AdminContentPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ status?: string; error?: string }>;
}) {
  const { locale } = await params;
  const { status, error } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect(`/${locale}/admin/login`);
  }

  const dict = getDictionary(locale);
  const isConfigured = isSupabaseAdminConfigured();
  const content = await getHomeContent(locale, {
    heroTitle: dict.hero.title,
    heroDescription: dict.hero.description,
    primaryCta: dict.hero.primary,
    secondaryCta: dict.hero.secondary,
    aboutTitle: dict.sections.philosophy.title,
    aboutBody: dict.sections.philosophy.body,
    contactTitle: dict.sections.contact.title,
    contactBody: dict.sections.contact.body,
    programs: dict.sections.programs.items,
    reviews: dict.sections.reviews.items,
  });

  const savedText =
    locale === "ko"
      ? "저장 완료: 메인 페이지 문구가 갱신되었습니다."
      : "Saved: homepage copy has been updated.";
  const validationText =
    locale === "ko"
      ? "입력값이 유효하지 않습니다. 길이 제한을 확인해주세요."
      : "Invalid input. Please check field length limits.";
  const configText =
    locale === "ko"
      ? "Supabase 설정이 없습니다. .env.local을 확인해주세요."
      : "Supabase configuration is missing. Check .env.local.";
  const databaseText =
    locale === "ko"
      ? "DB 저장 중 오류가 발생했습니다. 테이블 구성과 권한을 확인해주세요."
      : "Database save failed. Check table schema and permissions.";

  return (
    <main className="px-6 py-8 sm:px-10 lg:px-14">
      <section className="animate-rise mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
        <article className="rounded-[32px] border border-[#ead9ca] bg-white/80 p-7 shadow-[0_18px_40px_rgba(90,58,39,0.1)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#ab7a59]">
            Content Form
          </p>
          <h1 className="mt-3 font-display text-4xl text-[#2b1810]">
            {dict.admin.content}
          </h1>
          <p className="mt-3 text-[#604839]">
            {locale === "ko"
              ? "여기서 저장한 값이 메인 페이지 히어로 텍스트에 바로 반영됩니다."
              : "Saved values here are reflected in the main page hero text."}
          </p>

          {status === "saved" ? (
            <p className="mt-4 rounded-xl bg-[#e8f4ea] px-4 py-3 text-sm text-[#2e6b3e]">
              {savedText}
            </p>
          ) : null}

          {error === "validation" ? (
            <p className="mt-4 rounded-xl bg-[#fdeeea] px-4 py-3 text-sm text-[#a54834]">
              {validationText}
            </p>
          ) : null}

          {error === "config" ? (
            <p className="mt-4 rounded-xl bg-[#fdeeea] px-4 py-3 text-sm text-[#a54834]">
              {configText}
            </p>
          ) : null}

          {error === "database" ? (
            <p className="mt-4 rounded-xl bg-[#fdeeea] px-4 py-3 text-sm text-[#a54834]">
              {databaseText}
            </p>
          ) : null}

          <form action={saveHomeContentAction} className="mt-8 space-y-5">
            <input type="hidden" name="locale" value={locale} />

            <div>
              <label
                htmlFor="heroTitle"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "메인 타이틀" : "Hero Title"}
              </label>
              <input
                id="heroTitle"
                name="heroTitle"
                defaultValue={content.heroTitle}
                required
                maxLength={120}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div>
              <label
                htmlFor="heroDescription"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "설명 문구" : "Description"}
              </label>
              <textarea
                id="heroDescription"
                name="heroDescription"
                rows={5}
                defaultValue={content.heroDescription}
                required
                maxLength={700}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="heroPrimaryCta"
                  className="mb-2 block text-sm font-medium text-[#704d39]"
                >
                  {locale === "ko" ? "주요 버튼 문구" : "Primary CTA"}
                </label>
                <input
                  id="heroPrimaryCta"
                  name="heroPrimaryCta"
                  defaultValue={content.primaryCta}
                  required
                  maxLength={40}
                  className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
                />
              </div>

              <div>
                <label
                  htmlFor="heroSecondaryCta"
                  className="mb-2 block text-sm font-medium text-[#704d39]"
                >
                  {locale === "ko" ? "보조 버튼 문구" : "Secondary CTA"}
                </label>
                <input
                  id="heroSecondaryCta"
                  name="heroSecondaryCta"
                  defaultValue={content.secondaryCta}
                  required
                  maxLength={40}
                  className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
                />
              </div>
            </div>

            <div className="h-px bg-[#ecdccd]" />

            <div>
              <label
                htmlFor="aboutTitle"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "소개 섹션 제목" : "About Section Title"}
              </label>
              <input
                id="aboutTitle"
                name="aboutTitle"
                defaultValue={content.aboutTitle}
                required
                maxLength={120}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div>
              <label
                htmlFor="aboutBody"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "소개 섹션 본문" : "About Section Body"}
              </label>
              <textarea
                id="aboutBody"
                name="aboutBody"
                rows={4}
                defaultValue={content.aboutBody}
                required
                maxLength={700}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div>
              <label
                htmlFor="contactTitle"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "문의 섹션 제목" : "Contact Section Title"}
              </label>
              <input
                id="contactTitle"
                name="contactTitle"
                defaultValue={content.contactTitle}
                required
                maxLength={120}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div>
              <label
                htmlFor="contactBody"
                className="mb-2 block text-sm font-medium text-[#704d39]"
              >
                {locale === "ko" ? "문의 섹션 본문" : "Contact Section Body"}
              </label>
              <textarea
                id="contactBody"
                name="contactBody"
                rows={4}
                defaultValue={content.contactBody}
                required
                maxLength={700}
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div className="h-px bg-[#ecdccd]" />

            <div className="space-y-4">
              <p className="text-sm font-semibold text-[#6f4b39]">
                {locale === "ko" ? "프로그램 카드" : "Program Cards"}
              </p>
              {content.programs.map((program, index) => {
                const order = index + 1;
                return (
                  <div key={`program-${order}`} className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b08160]">
                      {locale === "ko" ? `프로그램 ${order}` : `Program ${order}`}
                    </p>
                    <input
                      name={`programTitle${order}`}
                      defaultValue={program.title}
                      required
                      maxLength={120}
                      className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
                    />
                    <textarea
                      name={`programDescription${order}`}
                      rows={3}
                      defaultValue={program.description}
                      required
                      maxLength={500}
                      className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
                    />
                  </div>
                );
              })}
            </div>

            <div className="h-px bg-[#ecdccd]" />

            <div className="space-y-4">
              <p className="text-sm font-semibold text-[#6f4b39]">
                {locale === "ko" ? "후기 카드" : "Review Cards"}
              </p>
              {content.reviews.map((review, index) => {
                const order = index + 1;
                return (
                  <div key={`review-${order}`} className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b08160]">
                      {locale === "ko" ? `후기 ${order}` : `Review ${order}`}
                    </p>
                    <textarea
                      name={`reviewText${order}`}
                      rows={3}
                      defaultValue={review}
                      required
                      maxLength={500}
                      className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#2b170f] px-6 py-3 text-sm font-semibold text-[#fff8f2]"
            >
              {locale === "ko" ? "메인 콘텐츠 저장" : "Save Home Content"}
            </button>
          </form>
        </article>

        <aside className="rounded-[32px] bg-[linear-gradient(145deg,#2f1b11_0%,#8d6045_55%,#e3c4ad_100%)] p-7 text-[#fff8f3] shadow-[0_18px_40px_rgba(58,31,20,0.25)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">
            Content Status
          </p>
          <div className="mt-5 rounded-2xl bg-white/12 p-4 text-sm text-white/85">
            <p>
              {locale === "ko"
                ? `Supabase 연결: ${isConfigured ? "완료" : "미설정"}`
                : `Supabase connection: ${isConfigured ? "ready" : "not configured"}`}
            </p>
            <p className="mt-2">
              {locale === "ko"
                ? `현재 데이터 소스: ${content.source === "database" ? "DB" : "기본값"}`
                : `Current data source: ${content.source === "database" ? "database" : "fallback"}`}
            </p>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-white/70">
            SQL
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl bg-[#1f120c]/70 p-4 text-xs leading-6 text-white/85">
{`create table if not exists public.site_home_content (
  locale text primary key,
  hero_title text not null,
  hero_description text not null,
  primary_cta text not null,
  secondary_cta text not null,
  about_title text not null,
  about_body text not null,
  contact_title text not null,
  contact_body text not null,
  programs_json jsonb not null default '[]'::jsonb,
  reviews_json jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);`}
          </pre>
        </aside>
      </section>
    </main>
  );
}
