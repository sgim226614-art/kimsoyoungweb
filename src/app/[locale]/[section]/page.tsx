import { notFound } from "next/navigation";

import {
  PortfolioAboutSection,
  PortfolioCategorySection,
} from "@/components/portfolio-sections";
import { PortfolioShell } from "@/components/portfolio-shell";
import { isLocale, locales } from "@/lib/i18n";
import { getPortfolioContent } from "@/lib/portfolio-content";
import {
  isPortfolioSectionSlug,
  portfolioSectionSlugs,
} from "@/lib/portfolio-sections";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolioSectionSlugs.map((section) => ({ locale, section })),
  );
}

export default async function PortfolioSectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale: rawLocale, section: rawSection } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const section = rawSection.toLowerCase();

  if (!isPortfolioSectionSlug(section)) {
    notFound();
  }

  const content = getPortfolioContent(rawLocale);

  if (section === "about") {
    return (
      <PortfolioShell locale={rawLocale} content={content} activeSlug="about">
        <PortfolioAboutSection content={content} />
      </PortfolioShell>
    );
  }

  const category = content.categories.find((item) => item.id === section);

  if (!category) {
    notFound();
  }

  return (
    <PortfolioShell locale={rawLocale} content={content} activeSlug={section}>
      <PortfolioCategorySection category={category} locale={rawLocale} />
    </PortfolioShell>
  );
}
