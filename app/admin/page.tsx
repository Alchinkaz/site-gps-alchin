import { Button } from "@/components/ui/button"

export default function AdminPage() {
  return (
    <section className="min-h-screen pt-20 container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Админ-панель</h1>
        <Button asChild variant="outline">
          <a href="/api/logout">Выйти</a>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Сводка</h2>
          <p className="text-muted-foreground">Здесь появится контент админ-панели.</p>
        </div>
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Действия</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Управление контентом</li>
            <li>Настройки</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


