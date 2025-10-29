"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Navigation } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#how-we-work", label: "Как мы работаем" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <Navigation className="h-6 w-6 text-accent" />
            <span className="text-foreground">GPS Мониторинг</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Получить консультацию</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="/admin">Личный кабинет</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Получить консультацию
                </a>
              </Button>
              <Button asChild className="w-full" variant="outline">
                <a href="/admin" onClick={() => setIsOpen(false)}>
                  Личный кабинет
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
