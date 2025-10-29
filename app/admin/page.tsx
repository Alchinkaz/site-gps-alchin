"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Content = import("@/lib/content").SiteContent

export default function AdminPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)

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

      <div className="grid gap-6">
        {/* Главная */}
        <div className="border rounded-xl p-6">
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
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Список преимуществ</h2>
          <div className="space-y-3">
            {content.features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Input value={item} onChange={(e) => {
                  const arr = [...content.features]
                  arr[idx] = e.target.value
                  update("features", arr)
                }} />
                <Button variant="destructive" onClick={() => {
                  const arr = content.features.filter((_, i) => i !== idx)
                  update("features", arr)
                }}>Удалить</Button>
              </div>
            ))}
            <Button variant="outline" onClick={() => update("features", [...content.features, "Новый пункт"]) }>Добавить пункт</Button>
          </div>
        </div>

        {/* О компании */}
        <div className="border rounded-xl p-6">
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
        <div className="border rounded-xl p-6">
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
      </div>
    </section>
  )
}


