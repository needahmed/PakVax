import { Hero } from "@/components/hero"
import { WhyVaccinate } from "@/components/why-vaccinate"
import { VaccinationSchedule } from "@/components/vaccination-schedule"
import { MythsAndFacts } from "@/components/myths-and-facts"
import { TrustBadges } from "@/components/trust-badges"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyVaccinate />
      <VaccinationSchedule />
      <MythsAndFacts />
      <TrustBadges />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
