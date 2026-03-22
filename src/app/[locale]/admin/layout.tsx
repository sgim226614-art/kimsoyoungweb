import Link from "next/link";
import { notFound } from "next/navigation";

import { LocaleSwitch } from "@/components/locale-switch";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function AdminLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(138,91,66,0.14),transparent_40%),linear-gradient(180deg,#fff9f3_0%,#f5ebe2_100%)]">
      <header className="border-b border-[#e8d8c9] bg-white/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3">
            <p className="font-display text-2xl text-[#2e1c12]">Admin</p>
            <span className="rounded-full bg-[#f0dfd1] px-3 py-1 text-xs text-[#82573f]">
              {dict.admin.welcome}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/${locale}/admin`}
              className="rounded-full border border-[#d9c3b3] px-4 py-2 text-sm text-[#6e4b38] transition hover:border-[#996748]"
            >
              {dict.admin.dashboard}
            </Link>
            <Link
              href={`/${locale}/admin/content`}
              className="rounded-full border border-[#d9c3b3] px-4 py-2 text-sm text-[#6e4b38] transition hover:border-[#996748]"
            >
              {dict.admin.content}
            </Link>
            <Link
              href={`/${locale}`}
              className="rounded-full border border-[#d9c3b3] px-4 py-2 text-sm text-[#6e4b38] transition hover:border-[#996748]"
            >
              {dict.admin.backMain}
            </Link>
            <LocaleSwitch
              locale={locale}
              className="rounded-full border border-[#d9c3b3] px-4 py-2 text-sm font-medium text-[#6e4b38] transition hover:border-[#996748]"
            />
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
