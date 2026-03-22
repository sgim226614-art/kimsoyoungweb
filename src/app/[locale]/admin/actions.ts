"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ADMIN_COOKIE } from "@/lib/auth";
import { isLocale } from "@/lib/i18n";

const defaultAdminId = "admin";
const defaultAdminPassword = "changeme123!";

export async function loginAction(formData: FormData) {
  const localeValue = formData.get("locale");
  const id = formData.get("id");
  const password = formData.get("password");

  const locale =
    typeof localeValue === "string" && isLocale(localeValue) ? localeValue : "ko";
  const adminId = process.env.ADMIN_LOGIN_ID ?? defaultAdminId;
  const adminPassword = process.env.ADMIN_LOGIN_PASSWORD ?? defaultAdminPassword;

  if (id !== adminId || password !== adminPassword) {
    redirect(`/${locale}/admin/login?error=invalid`);
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect(`/${locale}/admin`);
}

export async function logoutAction(formData: FormData) {
  const localeValue = formData.get("locale");
  const locale =
    typeof localeValue === "string" && isLocale(localeValue) ? localeValue : "ko";
  const cookieStore = await cookies();

  cookieStore.delete(ADMIN_COOKIE);
  redirect(`/${locale}/admin/login`);
}
