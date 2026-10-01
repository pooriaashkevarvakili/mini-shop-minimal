import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;
  const tokenType = request.cookies.get("token_type")?.value;
  const expireAccess = request.cookies.get("expire_access")?.value;
  const expireRefresh = request.cookies.get("expire_refresh")?.value;

  console.log("Middleware cookies:", {
    accessToken: !!accessToken,
    refreshToken: !!refreshToken,
    tokenType,
    expireAccess,
    expireRefresh,
  });

  const isAuthenticated =
    !!accessToken &&
    !!refreshToken &&
    !!tokenType &&
    !!expireAccess &&
    !!expireRefresh;

  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.url);

    // Optional: remember where user wanted to go
    loginUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/account/:path*",
  ],
};