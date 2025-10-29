"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const preferDark = saved ? saved === "dark" : true
    setIsDark(preferDark)
    document.documentElement.classList.toggle("dark", preferDark)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border bg-card text-card-foreground hover:bg-accent/20 transition-colors relative overflow-hidden"
    >
      <Sun className={`h-4 w-4 absolute transition-transform duration-300 ${isDark ? "-translate-y-6 rotate-90" : "translate-y-0 rotate-0"}`} />
      <Moon className={`h-4 w-4 absolute transition-transform duration-300 ${isDark ? "translate-y-0 rotate-0" : "translate-y-6 -rotate-90"}`} />
      <span className="sr-only">Theme</span>
    </button>
  )
}


