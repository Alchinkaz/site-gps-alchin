import { Card, CardContent } from "@/components/ui/card"
import { Satellite, Fuel, Shield, BarChart3, Clock, Wrench } from "lucide-react"

const services = [
  {
    icon: Satellite,
    title: "Установка GPS-трекеров",
    description: "Профессиональная установка современных GPS-устройств с гарантией качества и скрытым монтажом",
  },
  {
    icon: BarChart3,
    title: "Настройка системы мониторинга",
    description: "Полная настройка программного обеспечения для отслеживания транспорта в режиме реального времени",
  },
  {
    icon: Fuel,
    title: "Контроль расхода топлива",
    description: "Установка датчиков уровня топлива и настройка системы контроля расхода ГСМ",
  },
  {
    icon: Shield,
    title: "Системы безопасности",
    description: "Интеграция с охранными системами, блокировка двигателя и защита от угона",
  },
  {
    icon: Clock,
    title: "Контроль рабочего времени",
    description: "Учет рабочего времени водителей, контроль соблюдения графика и маршрутов",
  },
  {
    icon: Wrench,
    title: "Техническое обслуживание",
    description: "Регулярное обслуживание оборудования, обновление ПО и круглосуточная поддержка",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Наши услуги</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Комплексные решения для мониторинга и контроля автотранспорта любого масштаба
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
