import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "lb_admin_session";
const SESSION_PAYLOAD = "lais-admin-ok";

function getSecret() {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "dev-secret-change-me";
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "lais-admin";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken() {
  return sign(SESSION_PAYLOAD);
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const expected = createSessionToken();
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function isAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function sessionCookieOptions(token: string) {
  return {
    name: ADMIN_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}
