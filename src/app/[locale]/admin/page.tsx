import { notFound, redirect } from "next/navigation";

import { logoutAction } from "@/app/[locale]/admin/actions";
import { isAdminAuthenticated } from "@/lib/auth";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect(`/${locale}/admin/login`);
  }

  const dict = getDictionary(locale);
  const cards =
    locale === "ko"
      ? [
          {
            title: "메인 비주얼 관리",
            body: "대표 문구, 연락 버튼, 주요 강조 문구를 관리하는 영역으로 확장할 수 있습니다.",
          },
          {
            title: "프로그램 업데이트",
            body: "수업 과정, 커리큘럼, 수강 대상 정보를 입력하는 CMS 영역으로 연결할 수 있습니다.",
          },
          {
            title: "후기 및 공지",
            body: "학부모 후기와 공지를 등록해 메인 페이지에 바로 반영하도록 만들 수 있습니다.",
          },
        ]
      : [
          {
            title: "Hero Content",
            body: "This area can later manage the hero message, CTA buttons, and featured copy.",
          },
          {
            title: "Program Updates",
            body: "This can evolve into a CMS section for curriculum, class details, and student levels.",
          },
          {
            title: "Reviews and Notices",
            body: "Parent reviews and notices can be authored here and published to the main site.",
          },
        ];

  return (
    <main className="min-h-screen px-6 py-8 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(81,47,28,0.12)] backdrop-blur sm:p-10">
        <div className="flex flex-col gap-5 border-b border-[#eadacc] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#a16f50]">
              Admin Dashboard
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none text-[#2c1810]">
              {dict.admin.dashboardTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5e4638]">
              {dict.admin.dashboardDescription}
            </p>
          </div>

          <form action={logoutAction}>
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className="rounded-full border border-[#d7c1b1] px-5 py-3 text-sm font-medium text-[#6f4a37] transition hover:border-[#996748] hover:text-[#996748]"
            >
              {dict.admin.logout}
            </button>
          </form>
        </div>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] bg-[#f8efe7] p-6 text-[#50392b]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#b07f5e]">
                Module
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{card.title}</h2>
              <p className="mt-4 leading-7">{card.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
