import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "lb_admin_session";
const SESSION_PAYLOAD = "lais-admin-ok";
const FALLBACK_USER = "lais";
const FALLBACK_PASSWORD_SHA256 =
  "8eb3f0f61db9cba60c7dbb7af238abda80d6321165febd38a61f77270449383b";

function getSecret() {
  return (
    process.env.ADMIN_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD?.trim() ||
    FALLBACK_PASSWORD_SHA256
  );
}

export function getAdminUser() {
  return process.env.ADMIN_USER?.trim() || FALLBACK_USER;
}

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function credentialsMatch(user: string, password: string) {
  if (!safeEqual(user, getAdminUser())) return false;
  const envPassword = process.env.ADMIN_PASSWORD?.trim();
  if (envPassword) return safeEqual(password, envPassword);
  return safeEqual(sha256(password), FALLBACK_PASSWORD_SHA256);
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
