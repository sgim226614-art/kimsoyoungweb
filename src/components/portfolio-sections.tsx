import type {
  PortfolioCategory,
  PortfolioContent,
  PortfolioProject,
} from "@/lib/portfolio-content";
import type { Locale } from "@/lib/i18n";

type MainCopy = {
  heroMeta: string;
  heroTags: string[];
  watchLabel: string;
  watchBody: string[];
  middleLead: string;
  middleTail: string;
  aquaBody: string;
  detailBlocks: { title: string; body: string }[];
};

function getMainCopy(locale: Locale): MainCopy {
  if (locale === "en") {
    return {
      heroMeta: "Portfolio Interface / Visual Design / Presentation",
      heroTags: ["UI/UX Design", "Brand Visual", "Communication", "Art Direction"],
      watchLabel: "WATCH UP",
      watchBody: [
        "A watch-centered platform where users discover products,",
        "community stories, and editorial content in one flow.",
        "The layout focuses on clear hierarchy and smooth exploration.",
      ],
      middleLead: "Design crafted",
      middleTail: "for users",
      aquaBody:
        "A practical mobile interface designed to keep browsing, card exploration, and action paths simple.",
      detailBlocks: [
        {
          title: "Main Feed",
          body: "The first screen is structured to surface key content quickly and reduce navigation steps.",
        },
        {
          title: "Card UI",
          body: "Product and article cards follow a consistent visual rhythm for faster scanning.",
        },
        {
          title: "Information",
          body: "Content sections are grouped by purpose so users can move with minimal friction.",
        },
        {
          title: "Structure",
          body: "The full page is arranged around repeatable layout rules for stable expansion.",
        },
      ],
    };
  }

  return {
    heroMeta: "PORTFOLIO INTERFACE / VISUAL DESIGN / PRESENTATION",
    heroTags: ["UI/UX Design", "Brand Visual", "Communication", "Art Direction"],
    watchLabel: "WATCH UP",
    watchBody: [
      "사용자가 콘텐츠를 자연스럽게 탐색할 수 있도록",
      "커뮤니티와 카드, 뉴스 흐름을 하나로 연결한 프로젝트입니다.",
      "핵심 정보가 먼저 보이도록 계층을 설계했습니다.",
    ],
    middleLead: "사용자를 위한",
    middleTail: "하나뿐인 디자인",
    aquaBody:
      "사용자 행동 기반으로 정보 배치를 재정리하고, 필요한 기능에 빠르게 도달할 수 있도록 구성했습니다.",
    detailBlocks: [
      {
        title: "메인 화면",
        body: "첫 진입에서 핵심 카드와 주요 콘텐츠가 먼저 보이도록 흐름을 구성했습니다.",
      },
      {
        title: "카드 UI",
        body: "정보를 짧고 명확하게 전달할 수 있도록 반복 가능한 카드 시스템을 설계했습니다.",
      },
      {
        title: "정보 배치",
        body: "사용자가 단계적으로 이동할 수 있도록 목적별 콘텐츠 그룹을 정리했습니다.",
      },
      {
        title: "구조",
        body: "페이지 전체를 동일한 규칙으로 확장 가능하도록 블록 구조로 재정렬했습니다.",
      },
    ],
  };
}

function DeviceMock({
  className,
  tone,
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";

  return (
    <div
      className={`relative h-[420px] w-[215px] rounded-[38px] border shadow-[0_24px_55px_rgba(0,0,0,0.65)] ${
        isLight
          ? "border-white/45 bg-[linear-gradient(180deg,#f8f8f8_0%,#d7d7d7_100%)]"
          : "border-white/25 bg-[linear-gradient(180deg,#151515_0%,#060606_100%)]"
      } ${className ?? ""}`}
    >
      <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black/75" />
      <div
        className={`absolute inset-x-3 bottom-3 top-11 rounded-[29px] border p-3 ${
          isLight ? "border-black/12 bg-white" : "border-white/10 bg-[#090909]"
        }`}
      >
        <div className="space-y-2">
          <div
            className={`h-20 rounded-xl ${
              isLight
                ? "bg-[linear-gradient(180deg,#dde4f4_0%,#eef3ff_100%)]"
                : "bg-[linear-gradient(180deg,#1f2732_0%,#12161d_100%)]"
            }`}
          />
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`device-chip-${index}`}
                className={`h-10 rounded-md ${
                  isLight ? "bg-[#f0f0f0]" : "bg-[#171717]"
                }`}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className={`h-28 rounded-md ${isLight ? "bg-[#f2f2f2]" : "bg-[#151515]"}`} />
            <div className={`h-28 rounded-md ${isLight ? "bg-[#ececec]" : "bg-[#121212]"}`} />
          </div>
          <div className={`h-16 rounded-md ${isLight ? "bg-[#f5f5f5]" : "bg-[#151515]"}`} />
        </div>
      </div>
    </div>
  );
}

function HeroCard({ content }: { content: PortfolioContent }) {
  return (
    <section className="mx-auto w-full max-w-[1411px] px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="relative aspect-[1411/1216] w-full overflow-hidden rounded-[8px] bg-[linear-gradient(180deg,#070707_0%,#050505_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_0%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.02)_48%,transparent_72%)]" />
        <div className="pointer-events-none absolute inset-x-[31%] top-[-16%] h-[45%] bg-[radial-gradient(circle,rgba(230,230,230,0.3)_0%,rgba(255,255,255,0.05)_36%,transparent_72%)] blur-[52px]" />

        <div className="absolute left-1/2 top-[31%] w-[52.5%] -translate-x-1/2">
          <div className="rounded-[18px] border border-white/24 bg-[linear-gradient(180deg,rgba(8,8,8,0.95)_0%,rgba(4,4,4,0.96)_100%)] px-[2.1%] py-[2.2%] shadow-[0_30px_74px_rgba(0,0,0,0.78)]">
            <h1 className="text-[clamp(30px,5.8vw,112px)] font-semibold leading-none tracking-[-0.03em] text-[#cf0000]">
              {content.heroTitle}
            </h1>

            <div className="mt-[2.1%] grid gap-x-[1.8%] gap-y-[0.7%] text-[clamp(8px,0.8vw,12px)] leading-[1.4] text-white/86 sm:grid-cols-4">
              <div>
                <p className="border-t border-white/42 pt-1">Main</p>
                <p>Major in Graphic Design</p>
              </div>
              <div>
                <p className="border-t border-white/42 pt-1">Marketing Design</p>
                <p>Social Media Design</p>
                <p>Social Media Design</p>
                <p>Advertising Design</p>
                <p>Logo Design</p>
              </div>
              <div>
                <p className="border-t border-white/42 pt-1">Print Design Designe</p>
              </div>
              <div>
                <p className="border-t border-white/42 pt-1">UX/UI Design</p>
                <p>Web Design</p>
                <p>App Design</p>
              </div>
            </div>

            <p className="mt-[9%] text-right font-display text-[clamp(38px,5.7vw,108px)] font-semibold leading-none tracking-[-0.01em] text-[#bbc0c6]">
              {content.heroSubtitle}
            </p>
          </div>

          <div className="mx-auto -mt-[0.8%] h-[1.8%] w-[92%] rounded-[100%] bg-[radial-gradient(circle_at_center,rgba(195,195,195,0.34)_0%,rgba(24,24,24,0.95)_76%)] blur-[1px]" />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-[17%] h-[8.8%] w-[66%] bg-[linear-gradient(180deg,#161616_0%,#0a0a0a_100%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[7.6%] w-[38%] bg-[linear-gradient(180deg,#131313_0%,#060606_100%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[9.2%] w-[34%] bg-[linear-gradient(180deg,#1e1e1e_0%,#080808_100%)]" />
      </div>
    </section>
  );
}

function WatchupRedSection({
  project,
  copy,
}: {
  project: PortfolioProject;
  copy: MainCopy;
}) {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-24 sm:px-8">
      <article className="overflow-hidden rounded-[8px] border border-[#bc1e1e]/45 bg-[linear-gradient(180deg,#d60f0f_0%,#350404_48%,#040404_100%)] px-5 py-6 sm:px-9 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.47fr_0.53fr]">
          <div className="space-y-2">
            <p className="text-sm text-white/90">{project.client}</p>
            <p className="text-xs text-white/70">{project.period}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {copy.watchLabel}
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-white/82">
              {copy.watchBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex justify-start pl-2 sm:pl-8">
          <DeviceMock tone="light" className="-rotate-[14deg]" />
          <div className="pointer-events-none absolute bottom-[-52px] left-[-8px] h-[230px] w-[340px] rounded-[100%] border-2 border-[#f10a0a] opacity-80 sm:h-[270px] sm:w-[430px]" />
          <div className="pointer-events-none absolute bottom-[-30px] left-[20px] h-[190px] w-[280px] rounded-[100%] border border-[#f10a0a] opacity-75 sm:h-[230px] sm:w-[350px]" />
        </div>
      </article>
    </section>
  );
}

function MiddleSloganSection({ copy }: { copy: MainCopy }) {
  return (
    <section className="mx-auto mt-20 w-full max-w-7xl px-4 sm:mt-28 sm:px-8">
      <div className="relative flex min-h-[300px] items-center justify-center">
        <p className="pointer-events-none absolute left-0 top-0 text-5xl font-semibold text-white sm:left-8 sm:text-6xl">
          {copy.middleLead}
        </p>
        <p className="pointer-events-none absolute bottom-1 right-0 text-5xl font-semibold text-white sm:right-8 sm:text-6xl">
          {copy.middleTail}
        </p>

        <div className="relative flex items-center gap-5">
          <DeviceMock className="-rotate-[13deg]" />
          <DeviceMock tone="light" className="rotate-[11deg]" />
        </div>
      </div>
    </section>
  );
}

function WatchupAquaSection({ copy }: { copy: MainCopy }) {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[8px] border border-cyan-200/25 bg-[linear-gradient(180deg,#11aeb8_0%,#07333a_44%,#040404_100%)] px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-px w-[145%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(255,255,255,0.0)_0%,rgba(196,254,255,0.95)_50%,rgba(255,255,255,0.0)_100%)]" />
        <h3 className="text-2xl font-semibold tracking-[0.06em] text-white sm:text-3xl">
          WATCH UP
        </h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/86 sm:text-base">
          {copy.aquaBody}
        </p>
      </div>
    </section>
  );
}

function WatchupDetailSection({
  copy,
}: {
  copy: MainCopy;
}) {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-8">
      <div className="overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(180deg,#070707_0%,#060606_75%,#101010_100%)] p-5 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.43fr_0.57fr]">
          <div className="flex justify-center lg:justify-start">
            <DeviceMock className="h-[560px] w-[270px]" />
          </div>

          <div className="space-y-8 pt-3">
            {copy.detailBlocks.map((block) => (
              <article key={block.title} className="border-b border-white/10 pb-5">
                <p className="text-sm font-semibold text-white">| {block.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/76">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioHeroSection({
  content,
  locale,
}: {
  content: PortfolioContent;
  locale: Locale;
}) {
  void locale;

  return <HeroCard content={content} />;
}

export function PortfolioMainShowcase({
  content,
  locale,
}: {
  content: PortfolioContent;
  locale: Locale;
}) {
  const copy = getMainCopy(locale);
  const uiuxCategory = content.categories.find((category) => category.id === "uiux");
  const watchupProject = uiuxCategory?.projects[0];

  if (!watchupProject) {
    return null;
  }

  return (
    <>
      <WatchupRedSection project={watchupProject} copy={copy} />
      <MiddleSloganSection copy={copy} />
      <WatchupAquaSection copy={copy} />
      <WatchupDetailSection copy={copy} />
    </>
  );
}

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
