import { Button } from "@/components/ui/button"
import { Shield, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-3 rounded-full text-base font-medium">
              <Shield className="w-5 h-5" />
              <span>Safe. Effective. Essential.</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-balance">
              Protect Their Future Today
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed text-pretty">
              Every child deserves protection from preventable diseases. Learn how vaccines save lives and build
              immunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-xl px-10 py-8 bg-white hover:bg-white/90 text-primary shadow-2xl font-semibold"
              >
                Find Vaccination Center
              </Button>

              <Button
                size="lg"
                className="text-xl px-10 py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl"
              >
                <Heart className="w-6 h-6 mr-2" />
                Learn About Vaccines
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/unnamed.jpg"
                alt="Happy Pakistani family with children"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">95%</p>
              <p className="text-base">Protection Rate</p>
              <p className="text-sm opacity-90 mt-1">Against Polio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
