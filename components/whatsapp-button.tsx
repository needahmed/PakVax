"use client"

import Image from "next/image"
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
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label={ariaLabels[language]}
    >
      <Image
        src="/images/contactWhatsapp.png"
        alt={ariaLabels[language]}
        width={80}
        height={80}
        className="w-full h-full object-contain rounded-full"
      />
    </button>
  )
}



