import type { Locale } from "@/lib/i18n";

export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  frameLabel: string;
  accent: string;
};

export type PortfolioCategory = {
  id: string;
  menu: string;
  heading: string;
  intro: string;
  projects: PortfolioProject[];
};

export type AboutContent = {
  heading: string;
  years: string;
  name: string;
  contact: string;
  educationLabel: string;
  certificatesLabel: string;
  education: string[];
  certificates: string[];
  timeline: { period: string; company: string; role: string; detail: string }[];
  narratives: { title: string; body: string[] }[];
};

export type PortfolioContent = {
  navMain: string;
  navAbout: string;
  categories: PortfolioCategory[];
  about: AboutContent;
  heroTitle: string;
  heroSubtitle: string;
  countLabel: string;
};

const koContent: PortfolioContent = {
  navMain: "메인화면",
  navAbout: "ABOUT ME",
  heroTitle: "KIMSOYOUNG",
  heroSubtitle: "PORTFOLIO",
  countLabel: "01",
  about: {
    heading: "ABOUT ME",
    years: "2021-2026",
    name: "김소영",
    contact: "PHONE 010-5656-3959 / EMAIL kimsoyoung@example.com",
    educationLabel: "학력사항",
    certificatesLabel: "자격증",
    education: [
      "대전고등학교 / 2019.03 - 2022.02",
      "극동대 예술대학 디자인학과",
      "소재지 / 경기도 충주시",
    ],
    certificates: [
      "GTQ 2급",
      "컴퓨터그래픽스운용기능사",
      "웹디자인기능사",
    ],
    timeline: [
      {
        period: "NOW",
        company: "주식회사 헵타랩스",
        role: "디자이너",
        detail: "서비스/플랫폼 기획 및 디자인, 모바일 기획",
      },
      {
        period: "2025-01 / 2023-09",
        company: "(주)글로벌유니티에이",
        role: "디자이너",
        detail: "그래픽 디자인, 홍보물 제작, 웹/앱 디자인",
      },
      {
        period: "2023-04 / 2021-11",
        company: "니지모리 스튜디오",
        role: "아트홍보팀",
        detail: "콘텐츠 디자인 및 마케팅 협업",
      },
    ],
    narratives: [
      {
        title: "성장과정",
        body: [
          "저는 희망찬 마음으로 작은 가능성을 꾸준히 실천하는 성향입니다.",
          "포스터, 카드뉴스, 배너 등 다양한 결과물을 만들며 시각 언어를 다듬었습니다.",
          "기획 의도를 빠르게 해석하고, 완성도 높은 비주얼로 정리하는 데 강점이 있습니다.",
        ],
      },
      {
        title: "성격 소개",
        body: [
          "협업에서는 책임감을 우선으로 두고, 문제 해결 중심으로 접근합니다.",
          "디자인뿐 아니라 서비스 흐름과 사용자 관점까지 함께 고민합니다.",
        ],
      },
      {
        title: "학창시절 및 경력",
        body: [
          "학업과 실무 프로젝트를 병행하며 도전하는 태도를 익혔습니다.",
          "실무에서는 피드백을 빠르게 반영하며 결과 중심으로 작업해왔습니다.",
        ],
      },
    ],
  },
  categories: [
    {
      id: "uiux",
      menu: "UIUX",
      heading: "UI/UX PORTFOLIO",
      intro: "서비스 맥락을 이해하고 사용자 흐름이 자연스럽게 이어지는 UI를 설계합니다.",
      projects: [
        {
          slug: "watch-up",
          title: "WATCH UP",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "서비스 UI/UX 디자인",
          summary: "사용자 중심의 시계 커뮤니티 플랫폼 디자인 프로젝트입니다.",
          bullets: [
            "메인 피드 구조 설계",
            "커뮤니티/뉴스 동선 정리",
            "상품 카드 시각 시스템 설계",
            "앱 다크테마 전반 구축",
          ],
          frameLabel: "01 / 17",
          accent: "linear-gradient(180deg, #a40000 0%, #090909 52%, #050505 100%)",
        },
        {
          slug: "wallet",
          title: "WALLET",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "모바일 서비스 디자인",
          summary: "실시간 데이터 가시성과 사용성을 높인 금융형 앱 디자인입니다.",
          bullets: [
            "자산 대시보드 가독성 강화",
            "거래/지갑 기능 UI 통합",
            "핵심 액션 영역 재정렬",
            "상태 피드백 컴포넌트 제작",
          ],
          frameLabel: "01 / 08",
          accent: "linear-gradient(180deg, #18d8d8 0%, #061115 56%, #050505 100%)",
        },
      ],
    },
    {
      id: "ppt",
      menu: "PPT",
      heading: "PPT PORTFOLIO",
      intro: "브랜드 톤과 메시지를 동시에 전달하는 발표형 문서 디자인을 진행합니다.",
      projects: [
        {
          slug: "ttm-ventures",
          title: "TTM Ventures",
          client: "TTM Ventures",
          period: "2025-01 / 2023-09",
          role: "PPT 제작",
          summary: "외주 제안서 및 소개서로 제작된 프레젠테이션입니다.",
          bullets: [
            "브랜드 키비주얼 기반 슬라이드 설계",
            "강조 메시지 중심 타이포 구성",
            "투자/사업구조 다이어그램 제작",
          ],
          frameLabel: "01 / 17",
          accent: "linear-gradient(180deg, #1f26e0 0%, #070711 45%, #050505 100%)",
        },
        {
          slug: "aethir",
          title: "Aethir",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "PPT 제작",
          summary: "서비스 방향성을 시각화한 심플하고 선명한 발표 자료입니다.",
          bullets: [
            "다크톤 배경 위 대비 강화",
            "브랜드 심볼 중심 정보 구조",
            "슬라이드 간 연결 리듬 설계",
          ],
          frameLabel: "01 / 13",
          accent: "linear-gradient(180deg, #0b1dc7 0%, #050512 50%, #040404 100%)",
        },
      ],
    },
    {
      id: "poster",
      menu: "포스터",
      heading: "POSTER PORTFOLIO",
      intro: "오프라인 현장성과 온라인 확산성을 동시에 고려한 포스터를 제작했습니다.",
      projects: [
        {
          slug: "cram-egg",
          title: "크램이지 공장 오픈식",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "포스터 제작",
          summary: "강한 대비와 텍스처를 활용해 이벤트 주목도를 높인 포스터입니다.",
          bullets: [
            "핵심 일정 정보 강조",
            "브랜드 컬러 기반 키아트",
            "온라인 썸네일 확장 버전 제작",
          ],
          frameLabel: "01 / 05",
          accent: "linear-gradient(180deg, #ff6a00 0%, #3b1200 55%, #080808 100%)",
        },
        {
          slug: "philippines-seminar",
          title: "필리핀 세미나",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "포스터 제작",
          summary: "행사 성격에 맞춘 차분한 톤으로 정보 전달성을 높였습니다.",
          bullets: [
            "다국어 텍스트 정렬 최적화",
            "행사 장소/일정 계층화",
            "SNS 카드형 확장 버전 제작",
          ],
          frameLabel: "01 / 05",
          accent: "linear-gradient(180deg, #5c8d5d 0%, #1a2a1a 58%, #060606 100%)",
        },
      ],
    },
    {
      id: "banner",
      menu: "배너",
      heading: "BANNER PORTFOLIO",
      intro: "광고 배너는 클릭 전환을 중심으로 카피와 비주얼의 균형을 맞췄습니다.",
      projects: [
        {
          slug: "metabada-mining",
          title: "METABADA MINING",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "배너 디자인",
          summary: "스마트 디바이스 기반 프로모션 배너를 제작한 프로젝트입니다.",
          bullets: [
            "메인/서브 배너 세트 구성",
            "광고 매체별 비율 최적화",
            "썸네일, 피드용 컷 분화",
          ],
          frameLabel: "01 / 04",
          accent: "linear-gradient(180deg, #1b4f73 0%, #05131b 55%, #050505 100%)",
        },
        {
          slug: "global-unit-a-banner",
          title: "GLOBAL UNIT-A",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "배너 디자인",
          summary: "블루 계열 톤으로 통일해 브랜드 인지도를 강화한 배너입니다.",
          bullets: [
            "브랜드 톤 유지형 시리즈",
            "랜딩 전환 중심 CTA 구조",
            "SNS/스토어 배포 규격 대응",
          ],
          frameLabel: "01 / 05",
          accent: "linear-gradient(180deg, #1f4b87 0%, #0b1a2f 60%, #050505 100%)",
        },
      ],
    },
    {
      id: "cardnews",
      menu: "카드뉴스",
      heading: "CARD NEWS PORTFOLIO",
      intro: "정보 전달과 리듬감 있는 흐름을 함께 담아 카드뉴스 시리즈를 디자인했습니다.",
      projects: [
        {
          slug: "meta-bucket",
          title: "메타버킷",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "카드뉴스 제작",
          summary: "서비스 핵심 기능을 단계별 카드로 구성해 이해도를 높였습니다.",
          bullets: [
            "정보 구조형 카드 시나리오",
            "핵심 문장 중심 레이아웃",
            "이미지/텍스트 밸런스 튜닝",
          ],
          frameLabel: "01 / 09",
          accent: "linear-gradient(180deg, #6540ff 0%, #1b113f 57%, #050505 100%)",
        },
        {
          slug: "watchup-cardnews",
          title: "WATCH UP 카드뉴스",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "카드뉴스 제작",
          summary: "앱 기능을 카드 시퀀스로 풀어낸 콘텐츠형 카드뉴스 프로젝트입니다.",
          bullets: [
            "기능별 스토리텔링 순서 구성",
            "카드 간 시각 일관성 유지",
            "짧은 문장 기반 메시지 압축",
          ],
          frameLabel: "01 / 11",
          accent: "linear-gradient(180deg, #cc0000 0%, #2c0909 58%, #050505 100%)",
        },
      ],
    },
    {
      id: "etc",
      menu: "기타 디자인",
      heading: "ETC DESIGN",
      intro: "차트, 소개서, 브랜딩 확장물 등 프로젝트 전반의 보조 시각물을 제작했습니다.",
      projects: [
        {
          slug: "unita-chart",
          title: "GLOBAL UNIT-A ORG CHART",
          client: "(주)글로벌유니티에이",
          period: "2025-01 / 2023-09",
          role: "조직도 디자인",
          summary: "복잡한 정보를 빠르게 파악할 수 있도록 표/블록 구조를 정리했습니다.",
          bullets: [
            "정보 계층 시각화",
            "프린트/화면용 버전 분리",
            "가독성 중심 명도 대비 설계",
          ],
          frameLabel: "01 / 09",
          accent: "linear-gradient(180deg, #d6d6d6 0%, #858585 58%, #1b1b1b 100%)",
        },
      ],
    },
  ],
};

type EnProjectCopy = {
  title?: string;
  client?: string;
  role: string;
  summary: string;
  bullets: string[];
};

type EnCategoryCopy = {
  menu: string;
  heading: string;
  intro: string;
  projects: Record<string, EnProjectCopy>;
};

const enCategoryCopy: Record<string, EnCategoryCopy> = {
  uiux: {
    menu: "UIUX",
    heading: "UI/UX PORTFOLIO",
    intro:
      "I design interfaces where service context and user flow connect naturally from first touch to action.",
    projects: {
      "watch-up": {
        client: "Global Unity A Co., Ltd.",
        role: "Service UI/UX Design",
        summary:
          "A watch community platform project focused on clear discovery and smooth participation.",
        bullets: [
          "Designed the main feed information structure",
          "Refined community and news user paths",
          "Built a visual system for product cards",
          "Implemented a full dark-theme UI set",
        ],
      },
      wallet: {
        client: "Global Unity A Co., Ltd.",
        role: "Mobile Service Design",
        summary:
          "A financial app design that improves real-time readability and transaction usability.",
        bullets: [
          "Improved asset dashboard readability",
          "Unified transaction and wallet UX flows",
          "Reorganized key action areas",
          "Created consistent status feedback components",
        ],
      },
    },
  },
  ppt: {
    menu: "PPT",
    heading: "PPT PORTFOLIO",
    intro:
      "I craft presentation decks that deliver brand tone and core messages with strong visual hierarchy.",
    projects: {
      "ttm-ventures": {
        role: "PPT Design",
        summary:
          "A proposal and company-introduction deck produced for external business communication.",
        bullets: [
          "Slide composition based on brand key visuals",
          "Typography focused on core talking points",
          "Business and investment diagram design",
        ],
      },
      aethir: {
        client: "Global Unity A Co., Ltd.",
        role: "PPT Design",
        summary:
          "A clean presentation that visualizes service direction with strong contrast and rhythm.",
        bullets: [
          "Enhanced contrast on a dark visual base",
          "Information structure centered on the brand symbol",
          "Designed narrative rhythm across slides",
        ],
      },
    },
  },
  poster: {
    menu: "POSTER",
    heading: "POSTER PORTFOLIO",
    intro:
      "These posters were designed for both on-site impact and online shareability across channels.",
    projects: {
      "cram-egg": {
        title: "Cram Easy Factory Opening",
        client: "Global Unity A Co., Ltd.",
        role: "Poster Design",
        summary:
          "An event poster using bold contrast and texture to maximize attention and urgency.",
        bullets: [
          "Highlighted key date and schedule points",
          "Created key art based on brand colors",
          "Prepared social thumbnail expansion versions",
        ],
      },
      "philippines-seminar": {
        title: "Philippines Seminar",
        client: "Global Unity A Co., Ltd.",
        role: "Poster Design",
        summary:
          "A calm visual tone adapted to event context while improving information clarity.",
        bullets: [
          "Optimized multilingual text alignment",
          "Clarified venue and schedule hierarchy",
          "Produced social card expansion variants",
        ],
      },
    },
  },
  banner: {
    menu: "BANNER",
    heading: "BANNER PORTFOLIO",
    intro:
      "Banner campaigns were designed around conversion intent, balancing copy and visual focus.",
    projects: {
      "metabada-mining": {
        client: "Global Unity A Co., Ltd.",
        role: "Banner Design",
        summary:
          "A promotion banner project built for smart-device campaigns across ad placements.",
        bullets: [
          "Built main and sub banner sets",
          "Optimized aspect ratios by channel",
          "Separated feed and thumbnail cuts",
        ],
      },
      "global-unit-a-banner": {
        client: "Global Unity A Co., Ltd.",
        role: "Banner Design",
        summary:
          "A blue-toned banner series designed to strengthen brand recognition consistently.",
        bullets: [
          "Maintained a consistent brand tone series",
          "Structured CTA blocks for landing conversion",
          "Prepared SNS and store-specific formats",
        ],
      },
    },
  },
  cardnews: {
    menu: "CARD NEWS",
    heading: "CARD NEWS PORTFOLIO",
    intro:
      "This series combines concise information delivery with narrative rhythm through card sequencing.",
    projects: {
      "meta-bucket": {
        title: "Meta Bucket",
        client: "Global Unity A Co., Ltd.",
        role: "Card News Design",
        summary:
          "Core service features were organized into step-by-step cards for fast understanding.",
        bullets: [
          "Planned information-first card scenarios",
          "Built layouts around concise key copy",
          "Tuned image and text balance per card",
        ],
      },
      "watchup-cardnews": {
        title: "WATCH UP Card News",
        client: "Global Unity A Co., Ltd.",
        role: "Card News Design",
        summary:
          "A content-driven card sequence that explains app features with consistent visual flow.",
        bullets: [
          "Structured feature storytelling order",
          "Maintained visual consistency between cards",
          "Compressed messages into short impactful lines",
        ],
      },
    },
  },
  etc: {
    menu: "ETC DESIGN",
    heading: "ETC DESIGN",
    intro:
      "I also produced supporting visuals including charts, documentation, and brand collateral.",
    projects: {
      "unita-chart": {
        client: "Global Unity A Co., Ltd.",
        role: "Organization Chart Design",
        summary:
          "Complex organization data was restructured into readable table and block layouts.",
        bullets: [
          "Visualized information hierarchy clearly",
          "Separated print and screen layout versions",
          "Designed contrast for maximum readability",
        ],
      },
    },
  },
};

const enContent: PortfolioContent = {
  ...koContent,
  navMain: "MAIN",
  navAbout: "ABOUT ME",
  heroTitle: "KIMSOYOUNG",
  heroSubtitle: "PORTFOLIO",
  about: {
    ...koContent.about,
    heading: "ABOUT ME",
    years: "2021-2026",
    name: "Kim So Young",
    contact: "PHONE +82 10-5656-3959 / EMAIL kimsoyoung@example.com",
    educationLabel: "Education",
    certificatesLabel: "Certificates",
    education: [
      "Daejeon High School / 2019.03 - 2022.02",
      "Far East University, College of Arts, Design Major",
      "Location / Chungju-si, Gyeonggi-do",
    ],
    certificates: [
      "GTQ Level 2",
      "Craftsman Computer Graphics Operation",
      "Craftsman Web Design",
    ],
    timeline: [
      {
        period: "NOW",
        company: "Heptalabs Co., Ltd.",
        role: "Designer",
        detail: "Service/platform planning and design, mobile planning",
      },
      {
        period: "2025-01 / 2023-09",
        company: "Global Unity A Co., Ltd.",
        role: "Designer",
        detail: "Graphic design, promotional assets, web/app design",
      },
      {
        period: "2023-04 / 2021-11",
        company: "Nijimori Studio",
        role: "Art Promotion Team",
        detail: "Content design and collaborative marketing support",
      },
    ],
    narratives: [
      {
        title: "Growth Journey",
        body: [
          "I steadily turn small possibilities into real outcomes with consistent execution.",
          "By creating posters, card news, and banners, I strengthened my visual communication skills.",
          "I am strong at quickly interpreting project intent and shaping it into polished visuals.",
        ],
      },
      {
        title: "Work Style",
        body: [
          "In collaboration, I prioritize ownership and practical problem solving.",
          "I consider not only design output but also service flow and the user's perspective.",
        ],
      },
      {
        title: "Study and Career",
        body: [
          "I developed a challenge-oriented mindset by balancing academics with real projects.",
          "In practical work, I have focused on results while applying feedback quickly.",
        ],
      },
    ],
  },
  categories: koContent.categories.map((category) => {
    const translatedCategory = enCategoryCopy[category.id];

    if (!translatedCategory) {
      return category;
    }

    return {
      ...category,
      menu: translatedCategory.menu,
      heading: translatedCategory.heading,
      intro: translatedCategory.intro,
      projects: category.projects.map((project) => {
        const translatedProject = translatedCategory.projects[project.slug];

        if (!translatedProject) {
          return project;
        }

        return {
          ...project,
          title: translatedProject.title ?? project.title,
          client: translatedProject.client ?? project.client,
          role: translatedProject.role,
          summary: translatedProject.summary,
          bullets: [...translatedProject.bullets],
        };
      }),
    };
  }),
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return locale === "en" ? enContent : koContent;
}
