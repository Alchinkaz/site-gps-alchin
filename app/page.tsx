import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
