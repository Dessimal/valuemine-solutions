// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasVisited = request.cookies.get("hasVisited");

  if (!hasVisited) {
    const response = NextResponse.redirect(new URL("/calculator", request.url));
    response.cookies.set("hasVisited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  return NextResponse.next();
}

// Only apply middleware on root homepage "/"
export const config = {
  matcher: "/",
};
