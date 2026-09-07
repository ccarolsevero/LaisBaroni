import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_SAVE_HOST = "lais-baroni-six.vercel.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];
  const pathname = request.nextUrl.pathname;
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

  if (
    pathname.startsWith("/admin") &&
    !isLocal &&
    hostname !== ADMIN_SAVE_HOST
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = ADMIN_SAVE_HOST;
    url.port = "";
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();

  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
