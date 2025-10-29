import { Navigation } from "lucide-react"

export function Footer() {
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
              <li>+77710797970</li>
              <li>info@alchin.kz</li>
              <li>Г.Актау 11микрорайон-27 дом.</li>
              <li className="pt-2 font-semibold">Руководитель</li>
              <li>Цуриев Ченгесхан Джамалайлович</li>
              <li className="pt-2 font-semibold">Реквизиты</li>
              <li>Р/с: KZ9496511F0008314291 KZT</li>
              <li>КБе: 19</li>
              <li>БИК банка: IRTYKZKA</li>
              <li>Банк: Филиал АО ForteBank г.Актау</li>
              <li className="pt-2">Instagram: @alchin.ля</li>
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
