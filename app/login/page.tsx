"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-xl p-6 md:p-8 bg-card text-card-foreground">
        <h1 className="text-2xl font-bold mb-6 text-center">Вход в админ-панель</h1>
        <form action="/api/login" method="post" onSubmit={() => setSubmitting(true)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">Логин</label>
            <Input id="username" name="username" required placeholder="admin" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">Пароль</label>
            <Input id="password" name="password" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Вход..." : "Войти"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Используются переменные окружения ADMIN_USERNAME и ADMIN_PASSWORD
        </p>
      </div>
    </section>
  )
}


