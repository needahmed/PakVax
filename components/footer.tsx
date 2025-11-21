"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { language } = useLanguage()

  const translations = {
    en: {
      quickLinks: "Quick Links",
      resources: "Resources",
      getHelp: "Get Help",
      aboutVaccines: "About Vaccines",
      vaccinationSchedule: "Vaccination Schedule",
      findClinic: "Find a Clinic",
      faqs: "FAQs",
      downloadGuides: "Download Guides",
      healthTips: "Health Tips",
      contactSupport: "Contact Support",
      emergencyInfo: "Emergency Info",
      helpText: "Have questions about vaccinations? Our team is here to help you protect your children.",
      helpline: "Helpline: 0800-VACCINE",
      copyright: "© 2025 Vaccination Awareness Campaign. Protecting children, building healthier communities.",
    },
    ur: {
      quickLinks: "فوری لنکس",
      resources: "وسائل",
      getHelp: "مدد حاصل کریں",
      aboutVaccines: "ویکسین کے بارے میں",
      vaccinationSchedule: "ویکسینیشن کا شیڈول",
      findClinic: "کلینک تلاش کریں",
      faqs: "عمومی سوالات",
      downloadGuides: "گائیڈز ڈاؤن لوڈ کریں",
      healthTips: "صحت کے نکات",
      contactSupport: "سپورٹ سے رابطہ کریں",
      emergencyInfo: "ایمرجنسی معلومات",
      helpText: "ویکسینیشن کے بارے میں سوالات ہیں؟ ہماری ٹیم آپ کے بچوں کو تحفظ فراہم کرنے میں مدد کے لیے یہاں ہے۔",
      helpline: "ہیلپ لائن: 0800-VACCINE",
      copyright: "© 2025 ویکسینیشن بیداری مہم۔ بچوں کو تحفظ فراہم کرنا، صحت مند معاشروں کی تعمیر۔",
    },
  }

  const t = translations[language]

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-card-foreground">{t.quickLinks}</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.aboutVaccines}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.vaccinationSchedule}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.findClinic}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.faqs}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-card-foreground">{t.resources}</h3>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.downloadGuides}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.healthTips}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.contactSupport}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.emergencyInfo}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-card-foreground">{t.getHelp}</h3>
            <p className="text-base text-muted-foreground">
              {t.helpText}
            </p>
            <p className="text-lg font-semibold text-primary">{t.helpline}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-base text-muted-foreground">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
