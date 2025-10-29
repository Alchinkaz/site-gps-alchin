import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", req.url), { status: 302 })
  res.cookies.set("admin_auth", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 0,
  })
  return res
}


