"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Оставьте заявку, и наш специалист свяжется с вами для бесплатной консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашей задаче..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Телефон</h3>
                <a href="tel:+77760009505" className="text-muted-foreground hover:text-accent transition-colors block">
                  +7 (776) 000-95-05 (Чингис)
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">ВКонтакте</h3>
                <a
                  href="https://vk.com/tsuriev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  @tsuriev
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <p className="text-muted-foreground">info@gps-monitoring.ru</p>
                <p className="text-muted-foreground">support@gps-monitoring.ru</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 456</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                <p className="text-sm text-accent mt-1">Техподдержка: 24/7</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
              <img
                src="/office-location-map-with-pin-marker.jpg"
                alt="Карта офиса"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
