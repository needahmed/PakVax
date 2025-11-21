"use client"

import { Button } from "@/components/ui/button"
import { Shield, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { language } = useLanguage()

  const translations = {
    en: {
      badge: "Safe. Effective. Essential.",
      title: "Protect Their Future Today",
      description: "Every child deserves protection from preventable diseases. Learn how vaccines save lives and build immunity.",
      learnButton: "Learn About Vaccines",
      scheduleButton: "View Schedule",
      protectionRate: "Protection Rate",
      altText: "Happy Pakistani family with children",
    },
    ur: {
      badge: "محفوظ۔ مؤثر۔ ضروری۔",
      title: "آج ہی ان کا مستقبل محفوظ بنائیں",
      description: "ہر بچہ قابلِ علاج بیماریوں سے تحفظ کا مستحق ہے۔ جانیں کہ ویکسین کیسے زندگیاں بچاتی ہیں اور قوتِ مدافعت پیدا کرتی ہیں۔",
      learnButton: "ویکسین کے بارے میں جانیں",
      scheduleButton: "شیڈول دیکھیں",
      protectionRate: "تحفظ کی شرح",
      altText: "خوش پاکستانی خاندان بچوں کے ساتھ",
    },
  }

  const t = translations[language]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-3 rounded-full text-base font-medium">
              <Shield className="w-5 h-5" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-balance">
              {t.title}
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed text-pretty">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-xl px-10 py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl"
              >
                <Heart className={`w-6 h-6 ${language === "ur" ? "ml-2" : "mr-2"}`} />
                {t.learnButton}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-xl px-10 py-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                {t.scheduleButton}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/unnamed.jpg"
                alt={t.altText}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">95%</p>
              <p className="text-base">{t.protectionRate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
