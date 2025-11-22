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
      button1: "Find Vaccination Center",
      button2: "Learn About Vaccines",
      statValue: "95%",
      statLabel: "Protection Rate",
      statSubtext: "Against Polio",
      imageAlt: "Happy Pakistani family with children",
    },
    ur: {
      badge: "محفوظ۔ مؤثر۔ ضروری۔",
      title: "آج ہی ان کا مستقبل محفوظ بنائیں",
      description: "ہر بچہ قابلِ روک تھام بیماریوں سے تحفظ کا مستحق ہے۔ جانیں کہ ویکسین کیسے زندگیاں بچاتی ہیں اور قوتِ مدافعت پیدا کرتی ہیں۔",
      button1: "ویکسینیشن سینٹر تلاش کریں",
      button2: "ویکسین کے بارے میں جانیں",
      statValue: "95%",
      statLabel: "تحفظ کی شرح",
      statSubtext: "پولیو کے خلاف",
      imageAlt: "خوش پاکستانی خاندان بچوں کے ساتھ",
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

            <div className={`flex flex-col sm:flex-row gap-4 ${language === "ur" ? "sm:flex-row-reverse" : ""}`}>
              <Button
                size="lg"
                className="text-xl px-10 py-8 bg-white hover:bg-white/90 text-primary shadow-2xl font-semibold"
              >
                {t.button1}
              </Button>

              <Button
                size="lg"
                className={`text-xl px-10 py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl flex items-center ${language === "ur" ? "flex-row-reverse" : ""}`}
              >
                <Heart className={`w-6 h-6 ${language === "ur" ? "ml-2" : "mr-2"}`} />
                {t.button2}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/unnamed.jpg"
                alt={t.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 ${language === "ur" ? "-left-6" : "-right-6"} bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-xl`}>
              <p className="text-4xl font-bold">{t.statValue}</p>
              <p className="text-base">{t.statLabel}</p>
              <p className="text-sm opacity-90 mt-1">{t.statSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
