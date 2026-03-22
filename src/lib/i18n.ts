export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  nav: {
    about: string;
    programs: string;
    reviews: string;
    admin: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    statLabel: string;
    statValue: string;
    note: string;
  };
  sections: {
    philosophy: {
      title: string;
      body: string;
    };
    programs: {
      title: string;
      items: { title: string; description: string }[];
    };
    reviews: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
      body: string;
    };
  };
  admin: {
    loginTitle: string;
    loginDescription: string;
    idLabel: string;
    passwordLabel: string;
    submit: string;
    hint: string;
    dashboardTitle: string;
    dashboardDescription: string;
    logout: string;
    backMain: string;
    dashboard: string;
    content: string;
    welcome: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    nav: {
      about: "소개",
      programs: "포트폴리오",
      reviews: "학부모 후기",
      admin: "어드민",
    },
    hero: {
      eyebrow: "김소영 학습 교실",
      title: "차분한 설명과 단단한 성장을 만드는 개인 맞춤형 학습 공간",
      description:
        "학생마다 다른 속도와 성향을 존중하며, 이해 중심의 수업과 세심한 관리로 꾸준한 성장을 돕습니다.",
      primary: "상담 문의하기",
      secondary: "프로그램 보기",
      statLabel: "1:1 맞춤 학습 관리",
      statValue: "Elementary to Middle",
      note: "피그마 화면에 맞춘 이미지, 이력, 수업 정보는 다음 단계에서 그대로 반영됩니다.",
    },
    sections: {
      philosophy: {
        title: "배움의 속도를 존중하는 수업",
        body: "지식을 빠르게 주입하기보다, 학생이 스스로 이해하고 설명할 수 있을 때까지 구조를 다시 세우는 방식으로 지도합니다.",
      },
      programs: {
        title: "포트폴리오",
        items: [
          {
            title: "초등 5학년 수학 성장 기록",
            description:
              "개념 재정비 8주 프로그램을 통해 오답률을 낮추고 풀이 설명력을 개선한 사례입니다.",
          },
          {
            title: "중등 내신 대비 학습 코칭",
            description:
              "시험 전 4주 집중 설계로 취약 단원을 보완하고 실전형 문제 접근을 구축한 사례입니다.",
          },
          {
            title: "자기주도 루틴 설계 프로젝트",
            description:
              "주간 학습 루틴과 복습 체계를 맞춤 설계해 학습 지속률을 높인 코칭 포트폴리오입니다.",
          },
        ],
      },
      reviews: {
        title: "학부모가 느낀 변화",
        items: [
          "아이의 설명이 훨씬 또렷해졌고, 스스로 질문하는 힘이 생겼어요.",
          "성적뿐 아니라 공부하는 태도가 차분해졌다는 점이 가장 만족스럽습니다.",
          "꼼꼼한 피드백 덕분에 집에서도 학습 흐름을 이해하기 쉬웠어요.",
        ],
      },
      contact: {
        title: "상담은 편하게 시작하세요",
        body: "학생의 현재 학습 상태와 목표를 함께 정리한 뒤, 맞는 수업 방향을 제안드립니다.",
      },
    },
    admin: {
      loginTitle: "어드민 로그인",
      loginDescription: "수업 정보와 사이트 내용을 관리하려면 로그인하세요.",
      idLabel: "관리자 아이디",
      passwordLabel: "비밀번호",
      submit: "로그인",
      hint: "ADMIN_LOGIN_ID, ADMIN_LOGIN_PASSWORD, ADMIN_SESSION_SECRET 환경변수를 설정하세요.",
      dashboardTitle: "어드민 대시보드",
      dashboardDescription:
        "추후 공지, 후기, 프로그램 정보를 여기서 관리하도록 확장할 수 있습니다.",
      logout: "로그아웃",
      backMain: "메인으로 돌아가기",
      dashboard: "대시보드",
      content: "콘텐츠 관리",
      welcome: "관리자 전용 페이지입니다.",
    },
  },
  en: {
    nav: {
      about: "About",
      programs: "Portfolio",
      reviews: "Reviews",
      admin: "Admin",
    },
    hero: {
      eyebrow: "Kim So Young Learning Studio",
      title: "A calm, personalized learning studio built for lasting growth",
      description:
        "Each student grows at a different pace. This studio focuses on deep understanding, thoughtful feedback, and steady progress.",
      primary: "Book a Consultation",
      secondary: "View Programs",
      statLabel: "Personalized Study Care",
      statValue: "Elementary to Middle",
      note: "Portfolio visuals, history, and class details will be mapped exactly from Figma in the next implementation step.",
    },
    sections: {
      philosophy: {
        title: "Lessons that respect each learner's pace",
        body: "Instead of rushing through content, lessons are structured until each student can truly explain what they learned with confidence.",
      },
      programs: {
        title: "Portfolio",
        items: [
          {
            title: "Grade 5 Math Growth Case",
            description:
              "An 8-week concept reset that improved clarity, explanation skills, and error reduction.",
          },
          {
            title: "Middle School Exam Prep Coaching",
            description:
              "A focused 4-week plan that strengthened weak units and test-ready problem solving.",
          },
          {
            title: "Self-Directed Routine Design",
            description:
              "A personalized study routine and review system that improved consistency and retention.",
          },
        ],
      },
      reviews: {
        title: "What Parents Notice",
        items: [
          "My child now explains ideas more clearly and asks questions with confidence.",
          "The biggest change was not only grades, but a calmer attitude toward studying.",
          "The detailed feedback made it much easier to support learning at home.",
        ],
      },
      contact: {
        title: "Start with a comfortable consultation",
        body: "We first review the student's current level and goals, then suggest the right learning plan together.",
      },
    },
    admin: {
      loginTitle: "Admin Login",
      loginDescription: "Sign in to manage lessons, content, and future updates.",
      idLabel: "Admin ID",
      passwordLabel: "Password",
      submit: "Sign in",
      hint: "Set ADMIN_LOGIN_ID, ADMIN_LOGIN_PASSWORD, and ADMIN_SESSION_SECRET.",
      dashboardTitle: "Admin Dashboard",
      dashboardDescription:
        "This can be extended to manage notices, reviews, and program details later.",
      logout: "Sign out",
      backMain: "Back to main",
      dashboard: "Dashboard",
      content: "Content",
      welcome: "Admin-only workspace.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
