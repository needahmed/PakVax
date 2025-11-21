import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Nastaliq_Urdu } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
// Added Urdu font for bilingual support - Noto Nastaliq Urdu is a beautiful Urdu font
const _urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
})

// <CHANGE> Updated metadata for vaccination awareness campaign
export const metadata: Metadata = {
  title: "Pak Vax - Vaccination for Pakistan",
  description:
    "Learn about childhood vaccination schedules, benefits, and protect your children from preventable diseases. Information available in English and Urdu.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_urdu.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
