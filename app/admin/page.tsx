"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Content = import("@/lib/content").SiteContent

export default function AdminPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)
  const sections = useMemo(() => ([
    { id: "hero", label: "Главная" },
    { id: "features", label: "Преимущества" },
    { id: "about", label: "О компании" },
    { id: "contacts", label: "Контакты и реквизиты" },
    { id: "texts", label: "Тексты" },
  ]), [])
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then(setContent)
      .catch(() => {})
  }, [])

  const update = <K extends keyof Content>(key: K, value: Content[K]) => {
    if (!content) return
    setContent({ ...content, [key]: value })
  }

  const save = async () => {
    if (!content) return
    setSaving(true)
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
    setSaving(false)
  }

  if (!content) {
    return (
      <section className="min-h-screen pt-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Админ-панель</h1>
          <Button asChild variant="outline"><a href="/api/logout">Выйти</a></Button>
        </div>
        <p className="text-muted-foreground">Загрузка...</p>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-20 container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Админ-панель</h1>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={save} disabled={saving}>{saving ? "Сохранение..." : "Сохранить"}</Button>
          <Button asChild variant="outline"><a href="/api/logout">Выйти</a></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="md:sticky md:top-20 h-max border rounded-xl p-4">
          <div className="font-semibold mb-3">Разделы</div>
          <div className="flex md:flex-col gap-2">
            {sections.map((s) => (
              <Button key={s.id} variant="outline" size="sm" onClick={() => refs.current[s.id]?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                {s.label}
              </Button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="grid gap-6">
        {/* Главная */}
        <div ref={(el) => (refs.current["hero"] = el)} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Главная страница</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Заголовок</label>
              <Input value={content.hero.headline} onChange={(e) => update("hero", { ...content.hero, headline: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Адрес офиса</label>
              <Input value={content.hero.officeAddress} onChange={(e) => update("hero", { ...content.hero, officeAddress: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Подзаголовок</label>
              <Textarea value={content.hero.subheadline} onChange={(e) => update("hero", { ...content.hero, subheadline: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Изображение (ссылка)</label>
              <Input value={content.hero.image} onChange={(e) => update("hero", { ...content.hero, image: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Список преимуществ (features) */}
        <div ref={(el) => (refs.current["features"] = el)} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Список преимуществ</h2>
          <div className="space-y-3">
            {content.features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Input value={item} onChange={(e) => {
                  const arr = [...content.features]
                  arr[idx] = e.target.value
                  update("features", arr)
                }} />
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => {
                    if (idx === 0) return
                    const arr = [...content.features]
                    ;[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
                    update("features", arr)
                  }}>↑</Button>
                  <Button variant="outline" onClick={() => {
                    if (idx === content.features.length - 1) return
                    const arr = [...content.features]
                    ;[arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]]
                    update("features", arr)
                  }}>↓</Button>
                  <Button variant="destructive" onClick={() => {
                  const arr = content.features.filter((_, i) => i !== idx)
                  update("features", arr)
                }}>Удалить</Button>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={() => update("features", [...content.features, "Новый пункт"]) }>Добавить пункт</Button>
          </div>
        </div>

        {/* О компании */}
        <div ref={(el) => (refs.current["about"] = el)} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Секция о компании</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Изображение (ссылка)</label>
              <Input value={content.about?.imageUrl || ""} onChange={(e) => update("about", { ...(content.about || { title: "", description: "", imageUrl: "" }), imageUrl: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Заголовок</label>
              <Input value={content.about?.title || ""} onChange={(e) => update("about", { ...(content.about || { title: "", description: "", imageUrl: "" }), title: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Описание</label>
              <Textarea value={content.about?.description || ""} onChange={(e) => update("about", { ...(content.about || { title: "", description: "", imageUrl: "" }), description: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Контакты и реквизиты */}
        <div ref={(el) => (refs.current["contacts"] = el)} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Контакты и реквизиты</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <Input value={content.contact.phone} onChange={(e) => update("contact", { ...content.contact, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input value={content.contact.email} onChange={(e) => update("contact", { ...content.contact, email: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Адрес</label>
              <Input value={content.contact.address} onChange={(e) => update("contact", { ...content.contact, address: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instagram</label>
              <Input value={content.contact.instagram} onChange={(e) => update("contact", { ...content.contact, instagram: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Руководитель</label>
              <Input value={content.contact.director} onChange={(e) => update("contact", { ...content.contact, director: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">IBAN</label>
              <Input value={content.contact.requisites.iban} onChange={(e) => update("contact", { ...content.contact, requisites: { ...content.contact.requisites, iban: e.target.value } })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Валюта</label>
              <Input value={content.contact.requisites.currency} onChange={(e) => update("contact", { ...content.contact, requisites: { ...content.contact.requisites, currency: e.target.value } })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">КБе</label>
              <Input value={content.contact.requisites.kbe} onChange={(e) => update("contact", { ...content.contact, requisites: { ...content.contact.requisites, kbe: e.target.value } })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">БИК</label>
              <Input value={content.contact.requisites.bik} onChange={(e) => update("contact", { ...content.contact, requisites: { ...content.contact.requisites, bik: e.target.value } })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Наименование банка</label>
              <Input value={content.contact.requisites.bankName} onChange={(e) => update("contact", { ...content.contact, requisites: { ...content.contact.requisites, bankName: e.target.value } })} />
            </div>
          </div>
        </div>

        {/* Произвольные тексты */}
        <div ref={(el) => (refs.current["texts"] = el)} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Произвольные тексты</h2>
          <div className="space-y-4">
            {(content.customTexts || []).map((t, idx) => (
              <div key={t.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm" onClick={() => {
                    if (idx === 0) return
                    const arr = [...(content.customTexts || [])]
                    ;[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
                    update("customTexts", arr as any)
                  }}>↑</Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    if (!content.customTexts || idx === content.customTexts.length - 1) return
                    const arr = [...content.customTexts]
                    ;[arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]]
                    update("customTexts", arr as any)
                  }}>↓</Button>
                  <Button variant="destructive" size="sm" onClick={() => {
                    const arr = (content.customTexts || []).filter((_, i) => i !== idx)
                    update("customTexts", arr as any)
                  }}>Удалить</Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Заголовок</label>
                    <Input value={t.title} onChange={(e) => {
                      const arr = [...(content.customTexts || [])]
                      arr[idx] = { ...t, title: e.target.value }
                      update("customTexts", arr as any)
                    }} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Текст</label>
                    <Textarea value={t.text} onChange={(e) => {
                      const arr = [...(content.customTexts || [])]
                      arr[idx] = { ...t, text: e.target.value }
                      update("customTexts", arr as any)
                    }} />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={() => {
              const id = `text_${Date.now()}`
              const arr = [...(content.customTexts || [])]
              arr.push({ id, title: "Новый заголовок", text: "Новый текст" })
              update("customTexts", arr as any)
            }}>Добавить текст</Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}


