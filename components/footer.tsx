import { Navigation } from "lucide-react"
import { readContent } from "@/lib/content"

export async function Footer() {
  const content = await readContent()
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="h-6 w-6" />
              <span className="text-xl font-bold">GPS Мониторинг</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Профессиональные решения для контроля и мониторинга автотранспорта
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Установка GPS-трекеров
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Контроль топлива
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Системы безопасности
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Техподдержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-primary-foreground transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{content.contact.phone}</li>
              <li>{content.contact.email}</li>
              <li>{content.contact.address}</li>
              <li className="pt-2 font-semibold">Руководитель</li>
              <li>{content.contact.director}</li>
              <li className="pt-2 font-semibold">Реквизиты</li>
              <li>Р/с: {content.contact.requisites.iban} {content.contact.requisites.currency}</li>
              <li>КБе: {content.contact.requisites.kbe}</li>
              <li>БИК банка: {content.contact.requisites.bik}</li>
              <li>Банк: {content.contact.requisites.bankName}</li>
              <li className="pt-2">Instagram: {content.contact.instagram}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} GPS Мониторинг. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
