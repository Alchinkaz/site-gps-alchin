"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Content = import("@/lib/content").SiteContent

export default function AdminAboutPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/admin/content").then((r) => r.json()).then(setContent)
  }, [])

  const update = (value: NonNullable<Content["about"]>) => {
    if (!content) return
    setContent({ ...content, about: value })
  }

  const save = async () => {
    if (!content) return
    setSaving(true)
    await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
    setSaving(false)
  }

  if (!content) return <div className="text-muted-foreground">Загрузка...</div>

  const about = content.about || { imageUrl: "", title: "", description: "" }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">О компании</h1>
        <Button onClick={save} disabled={saving}>{saving ? "Сохранение..." : "Сохранить"}</Button>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow-sm grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Изображение (ссылка)</label>
          <Input value={about.imageUrl} onChange={(e) => update({ ...about, imageUrl: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Заголовок</label>
          <Input value={about.title} onChange={(e) => update({ ...about, title: e.target.value })} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Описание</label>
          <Textarea value={about.description} onChange={(e) => update({ ...about, description: e.target.value })} />
        </div>
      </div>
    </div>
  )
}


