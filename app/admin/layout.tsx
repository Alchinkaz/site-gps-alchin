"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, ListChecks, Building2, Phone, FileText, LogOut, User } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const items = [
    { href: "/admin/home", label: "Главная", icon: Home },
    { href: "/admin/features", label: "Преимущества", icon: ListChecks },
    { href: "/admin/about", label: "О компании", icon: Building2 },
    { href: "/admin/contacts", label: "Контакты", icon: Phone },
    { href: "/admin/texts", label: "Тексты", icon: FileText },
  ] as const

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div>
          {children}
        </div>
        <aside className="bg-white border rounded-xl p-4 sticky top-20 h-max shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">Админ панель</div>
          <nav className="flex flex-col gap-2">
            {items.map(({ href, label, icon: Icon }) => {
              const active = pathname.startsWith(href)
              return (
                <Link key={href} href={href} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors border ${active ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700"}`}>
                  <Icon className="h-4 w-4" />{label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-6 pt-4 border-t">
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Аккаунт</div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">admin</div>
                  <div className="text-xs text-zinc-500">Администратор</div>
                </div>
              </div>
              <a href="/api/logout" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm border bg-white hover:bg-zinc-50 text-zinc-700">
                <LogOut className="h-4 w-4" /> Выйти
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}


