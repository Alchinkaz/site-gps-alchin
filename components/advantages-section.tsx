import { CheckCircle2, TrendingUp, Users, Headphones } from "lucide-react"

const advantages = [
  {
    icon: CheckCircle2,
    title: "Проверенное качество",
    description: "Используем только сертифицированное оборудование от ведущих производителей с гарантией",
  },
  {
    icon: TrendingUp,
    title: "Экономия до 30%",
    description: "Снижение расходов на топливо, оптимизация маршрутов и контроль использования транспорта",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Более 5 лет опыта, квалифицированные специалисты и индивидуальный подход к каждому клиенту",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Круглосуточная техническая поддержка, быстрое реагирование на любые вопросы",
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Наши преимущества</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Почему более 500 компаний выбрали наши решения для мониторинга транспорта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <advantage.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
