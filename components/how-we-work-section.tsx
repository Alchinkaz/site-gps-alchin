import { Phone, FileCheck, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Консультация",
    description: "Связываетесь с нами, обсуждаем ваши задачи и подбираем оптимальное решение",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Оценка и договор",
    description: "Выезжаем на объект, оцениваем объем работ и заключаем договор на выгодных условиях",
  },
  {
    icon: Settings,
    number: "03",
    title: "Установка и настройка",
    description: "Устанавливаем оборудование, настраиваем систему и проводим обучение персонала",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Запуск и поддержка",
    description: "Запускаем систему в работу и обеспечиваем круглосуточную техническую поддержку",
  },
]

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Как мы работаем</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Простой и прозрачный процесс от первого звонка до полноценной работы системы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex w-16 h-16 rounded-full bg-accent/10 items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-5xl font-bold text-muted/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
