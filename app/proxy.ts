import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken =
    request.cookies.get("accessToken")?.value;

  const expireAccess =
    request.cookies.get("expire_access")?.value;

  const expireRefresh =
    request.cookies.get("expire_refresh")?.value;

  const tokenType =
    request.cookies.get("token_type")?.value;

  const refreshToken =
    request.cookies.get("refresh_token")?.value;

  console.log("Middleware cookies:", {
    accessToken: !!accessToken,
    refreshToken: !!refreshToken,
    tokenType,
    expireAccess,
    expireRefresh,
  });

  if (!accessToken) {
    return NextResponse.redirect(
      new URL("/signup", request.url)
    );
  }

  if (!refreshToken) {
    return NextResponse.redirect(
      new URL("/signup", request.url)
    );
  }

  if (!tokenType) {
    return NextResponse.redirect(
      new URL("/signup", request.url)
    );
  }

  if (!expireAccess) {
    return NextResponse.redirect(
      new URL("/signup", request.url)
    );
  }

  if (!expireRefresh) {
    return NextResponse.redirect(
      new URL("/signup", request.url)
    );
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