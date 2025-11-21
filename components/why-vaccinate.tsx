"use client"

import { Card } from "@/components/ui/card"
import { Shield, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WhyVaccinate() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Why Vaccination Matters",
      subtitle: "Vaccines are one of the most important tools we have to keep children healthy and safe.",
      reasons: [
        {
          icon: Shield,
          title: "Disease Prevention",
          description:
            "Vaccines protect against serious diseases like measles, polio, and hepatitis that can cause severe illness or death.",
          stat: "99%",
          statLabel: "Effective",
        },
        {
          icon: Users,
          title: "Community Protection",
          description:
            "When enough people are vaccinated, it protects those who cannot be vaccinated, creating herd immunity.",
          stat: "70%+",
          statLabel: "Coverage Needed",
        },
        {
          icon: TrendingUp,
          title: "Proven Success",
          description: "Vaccines have eliminated smallpox and nearly eliminated polio worldwide, saving millions of lives.",
          stat: "20M",
          statLabel: "Lives Saved Yearly",
        },
      ],
    },
    ur: {
      title: "ویکسینیشن کیوں اہم ہے",
      subtitle: "ویکسین بچوں کو صحت مند اور محفوظ رکھنے کے لیے ہمارے پاس موجود سب سے اہم ذرائع میں سے ایک ہیں۔",
      reasons: [
        {
          icon: Shield,
          title: "بیماریوں سے بچاؤ",
          description:
            "ویکسین خسرہ، پولیو، اور ہیپاٹائٹس جیسی سنگین بیماریوں سے تحفظ فراہم کرتی ہیں جو شدید بیماری یا موت کا باعث بن سکتی ہیں۔",
          stat: "99%",
          statLabel: "موثر",
        },
        {
          icon: Users,
          title: "اجتماعی تحفظ",
          description:
            "جب کافی لوگ ویکسین لگواتے ہیں، تو یہ ان لوگوں کو بھی تحفظ فراہم کرتی ہے جو ویکسین نہیں لگوا سکتے، جس سے اجتماعی قوتِ مدافعت پیدا ہوتی ہے۔",
          stat: "70%+",
          statLabel: "ضروری کوریج",
        },
        {
          icon: TrendingUp,
          title: "ثابت شدہ کامیابی",
          description: "ویکسین نے چیچک کو ختم کر دیا ہے اور دنیا بھر میں پولیو کو تقریباً ختم کر دیا ہے، جس سے لاکھوں زندگیاں بچی ہیں۔",
          stat: "20M",
          statLabel: "سالانہ بچائی گئی زندگیاں",
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <Card key={reason.title} className="p-8 hover:shadow-xl transition-shadow border-2">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-card-foreground">{reason.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-4xl font-bold text-primary">{reason.stat}</p>
                    <p className="text-base text-muted-foreground">{reason.statLabel}</p>
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
