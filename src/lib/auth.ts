import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ks_portfolio_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function getAuthSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

function signPayload(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function safeCompare(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  if (left.length !== right.length) {
    return false;
  }

  return timingSafeEqual(left, right);
}

export function isAuthConfigReady() {
  return Boolean(
    process.env.ADMIN_LOGIN_ID &&
      process.env.ADMIN_LOGIN_PASSWORD &&
      process.env.ADMIN_SESSION_SECRET,
  );
}

export function createAdminSessionToken() {
  const secret = getAuthSecret();

  if (!secret) {
    return null;
  }

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `admin:${expiresAt}`;
  const signature = signPayload(payload, secret);

  return `${payload}.${signature}`;
}

function verifyAdminSessionToken(token: string) {
  const secret = getAuthSecret();

  if (!secret) {
    return false;
  }

  const lastDot = token.lastIndexOf(".");

  if (lastDot <= 0) {
    return false;
  }

  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  const expected = signPayload(payload, secret);

  if (!safeCompare(signature, expected)) {
    return false;
  }

  const [scope, expiresAtRaw] = payload.split(":");
  const expiresAt = Number(expiresAtRaw);

  if (scope !== "admin" || Number.isNaN(expiresAt)) {
    return false;
  }

  return Math.floor(Date.now() / 1000) < expiresAt;
}

export async function setAdminSessionCookie() {
  const token = createAdminSessionToken();

  if (!token) {
    return false;
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });

  return true;
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!token) {
    return false;
  }

  return verifyAdminSessionToken(token);
}
