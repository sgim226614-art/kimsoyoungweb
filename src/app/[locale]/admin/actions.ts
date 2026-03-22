"use server";

import { redirect } from "next/navigation";

import {
  clearAdminSessionCookie,
  isAuthConfigReady,
  setAdminSessionCookie,
} from "@/lib/auth";
import { isLocale } from "@/lib/i18n";

export async function loginAction(formData: FormData) {
  const localeValue = formData.get("locale");
  const id = formData.get("id");
  const password = formData.get("password");

  const locale =
    typeof localeValue === "string" && isLocale(localeValue) ? localeValue : "ko";
  const adminId = process.env.ADMIN_LOGIN_ID;
  const adminPassword = process.env.ADMIN_LOGIN_PASSWORD;

  if (!isAuthConfigReady() || !adminId || !adminPassword) {
    redirect(`/${locale}/admin/login?error=config`);
  }

  if (typeof id !== "string" || typeof password !== "string") {
    redirect(`/${locale}/admin/login?error=invalid`);
  }

  if (id !== adminId || password !== adminPassword) {
    redirect(`/${locale}/admin/login?error=invalid`);
  }

  const isSet = await setAdminSessionCookie();

  if (!isSet) {
    redirect(`/${locale}/admin/login?error=config`);
  }

  redirect(`/${locale}/admin`);
}

export async function logoutAction(formData: FormData) {
  const localeValue = formData.get("locale");
  const locale =
    typeof localeValue === "string" && isLocale(localeValue) ? localeValue : "ko";
  await clearAdminSessionCookie();
  redirect(`/${locale}/admin/login`);
}
