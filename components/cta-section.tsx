"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTASection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.1}deg)` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
            Prêt à transformer votre <span className="text-primary">vision digitale</span> ?
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à
            atteindre vos objectifs numériques.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full group"
            >
              Démarrer un projet
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-6">
              <a
                href="mailto:contact@startdrc.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>contact@startdrc.com</span>
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>+33 1 23 45 67 89</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
