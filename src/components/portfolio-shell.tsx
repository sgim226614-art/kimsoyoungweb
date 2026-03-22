import Link from "next/link";

import { LocaleSwitch } from "@/components/locale-switch";
import type { Locale } from "@/lib/i18n";
import type { PortfolioContent } from "@/lib/portfolio-content";
import {
  getPortfolioHref,
  type PortfolioNavSlug,
} from "@/lib/portfolio-sections";

type PortfolioShellProps = {
  locale: Locale;
  content: PortfolioContent;
  activeSlug: PortfolioNavSlug;
  children: React.ReactNode;
};

export function PortfolioShell({
  locale,
  content,
  activeSlug,
  children,
}: PortfolioShellProps) {
  const menuItems: { slug: PortfolioNavSlug; label: string }[] = [
    { slug: "main", label: content.navMain },
    { slug: "about", label: content.navAbout },
    ...content.categories.map((category) => ({
      slug: category.id as PortfolioNavSlug,
      label: category.menu,
    })),
  ];

  return (
    <div className="portfolio-noise relative isolate min-h-screen bg-[#020202] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/88 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.18em] sm:text-xs">
            {menuItems.map((item) => {
              const isActive = item.slug === activeSlug;

              return (
                <Link
                  key={item.slug}
                  href={getPortfolioHref(locale, item.slug)}
                  className={
                    isActive
                      ? "text-white"
                      : "text-white/72 transition hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LocaleSwitch
            locale={locale}
            className="rounded-full border border-white/35 px-3 py-1 text-xs text-white/80 transition hover:border-white hover:text-white"
          />
        </div>
      </header>

      <main className="pb-24">{children}</main>
    </div>
  );
}
