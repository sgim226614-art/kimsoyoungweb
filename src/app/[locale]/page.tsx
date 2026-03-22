import Link from "next/link";
import { notFound } from "next/navigation";

import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

function LocaleToggle({ locale }: { locale: Locale }) {
  const href = locale === "ko" ? "/en" : "/ko";
  const label = locale === "ko" ? "EN" : "KO";

  return (
    <Link
      href={href}
      className="inline-flex rounded-full border border-[#c9b2a0] px-4 py-2 text-sm font-medium text-[#6b4632] transition hover:border-[#8f5f42] hover:text-[#8f5f42]"
    >
      {label}
    </Link>
  );
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <main className="px-6 pb-16 pt-6 sm:px-10 lg:px-14">
      <section className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-[32px] border border-white/60 bg-white/75 shadow-[0_24px_80px_rgba(81,47,28,0.12)] backdrop-blur">
        <header className="flex flex-col gap-5 border-b border-[#ecdccd] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9d6e50]">
              {dict.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-none text-[#2f1c12] sm:text-5xl">
              {locale === "ko" ? "김소영" : "Kim So Young"}
            </h1>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-[#7b5a48]">
            <a href="#about">{dict.nav.about}</a>
            <a href="#programs">{dict.nav.programs}</a>
            <a href="#reviews">{dict.nav.reviews}</a>
            <Link href={`/${locale}/admin/login`}>{dict.nav.admin}</Link>
            <LocaleToggle locale={locale} />
          </nav>
        </header>

        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-[#f8eadf] px-4 py-2 text-sm text-[#9f6647]">
                {dict.hero.eyebrow}
              </p>
              <h2 className="max-w-3xl font-display text-5xl leading-[0.95] text-[#2a170f] sm:text-6xl">
                {dict.hero.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[#5e4638] sm:text-lg">
                {dict.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2b170f] px-6 py-4 text-sm font-semibold text-[#fff7f1] transition hover:bg-[#4a2c1f]"
              >
                {dict.hero.primary}
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-[#cfb8a6] px-6 py-4 text-sm font-semibold text-[#6d4835] transition hover:border-[#8f5f42] hover:text-[#8f5f42]"
              >
                {dict.hero.secondary}
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#3a2114_0%,#b57c58_52%,#f4d5bf_100%)] p-7 text-[#fffaf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_34%)]" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {dict.hero.statLabel}
                </p>
                <p className="font-display text-4xl">{dict.hero.statValue}</p>
              </div>
              <div className="grid gap-4 rounded-[24px] bg-white/12 p-5 backdrop-blur">
                <div className="h-px bg-white/20" />
                <p className="text-sm leading-7 text-white/82">
                  {locale === "ko"
                    ? "피그마 화면에 맞춘 이미지, 이력, 수업 정보는 다음 단계에서 그대로 반영됩니다."
                    : "Portfolio visuals, history, and class details will be mapped exactly from Figma in the next implementation step."}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto mt-8 grid w-full max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="rounded-[28px] bg-[#2d1a12] p-8 text-[#fdf3eb] shadow-[0_16px_40px_rgba(53,28,18,0.18)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7b198]">
            About
          </p>
          <h3 className="mt-4 font-display text-4xl">
            {dict.sections.philosophy.title}
          </h3>
        </div>
        <div className="rounded-[28px] border border-[#ead8c9] bg-[#fffaf5] p-8 text-[#5b4437]">
          <p className="text-lg leading-8">{dict.sections.philosophy.body}</p>
        </div>
      </section>

      <section id="programs" className="mx-auto mt-8 w-full max-w-7xl">
        <div className="rounded-[32px] border border-[#ead9ca] bg-white/70 p-8 shadow-[0_20px_60px_rgba(93,61,42,0.08)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#ae7b59]">
                Programs
              </p>
              <h3 className="mt-3 font-display text-4xl text-[#2b1810]">
                {dict.sections.programs.title}
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {dict.sections.programs.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] bg-[#f8f0e8] p-6 text-[#4f392c]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#ab7b58]">
                  Program
                </p>
                <h4 className="mt-4 text-2xl font-semibold">{item.title}</h4>
                <p className="mt-4 leading-7">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto mt-8 w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {dict.sections.reviews.items.map((item, index) => (
            <article
              key={item}
              className="rounded-[28px] border border-[#e9d8ca] bg-white/80 p-7 shadow-[0_16px_40px_rgba(96,67,46,0.08)]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#b07e5b]">
                0{index + 1}
              </p>
              <p className="mt-5 text-lg leading-8 text-[#4c362b]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-8 w-full max-w-7xl">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#fff7f1_0%,#efddcd_100%)] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9c6d50]">
            Contact
          </p>
          <h3 className="mt-3 font-display text-4xl text-[#2b1810]">
            {dict.sections.contact.title}
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f4638]">
            {dict.sections.contact.body}
          </p>
        </div>
      </section>
    </main>
  );
}
