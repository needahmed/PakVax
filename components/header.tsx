"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    {
      title: language === "en" ? "About Vaccines" : "ویکسین کے بارے میں",
      items: [
        { label: language === "en" ? "Why Vaccinate" : "ویکسین کیوں", href: "#why" },
        { label: language === "en" ? "How Vaccines Work" : "ویکسین کیسے کام کرتی ہے", href: "#how-work" },
        { label: language === "en" ? "Vaccine Safety" : "ویکسین کی حفاظت", href: "#safety" },
 
      ],
    },
    {
      title: language === "en" ? "Schedules" : "شیڈول",
      items: [
        { label: language === "en" ? "Birth to 2 Years" : "پیدائش سے 2 سال", href: "#schedule-infant" },
        { label: language === "en" ? "2 to 6 Years" : "2 سے 6 سال", href: "#schedule-child" },
        { label: language === "en" ? "7 to 18 Years" : "7 سے 18 سال", href: "#schedule-teen" },
        { label: language === "en" ? "Download Schedule" : "شیڈول ڈاؤن لوڈ کریں", href: "#download" },
      ],
    },
    {
      title: language === "en" ? "Resources" : "وسائل",
      items: [
        { label: language === "en" ? "Myths vs Facts" : "افسانے بمقابلہ حقائق", href: "#myths" },
        { label: language === "en" ? "Doctor Testimonials" : "ڈاکٹر کی تعریفیں", href: "#testimonials" },
        { label: language === "en" ? "Video Library" : "ویڈیو لائبریری", href: "#videos" },
      ],
    },
    {
      title: language === "en" ? "Get Help" : "مدد حاصل کریں",
      items: [
        { label: language === "en" ? "Find a Clinic" : "کلینک تلاش کریں", href: "#clinics" },
        { label: language === "en" ? "WhatsApp Support" : "واٹس ایپ سپورٹ", href: "#whatsapp" },
        { label: language === "en" ? "Emergency Info" : "ایمرجنسی معلومات", href: "#emergency" },
      ],
    },
  ]

  const directNavItems = [
    { label: language === "en" ? "FAQs" : "عمومی سوالات", href: "#faq" },
    { label: language === "en" ? "Contact Us" : "ہم سے رابطہ کریں", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and language */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Pak Vax Logo"
              width={140}
              height={140}
              className="object-contain"
            />
            <div className="-ml-6">
              <h1 className="text-2xl font-bold text-foreground">
                {language === "en" ? "Pak Vax" : "پاک ویکس"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Vaccination for Pakistan" : "پاکستان کے لیے ویکسینیشن"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="hidden md:flex gap-2 text-lg px-6 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              {language === "en" ? "Find Nearest Center" : "قریبی مرکز تلاش کریں"}
            </Button>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="lg"
              className="gap-2 text-lg px-8 py-6 bg-transparent hidden md:flex"
            >
              <Globe className="w-5 h-5" />
              {language === "en" ? "اردو" : "English"}
            </Button>

            <Button variant="ghost" size="lg" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-border w-full bg-muted/50">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1 py-2 w-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-2 px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all">
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <ul className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block px-6 py-4 text-base text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              {directNavItems.map((item, index) => (
                <li key={`direct-${index}`}>
                  <Link
                    href={item.href}
                    className="flex items-center px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border py-4 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                    className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-foreground hover:bg-accent/50 rounded-lg transition-all"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === item.title && (
                    <ul className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {directNavItems.map((item, index) => (
                <Link
                  key={`direct-${index}`}
                  href={item.href}
                  className="flex items-center w-full px-4 py-4 text-lg font-medium text-foreground hover:bg-accent/50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="lg"
                className="w-full gap-2 text-lg py-6 bg-transparent"
              >
                <Globe className="w-5 h-5" />
                {language === "en" ? "اردو" : "English"}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
