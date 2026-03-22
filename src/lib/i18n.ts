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
      programs: "프로그램",
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
    },
    sections: {
      philosophy: {
        title: "배움의 속도를 존중하는 수업",
        body: "지식을 빠르게 주입하기보다, 학생이 스스로 이해하고 설명할 수 있을 때까지 구조를 다시 세우는 방식으로 지도합니다.",
      },
      programs: {
        title: "운영 프로그램",
        items: [
          {
            title: "기초 개념 클리닉",
            description: "막힌 개념을 정확히 짚고 기초를 안정적으로 재정비합니다.",
          },
          {
            title: "학교 내신 대비",
            description: "학교 진도와 시험 범위에 맞춰 핵심 문제 풀이와 오답 관리를 진행합니다.",
          },
          {
            title: "학습 습관 코칭",
            description: "공부 루틴, 복습 방법, 자기주도 학습 흐름까지 함께 설계합니다.",
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
      programs: "Programs",
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
    },
    sections: {
      philosophy: {
        title: "Lessons that respect each learner's pace",
        body: "Instead of rushing through content, lessons are structured until each student can truly explain what they learned with confidence.",
      },
      programs: {
        title: "Programs",
        items: [
          {
            title: "Foundation Concept Clinic",
            description:
              "Rebuild weak concepts carefully and strengthen the basics with clarity.",
          },
          {
            title: "School Exam Preparation",
            description:
              "Match school progress and test scope with targeted practice and review.",
          },
          {
            title: "Study Habit Coaching",
            description:
              "Shape routines, revision methods, and self-directed study habits together.",
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
