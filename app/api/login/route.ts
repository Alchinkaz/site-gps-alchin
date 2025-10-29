import { NextRequest, NextResponse } from "next/server"

function getEnv(name: string, fallback: string): string {
  const value = process.env[name]
  return value && value.length > 0 ? value : fallback
}

export async function POST(req: NextRequest) {
  let username = ""
  let password = ""

  const contentType = req.headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    const body = await req.json().catch(() => ({}))
    username = body.username || ""
    password = body.password || ""
  } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const formData = await req.formData()
    username = String(formData.get("username") || "")
    password = String(formData.get("password") || "")
  }

  const expectedUser = getEnv("ADMIN_USERNAME", "admin")
  const expectedPass = getEnv("ADMIN_PASSWORD", "admin123")

  const isValid = username === expectedUser && password === expectedPass
  if (!isValid) {
    const url = new URL("/login", req.url)
    url.searchParams.set("error", "1")
    return NextResponse.redirect(url, { status: 302 })
  }

  const res = NextResponse.redirect(new URL("/admin", req.url), { status: 302 })
  res.cookies.set("admin_auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}


