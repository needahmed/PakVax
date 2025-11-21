"use client"

import { Card } from "@/components/ui/card"
import { Baby, Calendar, Syringe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function VaccinationSchedule() {
  const { language } = useLanguage()

  const schedule = [
    {
      age: { en: "Birth", ur: "پیدائش" },
      icon: Baby,
      vaccines: ["BCG", "Hepatitis B", "OPV-0"],
      color: "bg-chart-1",
    },
    {
      age: { en: "6 Weeks", ur: "6 ہفتے" },
      icon: Calendar,
      vaccines: ["Pentavalent-1", "OPV-1", "PCV-1"],
      color: "bg-chart-2",
    },
    {
      age: { en: "10 Weeks", ur: "10 ہفتے" },
      icon: Calendar,
      vaccines: ["Pentavalent-2", "OPV-2", "PCV-2"],
      color: "bg-chart-3",
    },
    {
      age: { en: "14 Weeks", ur: "14 ہفتے" },
      icon: Calendar,
      vaccines: ["Pentavalent-3", "OPV-3", "PCV-3", "IPV"],
      color: "bg-chart-4",
    },
    {
      age: { en: "9 Months", ur: "9 ماہ" },
      icon: Syringe,
      vaccines: ["Measles-1"],
      color: "bg-chart-5",
    },
    {
      age: { en: "15 Months", ur: "15 ماہ" },
      icon: Syringe,
      vaccines: ["Measles-2"],
      color: "bg-chart-1",
    },
  ]

  const translations = {
    en: {
      title: "Vaccination Timeline",
      subtitle: "Follow this schedule to ensure your child receives all necessary vaccines at the right time.",
      step: "Step",
    },
    ur: {
      title: "ویکسینیشن کا وقت",
      subtitle: "اپنے بچے کو صحیح وقت پر تمام ضروری ویکسین ملنے کو یقینی بنانے کے لیے اس شیڈول پر عمل کریں۔",
      step: "مرحلہ",
    },
  }

  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schedule.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={item.age[language]} className="p-8 relative overflow-hidden border-2 hover:shadow-xl transition-shadow">
                <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-10 rounded-bl-full`} />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{t.step} {index + 1}</p>
                      <h3 className="text-2xl font-bold text-card-foreground">{item.age[language]}</h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {item.vaccines.map((vaccine) => (
                      <div key={vaccine} className="flex items-center gap-2 text-base">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-card-foreground font-medium">{vaccine}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
