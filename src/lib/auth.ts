import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ks_portfolio_admin_session";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === "authenticated";
}
