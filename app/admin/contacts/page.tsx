"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Content = import("@/lib/content").SiteContent

export default function AdminContactsPage() {
  const [content, setContent] = useState<Content | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/admin/content").then((r) => r.json()).then(setContent)
  }, [])

  const update = (value: Content["contact"]) => {
    if (!content) return
    setContent({ ...content, contact: value })
  }

  const save = async () => {
    if (!content) return
    setSaving(true)
    await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
    setSaving(false)
  }

  if (!content) return <div className="text-muted-foreground">Загрузка...</div>

  const c = content.contact

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Контакты и реквизиты</h1>
        <Button onClick={save} disabled={saving}>{saving ? "Сохранение..." : "Сохранить"}</Button>
      </div>
      <div className="bg-white border rounded-xl p-6 shadow-sm grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Телефон</label>
          <Input value={c.phone} onChange={(e) => update({ ...c, phone: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input value={c.email} onChange={(e) => update({ ...c, email: e.target.value })} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Адрес</label>
          <Input value={c.address} onChange={(e) => update({ ...c, address: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Instagram</label>
          <Input value={c.instagram} onChange={(e) => update({ ...c, instagram: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Руководитель</label>
          <Input value={c.director} onChange={(e) => update({ ...c, director: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">IBAN</label>
          <Input value={c.requisites.iban} onChange={(e) => update({ ...c, requisites: { ...c.requisites, iban: e.target.value } })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Валюта</label>
          <Input value={c.requisites.currency} onChange={(e) => update({ ...c, requisites: { ...c.requisites, currency: e.target.value } })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">КБе</label>
          <Input value={c.requisites.kbe} onChange={(e) => update({ ...c, requisites: { ...c.requisites, kbe: e.target.value } })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">БИК</label>
          <Input value={c.requisites.bik} onChange={(e) => update({ ...c, requisites: { ...c.requisites, bik: e.target.value } })} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Наименование банка</label>
          <Input value={c.requisites.bankName} onChange={(e) => update({ ...c, requisites: { ...c.requisites, bankName: e.target.value } })} />
        </div>
      </div>
    </div>
  )
}


