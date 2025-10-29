import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Надежный контроль вашего автопарка
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Профессиональные системы GPS мониторинга транспорта
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Установка и настройка современных систем спутникового мониторинга для контроля автотранспорта. Полный
              контроль маршрутов, расхода топлива и безопасности вашего автопарка в режиме реального времени.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#contact">
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <a href="#services">Наши услуги</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Установленных систем</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Техподдержка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">5 лет</div>
                <div className="text-sm text-muted-foreground">На рынке</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden border border-border shadow-2xl">
              <img src="/interactive-gps-tracking-map-with-vehicle-markers-.jpg" alt="GPS мониторинг карта" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Офис компании</div>
                    <div className="text-sm text-muted-foreground">Г.Актау 11микрорайон-27 дом.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
