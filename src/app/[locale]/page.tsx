import { notFound } from "next/navigation";

import {
  PortfolioHeroSection,
  PortfolioMainShowcase,
} from "@/components/portfolio-sections";
import { PortfolioShell } from "@/components/portfolio-shell";
import { isLocale } from "@/lib/i18n";
import { getPortfolioContent } from "@/lib/portfolio-content";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const content = getPortfolioContent(rawLocale);

  return (
    <PortfolioShell locale={rawLocale} content={content} activeSlug="main">
      <PortfolioHeroSection content={content} />
      <PortfolioMainShowcase content={content} locale={rawLocale} />
    </PortfolioShell>
  );
}
