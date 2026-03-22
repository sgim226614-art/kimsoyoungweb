"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/auth";
import { type HomeContentInput, saveHomeContent } from "@/lib/home-content";
import { isLocale } from "@/lib/i18n";

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: HomeContentInput) {
  if (!payload.heroTitle || payload.heroTitle.length > 120) {
    return false;
  }

  if (!payload.heroDescription || payload.heroDescription.length > 700) {
    return false;
  }

  if (!payload.primaryCta || payload.primaryCta.length > 40) {
    return false;
  }

  if (!payload.secondaryCta || payload.secondaryCta.length > 40) {
    return false;
  }

  if (!payload.aboutTitle || payload.aboutTitle.length > 120) {
    return false;
  }

  if (!payload.aboutBody || payload.aboutBody.length > 700) {
    return false;
  }

  if (!payload.contactTitle || payload.contactTitle.length > 120) {
    return false;
  }

  if (!payload.contactBody || payload.contactBody.length > 700) {
    return false;
  }

  return true;
}

export async function saveHomeContentAction(formData: FormData) {
  const localeValue = formData.get("locale");
  const locale =
    typeof localeValue === "string" && isLocale(localeValue) ? localeValue : "ko";

  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect(`/${locale}/admin/login`);
  }

  const payload: HomeContentInput = {
    heroTitle: readText(formData, "heroTitle"),
    heroDescription: readText(formData, "heroDescription"),
    primaryCta: readText(formData, "heroPrimaryCta"),
    secondaryCta: readText(formData, "heroSecondaryCta"),
    aboutTitle: readText(formData, "aboutTitle"),
    aboutBody: readText(formData, "aboutBody"),
    contactTitle: readText(formData, "contactTitle"),
    contactBody: readText(formData, "contactBody"),
  };

  if (!validatePayload(payload)) {
    redirect(`/${locale}/admin/content?error=validation`);
  }

  const result = await saveHomeContent(locale, payload);

  if (!result.ok) {
    if (result.reason === "config") {
      redirect(`/${locale}/admin/content?error=config`);
    }

    redirect(`/${locale}/admin/content?error=database`);
  }

  revalidatePath(`/${locale}`);
  revalidatePath(`/${locale}/admin/content`);

  redirect(`/${locale}/admin/content?status=saved`);
}
