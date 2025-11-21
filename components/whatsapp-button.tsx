"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WhatsAppButton() {
  const { language } = useLanguage()

  const messages = {
    en: "I want to learn more about childhood vaccination",
    ur: "میں بچوں کی ویکسینیشن کے بارے میں مزید جاننا چاہتا/چاہتی ہوں",
  }

  const ariaLabels = {
    en: "Contact us on WhatsApp",
    ur: "واٹس ایپ پر ہم سے رابطہ کریں",
  }

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "923001234567"
    const message = encodeURIComponent(messages[language])
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground z-50 hover:scale-110 transition-transform"
      aria-label={ariaLabels[language]}
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
    </Button>
  )
}
