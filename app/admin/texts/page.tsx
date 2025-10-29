"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Content = import("@/lib/content").SiteContent

export default function AdminTextsPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/admin/content").then((r) => r.json()).then(setContent)
  }, [])

  const updateTexts = (arr: NonNullable<Content["customTexts"]>) => {
    if (!content) return
    setContent({ ...content, customTexts: arr })
  }

  const save = async () => {
    if (!content) return
    setSaving(true)
    await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
    setSaving(false)
  }

  if (!content) return <div className="text-muted-foreground">Загрузка...</div>

  const texts = content.customTexts || []

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Произвольные тексты</h1>
        <Button onClick={save} disabled={saving}>{saving ? "Сохранение..." : "Сохранить"}</Button>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
        {texts.map((t, idx) => (
          <div key={t.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => {
                if (idx === 0) return
                const arr = [...texts]
                ;[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
                updateTexts(arr)
              }}>↑</Button>
              <Button variant="outline" size="sm" onClick={() => {
                if (idx === texts.length - 1) return
                const arr = [...texts]
                ;[arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]]
                updateTexts(arr)
              }}>↓</Button>
              <Button variant="destructive" size="sm" onClick={() => {
                const arr = texts.filter((_, i) => i !== idx)
                updateTexts(arr)
              }}>Удалить</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Заголовок</label>
                <Input value={t.title} onChange={(e) => {
                  const arr = [...texts]
                  arr[idx] = { ...t, title: e.target.value }
                  updateTexts(arr)
                }} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Текст</label>
                <Textarea value={t.text} onChange={(e) => {
                  const arr = [...texts]
                  arr[idx] = { ...t, text: e.target.value }
                  updateTexts(arr)
                }} />
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={() => {
          const id = `text_${Date.now()}`
          updateTexts([ ...texts, { id, title: "Новый заголовок", text: "Новый текст" } ])
        }}>Добавить текст</Button>
      </div>
    </div>
  )
}


