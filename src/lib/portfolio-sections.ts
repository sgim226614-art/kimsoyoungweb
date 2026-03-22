import type { Locale } from "@/lib/i18n";

export const portfolioCategorySlugs = [
  "uiux",
  "ppt",
  "poster",
  "banner",
  "cardnews",
  "etc",
] as const;

export const portfolioSectionSlugs = [
  "about",
  ...portfolioCategorySlugs,
] as const;

export type PortfolioCategorySlug = (typeof portfolioCategorySlugs)[number];
export type PortfolioSectionSlug = (typeof portfolioSectionSlugs)[number];
export type PortfolioNavSlug = "main" | PortfolioSectionSlug;

export function isPortfolioSectionSlug(
  value: string,
): value is PortfolioSectionSlug {
  return (portfolioSectionSlugs as readonly string[]).includes(value);
}

export function getPortfolioHref(locale: Locale, slug: PortfolioNavSlug) {
  if (slug === "main") {
    return `/${locale}`;
  }

  return `/${locale}/${slug}`;
}
