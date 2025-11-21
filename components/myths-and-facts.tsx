"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { XCircle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function MythsAndFacts() {
  const { language } = useLanguage()

  const mythsAndFacts = {
    en: [
      {
        myth: "Vaccines cause autism",
        fact: "Extensive scientific research has proven there is no link between vaccines and autism. This myth originated from a fraudulent study that was later retracted.",
      },
      {
        myth: "Natural immunity is better than vaccine immunity",
        fact: "While natural immunity can be effective, getting it requires being sick first, which can be dangerous or even deadly. Vaccines provide immunity without the risk of serious illness.",
      },
      {
        myth: "Vaccines contain harmful ingredients",
        fact: "Vaccine ingredients are carefully tested and safe in the amounts used. Many ingredients like water, sugars, and proteins are naturally found in the body.",
      },
      {
        myth: "Too many vaccines overwhelm the immune system",
        fact: "Children's immune systems can handle thousands of antigens at once. Vaccines use only a tiny fraction of the immune system's capacity.",
      },
      {
        myth: "Vaccines are not necessary if diseases are rare",
        fact: "Diseases are rare because of vaccines. If we stop vaccinating, these diseases will return. We've seen this happen when vaccination rates drop.",
      },
    ],
    ur: [
      {
        myth: "ویکسین آٹزم کا باعث بنتی ہیں",
        fact: "وسیع سائنسی تحقیق نے ثابت کیا ہے کہ ویکسین اور آٹزم کے درمیان کوئی تعلق نہیں ہے۔ یہ غلط فہمی ایک جعلی مطالعے سے پیدا ہوئی تھی جسے بعد میں واپس لے لیا گیا تھا۔",
      },
      {
        myth: "قدرتی قوتِ مدافعت ویکسین کی قوتِ مدافعت سے بہتر ہے",
        fact: "اگرچہ قدرتی قوتِ مدافعت مؤثر ہو سکتی ہے، لیکن اسے حاصل کرنے کے لیے پہلے بیمار ہونا ضروری ہے، جو خطرناک یا حتیٰ کہ جان لیوا بھی ہو سکتا ہے۔ ویکسین سنگین بیماری کے خطرے کے بغیر قوتِ مدافعت فراہم کرتی ہیں۔",
      },
      {
        myth: "ویکسین میں نقصان دہ اجزاء شامل ہیں",
        fact: "ویکسین کے اجزاء کو احتیاط سے جانچا جاتا ہے اور استعمال کی جانے والی مقدار میں محفوظ ہیں۔ بہت سے اجزاء جیسے پانی، شکر، اور پروٹین قدرتی طور پر جسم میں پائے جاتے ہیں۔",
      },
      {
        myth: "بہت زیادہ ویکسین قوتِ مدافعت کو بھر دیتی ہیں",
        fact: "بچوں کی قوتِ مدافعت ایک ساتھ ہزاروں اینٹیجنز کو سنبھال سکتی ہے۔ ویکسین قوتِ مدافعت کی صلاحیت کا صرف ایک چھوٹا سا حصہ استعمال کرتی ہیں۔",
      },
      {
        myth: "اگر بیماریاں نایاب ہیں تو ویکسین ضروری نہیں ہیں",
        fact: "بیماریاں ویکسین کی وجہ سے نایاب ہیں۔ اگر ہم ویکسینیشن بند کر دیں، تو یہ بیماریاں واپس آ جائیں گی۔ ہم نے یہ دیکھا ہے جب ویکسینیشن کی شرح کم ہوتی ہے۔",
      },
    ],
  }

  const translations = {
    en: {
      title: "Myths vs. Facts",
      subtitle: "Get the truth about common vaccine misconceptions",
      truth: "The Truth:",
    },
    ur: {
      title: "افسانے بمقابلہ حقائق",
      subtitle: "ویکسین کے بارے میں عام غلط فہمیوں کی سچائی جانیں",
      truth: "سچائی:",
    },
  }

  const t = translations[language]
  const items = mythsAndFacts[language]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              {t.subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-2xl px-8 py-2 bg-card"
              >
                <AccordionTrigger className="hover:no-underline text-left">
                  <div className={`flex items-start gap-4 ${language === "ur" ? "pl-4" : "pr-4"}`}>
                    <XCircle className="w-7 h-7 text-destructive shrink-0 mt-1" />
                    <span className="text-xl md:text-2xl font-semibold text-card-foreground">{item.myth}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className={`flex items-start gap-4 pt-4 ${language === "ur" ? "pr-11" : "pl-11"}`}>
                    <CheckCircle className="w-7 h-7 text-accent shrink-0 mt-1" />
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-accent">{t.truth}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed">{item.fact}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
