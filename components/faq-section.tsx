import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько времени занимает установка системы GPS мониторинга?",
    answer:
      "Установка одного GPS-трекера занимает от 1 до 3 часов в зависимости от типа транспорта и комплектации системы. Для автопарка из нескольких машин мы можем организовать параллельную установку.",
  },
  {
    question: "Какое оборудование вы используете?",
    answer:
      "Мы работаем только с сертифицированным оборудованием от ведущих производителей: Teltonika, Galileosky, Arnavi. Все устройства имеют гарантию и соответствуют международным стандартам качества.",
  },
  {
    question: "Можно ли отслеживать транспорт через мобильное приложение?",
    answer:
      "Да, наша система включает мобильные приложения для iOS и Android. Вы сможете отслеживать местоположение транспорта, получать уведомления и просматривать отчеты прямо с вашего смартфона.",
  },
  {
    question: "Какова стоимость обслуживания системы?",
    answer:
      "Стоимость зависит от количества транспортных средств и выбранного тарифа. Базовый тариф начинается от 300 рублей в месяц за одно ТС. Предоставляем скидки при подключении автопарка.",
  },
  {
    question: "Что делать, если оборудование выйдет из строя?",
    answer:
      "Все оборудование имеет гарантию производителя. В случае поломки мы бесплатно заменим устройство в течение гарантийного срока. Также доступна круглосуточная техническая поддержка для решения любых вопросов.",
  },
  {
    question: "Можно ли интегрировать систему с 1С или другим ПО?",
    answer:
      "Да, наша система поддерживает интеграцию с популярными системами учета через API. Мы поможем настроить обмен данными с вашим существующим программным обеспечением.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Частые вопросы</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ответы на самые популярные вопросы о наших услугах и системах мониторинга
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-card-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
