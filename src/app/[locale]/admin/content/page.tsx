import { notFound, redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/auth";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function AdminContentPage({
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
              ? "이 영역은 메인 페이지 문구/버튼/섹션 내용을 편집하는 CMS 폼으로 확장될 자리입니다."
              : "This area is prepared for a CMS form to edit hero copy, buttons, and main section content."}
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#704d39]">
                {locale === "ko" ? "메인 타이틀" : "Hero Title"}
              </label>
              <input
                type="text"
                placeholder={
                  locale === "ko"
                    ? "메인페이지 타이틀을 입력하세요"
                    : "Enter the homepage hero title"
                }
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#704d39]">
                {locale === "ko" ? "설명 문구" : "Description"}
              </label>
              <textarea
                rows={5}
                placeholder={
                  locale === "ko"
                    ? "메인 설명 문구를 입력하세요"
                    : "Enter the homepage description"
                }
                className="w-full rounded-2xl border border-[#e5d3c5] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#9b6a4d]"
              />
            </div>

            <button
              type="button"
              className="rounded-full bg-[#2b170f] px-6 py-3 text-sm font-semibold text-[#fff8f2]"
            >
              {locale === "ko" ? "저장(준비중)" : "Save (coming soon)"}
            </button>
          </form>
        </article>

        <aside className="rounded-[32px] bg-[linear-gradient(145deg,#2f1b11_0%,#8d6045_55%,#e3c4ad_100%)] p-7 text-[#fff8f3] shadow-[0_18px_40px_rgba(58,31,20,0.25)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">
            Content Roadmap
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/85">
            <li>
              {locale === "ko"
                ? "1. 메인 페이지 텍스트를 DB 기반으로 분리"
                : "1. Split homepage text into DB-backed fields"}
            </li>
            <li>
              {locale === "ko"
                ? "2. 한/영 콘텐츠를 개별 저장"
                : "2. Store Korean and English content separately"}
            </li>
            <li>
              {locale === "ko"
                ? "3. 저장 후 메인에 즉시 반영"
                : "3. Reflect updates on main pages after save"}
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
