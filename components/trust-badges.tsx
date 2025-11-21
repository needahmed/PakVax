"use client"

import { Card } from "@/components/ui/card"
import { Award, Heart, Shield, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TrustBadges() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Trusted by Experts",
      subtitle: "Vaccines are endorsed by leading health organizations and medical professionals",
      endorsements: [
        {
          icon: Award,
          title: "WHO Approved",
          description: "Vaccines recommended by World Health Organization",
        },
        {
          icon: Heart,
          title: "Pediatrician Recommended",
          description: "Trusted by doctors worldwide for child health",
        },
        {
          icon: Shield,
          title: "Rigorously Tested",
          description: "Extensive safety trials before approval",
        },
        {
          icon: Users,
          title: "Billions Protected",
          description: "Used safely by families around the world",
        },
      ],
    },
    ur: {
      title: "ماہرین کی جانب سے قابلِ اعتماد",
      subtitle: "ویکسین معروف صحت کی تنظیموں اور طبی پیشہ ور افراد کی جانب سے منظور شدہ ہیں",
      endorsements: [
        {
          icon: Award,
          title: "ڈبلیو ایچ او منظور شدہ",
          description: "عالمی ادارہ صحت کی جانب سے تجویز کردہ ویکسین",
        },
        {
          icon: Heart,
          title: "ماہرِ اطفال کی تجویز کردہ",
          description: "بچوں کی صحت کے لیے دنیا بھر کے ڈاکٹروں کی جانب سے قابلِ اعتماد",
        },
        {
          icon: Shield,
          title: "سخت جانچ پڑتال",
          description: "منظوری سے پہلے وسیع حفاظتی آزمائشیں",
        },
        {
          icon: Users,
          title: "اربوں کو تحفظ",
          description: "دنیا بھر کے خاندانوں کی جانب سے محفوظ طریقے سے استعمال",
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.endorsements.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="p-8 text-center space-y-4 border-2 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
