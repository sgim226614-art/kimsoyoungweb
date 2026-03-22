"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";

function swapLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (segments[0] === "ko" || segments[0] === "en") {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function LocaleSwitch({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "ko" ? "en" : "ko";
  const href = swapLocale(pathname, targetLocale);
  const label = locale === "ko" ? "EN" : "KO";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
