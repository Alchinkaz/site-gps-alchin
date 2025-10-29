import { promises as fs } from "fs"
import path from "path"

export type SiteContent = {
  hero: {
    headline: string
    subheadline: string
    officeAddress: string
    image: string
  }
  features: string[]
  customTexts?: { id: string; title: string; text: string }[]
  about?: {
    imageUrl: string
    title: string
    description: string
  }
  contact: {
    phone: string
    email: string
    address: string
    instagram: string
    director: string
    requisites: {
      iban: string
      currency: string
      kbe: string
      bik: string
      bankName: string
    }
  }
}

const CONTENT_FILE = path.join(process.cwd(), "content", "site-content.json")

export async function readContent(): Promise<SiteContent> {
  try {
    const data = await fs.readFile(CONTENT_FILE, "utf8")
    return JSON.parse(data)
  } catch {
    const fallback: SiteContent = {
      hero: {
        headline: "Профессиональные системы GPS мониторинга транспорта",
        subheadline:
          "Установка и настройка современных систем спутникового мониторинга для контроля автотранспорта.",
        officeAddress: "Г.Актау 11микрорайон-27 дом.",
        image: "/interactive-gps-tracking-map-with-vehicle-markers-.jpg",
      },
      features: [
        "Быстрый и надёжный сервис",
        "Поддержка 24/7",
        "Лучшие условия",
      ],
      customTexts: [
        { id: "welcome", title: "Приветствие", text: "Добро пожаловать на наш сайт." },
      ],
      about: {
        imageUrl: "/placeholder.jpg",
        title: "О компании",
        description: "Мы устанавливаем и обслуживаем системы GPS мониторинга.",
      },
      contact: {
        phone: "+77710797970",
        email: "info@alchin.kz",
        address: "Г.Актау 11микрорайон-27 дом.",
        instagram: "@alchin.ля",
        director: "Цуриев Ченгесхан Джамалайлович",
        requisites: {
          iban: "KZ9496511F0008314291",
          currency: "KZT",
          kbe: "19",
          bik: "IRTYKZKA",
          bankName: "Филиал АО ForteBank г.Актау",
        },
      },
    }
    await ensureContentFile(fallback)
    return fallback
  }
}

export async function writeContent(content: SiteContent): Promise<void> {
  await fs.mkdir(path.dirname(CONTENT_FILE), { recursive: true })
  await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), "utf8")
}

async function ensureContentFile(initial: SiteContent) {
  await fs.mkdir(path.dirname(CONTENT_FILE), { recursive: true })
  try {
    await fs.access(CONTENT_FILE)
  } catch {
    await fs.writeFile(CONTENT_FILE, JSON.stringify(initial, null, 2), "utf8")
  }
}


