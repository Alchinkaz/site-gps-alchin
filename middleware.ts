import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith("/admin")) {
    const cookie = req.cookies.get("admin_auth")
    if (!cookie || cookie.value !== "1") {
      const loginUrl = new URL("/login", req.url)
      loginUrl.searchParams.set("next", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}


