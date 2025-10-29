"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Content = import("@/lib/content").SiteContent

export default function AdminFeaturesPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/admin/content").then((r) => r.json()).then(setContent)
  }, [])

  const update = (arr: string[]) => {
    if (!content) return
    setContent({ ...content, features: arr })
  }

  const save = async () => {
    if (!content) return
    setSaving(true)
    await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
    setSaving(false)
  }

  if (!content) return <div className="text-muted-foreground">Загрузка...</div>

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Преимущества</h1>
        <Button onClick={save} disabled={saving}>{saving ? "Сохранение..." : "Сохранить"}</Button>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-3">
        {content.features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Input value={item} onChange={(e) => {
              const arr = [...content.features]
              arr[idx] = e.target.value
              update(arr)
            }} />
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => {
                if (idx === 0) return
                const arr = [...content.features]
                ;[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
                update(arr)
              }}>↑</Button>
              <Button variant="outline" onClick={() => {
                if (idx === content.features.length - 1) return
                const arr = [...content.features]
                ;[arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]]
                update(arr)
              }}>↓</Button>
              <Button variant="destructive" onClick={() => {
                const arr = content.features.filter((_, i) => i !== idx)
                update(arr)
              }}>Удалить</Button>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={() => update([...(content.features || []), "Новый пункт"]) }>Добавить пункт</Button>
      </div>
    </div>
  )
}


