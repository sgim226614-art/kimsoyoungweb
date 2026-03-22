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
      <header className="sticky top-0 z-30 bg-black/92 backdrop-blur">
        <div className="relative mx-auto flex h-[84px] w-full max-w-7xl items-center px-4 sm:px-8">
          <nav className="absolute left-1/2 flex w-[min(1080px,calc(100%-150px))] -translate-x-1/2 items-center justify-between font-normal text-[18px] leading-none tracking-[-0.012em] md:text-[19px]">
            {menuItems.map((item) => {
              const isActive = item.slug === activeSlug;

              return (
                <Link
                  key={item.slug}
                  href={getPortfolioHref(locale, item.slug)}
                  className={
                    isActive
                      ? "whitespace-nowrap font-medium text-white"
                      : "whitespace-nowrap font-normal text-white/94 transition-colors hover:font-semibold hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LocaleSwitch
            locale={locale}
            className="ml-auto rounded-full border border-white/38 px-3 py-1 text-[12px] font-medium tracking-[0.06em] text-white/88 transition hover:border-white hover:text-white"
          />
        </div>
      </header>

      <main className="pb-24">{children}</main>
    </div>
  );
}
