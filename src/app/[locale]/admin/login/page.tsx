import Link from "next/link";
import { notFound } from "next/navigation";

import { loginAction } from "@/app/[locale]/admin/actions";
import { LocaleSwitch } from "@/components/locale-switch";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function AdminLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  const { error } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const helperText =
    locale === "ko"
      ? "기본 개발 계정은 admin / changeme123! 입니다."
      : "The default development account is admin / changeme123!.";

  return (
    <main className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-12">
      <div className="animate-rise grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/60 bg-white/75 shadow-[0_28px_80px_rgba(70,40,20,0.14)] backdrop-blur lg:grid-cols-[0.95fr_1.05fr]">
        <section className="bg-[linear-gradient(145deg,#2e1a11_0%,#8b5d43_60%,#dcb89e_100%)] p-8 text-[#fff8f3] sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            Admin
          </p>
          <h1 className="mt-5 font-display text-5xl leading-none">
            {dict.admin.loginTitle}
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-white/80">
            {dict.admin.loginDescription}
          </p>
          <div className="mt-12 rounded-[24px] bg-white/12 p-5 text-sm leading-7 text-white/82 backdrop-blur">
            {dict.admin.hint}
            <br />
            {helperText}
          </div>
        </section>

        <section className="p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="text-sm text-[#8e6248] underline">
              {dict.admin.backMain}
            </Link>
            <LocaleSwitch
              locale={locale}
              className="rounded-full border border-[#d7c1b1] px-4 py-2 text-sm text-[#724c39]"
            />
          </div>

          <form action={loginAction} className="mt-16 space-y-5">
            <input type="hidden" name="locale" value={locale} />

            <div>
              <label className="mb-2 block text-sm font-medium text-[#6d4936]">
                {dict.admin.idLabel}
              </label>
              <input
                name="id"
                type="text"
                required
                className="w-full rounded-2xl border border-[#e5d2c4] bg-[#fffaf6] px-5 py-4 outline-none transition focus:border-[#9a6a4d]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#6d4936]">
                {dict.admin.passwordLabel}
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full rounded-2xl border border-[#e5d2c4] bg-[#fffaf6] px-5 py-4 outline-none transition focus:border-[#9a6a4d]"
              />
            </div>

            {error === "invalid" ? (
              <p className="text-sm text-[#b24531]">
                {locale === "ko"
                  ? "아이디 또는 비밀번호가 맞지 않습니다."
                  : "The ID or password is incorrect."}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-full bg-[#2a170f] px-6 py-4 text-sm font-semibold text-[#fff8f2] transition hover:bg-[#4a2c1f]"
            >
              {dict.admin.submit}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
