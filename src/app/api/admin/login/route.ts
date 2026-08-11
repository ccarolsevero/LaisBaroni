import { NextResponse } from "next/server";
import {
  createSessionToken,
  getAdminPassword,
  sessionCookieOptions,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  if (!password || password !== getAdminPassword()) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const token = createSessionToken();
  const response = NextResponse.json({ ok: true });
  const options = sessionCookieOptions(token);
  response.cookies.set(options.name, options.value, {
    httpOnly: options.httpOnly,
    sameSite: options.sameSite,
    secure: options.secure,
    path: options.path,
    maxAge: options.maxAge,
  });
  return response;
}
