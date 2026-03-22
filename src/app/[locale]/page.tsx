import Link from "next/link";
import { notFound } from "next/navigation";

import { LocaleSwitch } from "@/components/locale-switch";
import { isLocale } from "@/lib/i18n";
import {
  getPortfolioContent,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/portfolio-content";

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-sm text-white/90 transition hover:border-white"
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

function ProjectBlock({
  project,
  index,
  locale,
}: {
  project: PortfolioProject;
  index: number;
  locale: "ko" | "en";
}) {
  const [recent = "", previous = ""] = project.period
    .split("/")
    .map((item) => item.trim());
  const projectLabel = locale === "ko" ? "프로젝트" : "PROJECT";

  return (
    <article className="rounded-[16px] border border-white/10 bg-[#040404] p-4 sm:p-8">
      <div className="rounded-[12px] border border-white/8 p-4 sm:p-6">
        <div
          className="rounded-[12px] border border-white/10 p-6 sm:p-10"
          style={{ backgroundImage: project.accent }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/65">
            {project.client}
          </p>
          <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
            {project.summary}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {project.bullets.map((item, bulletIndex) => (
              <div
                key={`${project.slug}-bullet-${bulletIndex}`}
                className="rounded-xl border border-white/12 bg-black/28 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                  {String(bulletIndex + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/88">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <ArrowButton direction="left" />
          <p className="text-sm tracking-[0.18em] text-white/70">
            {project.frameLabel}
          </p>
          <ArrowButton direction="right" />
        </div>
      </div>

      <div className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-[130px_1fr]">
        <p>{recent}</p>
        <p>
          {project.client} / {project.role}
        </p>
        <p>{previous}</p>
        <p>{project.summary}</p>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`${project.slug}-thumb-${i}`}
            className="h-12 w-12 rounded-md border border-white/18 bg-white/8"
          />
        ))}
      </div>

      <p className="mt-4 text-right text-xs uppercase tracking-[0.24em] text-white/35">
        {projectLabel} {index + 1}
      </p>
    </article>
  );
}

function CategorySection({
  category,
  locale,
}: {
  category: PortfolioCategory;
  locale: "ko" | "en";
}) {
  return (
    <section id={category.id} className="mx-auto mt-14 w-full max-w-6xl sm:mt-20">
      <header className="mb-6 px-1 sm:mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
          {category.menu}
        </p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-5xl">
          {category.heading}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
          {category.intro}
        </p>
      </header>

      <div className="space-y-10 sm:space-y-16">
        {category.projects.map((project, index) => (
          <ProjectBlock
            key={project.slug}
            project={project}
            index={index}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: "ko" | "en" = rawLocale;
  const content = getPortfolioContent(locale);

  const menuItems = [
    { id: "main", label: content.navMain },
    { id: "about", label: content.navAbout },
    ...content.categories.map((category) => ({
      id: category.id,
      label: category.menu,
    })),
  ];

  return (
    <div className="portfolio-noise relative isolate min-h-screen bg-[#020202] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/85 sm:text-xs">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={`/${locale}/admin/login`} className="text-xs text-white/70">
              ADMIN
            </Link>
            <LocaleSwitch
              locale={locale}
              className="rounded-full border border-white/35 px-3 py-1 text-xs text-white/80"
            />
          </div>
        </div>
      </header>

      <main className="pb-24">
        <section id="main" className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-8 sm:pt-16">
          <div className="mx-auto max-w-3xl rounded-[20px] border border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] p-6 sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-[#f20e0e] sm:text-7xl">
              {content.heroTitle}
            </h1>
            <div className="mt-2 h-px bg-white/20" />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                Portfolio Interface / Visual Design / Presentation
              </p>
              <p className="font-display text-4xl text-white/88 sm:text-5xl">
                {content.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:mt-24 sm:px-8">
          <div className="rounded-[18px] border border-white/10 bg-[#050505] p-6 sm:p-10">
            <h2 className="font-display text-4xl text-white sm:text-6xl">
              {content.about.heading}
            </h2>
            <p className="mt-2 text-sm text-white/60">{content.about.years}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
              <div>
                <div className="h-52 w-40 rounded-lg border border-white/15 bg-[linear-gradient(180deg,#313131_0%,#0f0f0f_100%)]" />
                <p className="mt-6 text-3xl font-semibold">{content.about.name}</p>
                <p className="mt-2 text-xs text-white/55">{content.about.contact}</p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    {content.about.educationLabel}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/82">
                    {content.about.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    {content.about.certificatesLabel}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/82">
                    {content.about.certificates.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-7">
              {content.about.timeline.map((item) => (
                <div key={`${item.period}-${item.company}`} className="grid gap-2 sm:grid-cols-[170px_1fr]">
                  <p className="text-sm text-white/76">{item.period}</p>
                  <p className="text-sm text-white/88">
                    {item.company} / {item.role}
                    <br />
                    <span className="text-white/60">{item.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {content.about.narratives.map((item) => (
              <article key={item.title} className="rounded-[16px] border border-white/10 bg-[#040404] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/78 sm:text-base">
                  {item.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {content.categories.map((category) => (
          <CategorySection key={category.id} category={category} locale={locale} />
        ))}
      </main>
    </div>
  );
}
