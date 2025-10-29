import { NextRequest, NextResponse } from "next/server"
import { readContent, writeContent } from "@/lib/content"

function unauthorized(req: NextRequest) {
  const url = new URL("/login", req.url)
  return NextResponse.redirect(url, { status: 302 })
}

function isAuthed(req: NextRequest): boolean {
  const c = req.cookies.get("admin_auth")
  return !!c && c.value === "1"
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return unauthorized(req)
  const content = await readContent()
  return NextResponse.json(content)
}

export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return unauthorized(req)
  const body = await req.json()
  await writeContent(body)
  return NextResponse.json({ ok: true })
}


