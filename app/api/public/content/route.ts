import { NextResponse } from "next/server"
import { readContent } from "@/lib/content"

export async function GET() {
  const content = await readContent()
  return NextResponse.json(content)
}


