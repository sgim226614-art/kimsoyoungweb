import type {
  PortfolioCategory,
  PortfolioContent,
  PortfolioProject,
} from "@/lib/portfolio-content";
import type { Locale } from "@/lib/i18n";

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/45 text-sm text-white/95 transition hover:border-white"
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
  locale: Locale;
}) {
  const [recent = "", previous = ""] = project.period
    .split("/")
    .map((item) => item.trim());
  const projectLabel = locale === "ko" ? "프로젝트" : "PROJECT";

  return (
    <article className="mx-auto max-w-6xl">
      <div className="rounded-[10px] border border-white/10 bg-[#050505] p-4 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.18em] text-white/70">{project.client}</p>
            <h3 className="font-display text-4xl text-white sm:text-5xl">
              {project.title}
            </h3>
            <p className="max-w-xl text-sm leading-7 text-white/78 sm:text-base">
              {project.summary}
            </p>
          </div>

          <div
            className="rounded-[8px] border border-white/15 p-4"
            style={{ backgroundImage: project.accent }}
          >
            <div className="flex aspect-[16/9] items-center justify-center rounded-[8px] border border-white/20 bg-black/35">
              <div className="text-center">
                <p className="font-display text-3xl text-white sm:text-4xl">
                  {project.title}
                </p>
                <p className="mt-2 text-xs tracking-[0.24em] text-white/70">
                  {project.frameLabel}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {project.bullets.slice(0, 3).map((item, bulletIndex) => (
                <div
                  key={`${project.slug}-bullet-${bulletIndex}`}
                  className="rounded-md border border-white/16 bg-black/30 p-3"
                >
                  <p className="text-[11px] leading-5 text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-8">
          <ArrowButton direction="left" />
          <p className="text-sm tracking-[0.18em] text-white/75">
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

      <p className="mt-4 text-right text-xs uppercase tracking-[0.24em] text-white/35">
        {projectLabel} {index + 1}
      </p>
    </article>
  );
}

export function PortfolioHeroSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-3xl rounded-[12px] border border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_58%)] p-6 sm:p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-[#f20e0e] sm:text-7xl">
          {content.heroTitle}
        </h1>
        <div className="mt-2 h-px bg-white/24" />
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
  );
}

export function PortfolioMainShowcase({
  content,
  locale,
}: {
  content: PortfolioContent;
  locale: Locale;
}) {
  const featured = content.categories
    .map((category) => ({
      category,
      project: category.projects[0],
    }))
    .filter((item) => Boolean(item.project));

  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-8">
      <div className="space-y-20 sm:space-y-28">
        {featured.map(({ category, project }) => (
          <article key={category.id}>
            <header className="mb-8">
              <p className="text-xs tracking-[0.22em] text-white/55">{category.menu}</p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-5xl">
                {category.heading}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                {category.intro}
              </p>
            </header>

            <ProjectBlock project={project} index={0} locale={locale} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function PortfolioAboutSection({
  content,
}: {
  content: PortfolioContent;
}) {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:mt-20 sm:px-8">
      <div className="rounded-[12px] border border-white/10 bg-[#050505] p-6 sm:p-10">
        <h2 className="font-display text-4xl text-white sm:text-6xl">
          {content.about.heading}
        </h2>
        <p className="mt-2 text-sm text-white/60">{content.about.years}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <div className="h-52 w-40 rounded border border-white/15 bg-[linear-gradient(180deg,#313131_0%,#0f0f0f_100%)]" />
            <p className="mt-6 text-3xl font-semibold">{content.about.name}</p>
            <p className="mt-2 text-xs text-white/55">{content.about.contact}</p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/45">
                {content.about.educationLabel}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/82">
                {content.about.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.22em] text-white/45">
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
            <div
              key={`${item.period}-${item.company}`}
              className="grid gap-2 sm:grid-cols-[170px_1fr]"
            >
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
          <article
            key={item.title}
            className="rounded-[12px] border border-white/10 bg-[#040404] p-6 sm:p-8"
          >
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
  );
}

export function PortfolioCategorySection({
  category,
  locale,
}: {
  category: PortfolioCategory;
  locale: Locale;
}) {
  return (
    <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:mt-20 sm:px-8">
      <header className="mb-8">
        <p className="text-xs tracking-[0.22em] text-white/55">{category.menu}</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-5xl">
          {category.heading}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
          {category.intro}
        </p>
      </header>

      <div className="space-y-16 sm:space-y-24">
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
