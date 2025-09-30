"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Megaphone, Play, Star, Plus, Circle } from "lucide-react"

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <div
          className="absolute top-20 left-10 text-secondary opacity-60"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <Plus size={24} />
        </div>
        <div
          className="absolute top-40 right-20 text-primary opacity-40"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <Plus size={32} />
        </div>
        <div
          className="absolute bottom-40 left-20 text-accent opacity-50"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <Circle size={16} />
        </div>
        <div
          className="absolute top-60 right-40 text-secondary opacity-30"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <Star size={20} />
        </div>
        <div
          className="absolute bottom-60 right-10 text-primary opacity-40"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        >
          <Star size={28} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Trouver de nouvelles solutions grâce au <span className="text-primary">numérique.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Nous développons des solutions numériques innovantes et accessibles, qui créent de la valeur en
                transformant vos communications tout en accompagnant nos partenaires dans l'atteinte de leurs objectifs
                commerciaux.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
              >
                À propos de notre agence
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-full"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="relative">
            {/* Analytics Chart */}
            <div
              className="absolute top-0 right-0 bg-card border border-border rounded-2xl p-6 shadow-2xl floating-animation"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
              </div>
              <div className="flex items-end gap-2 h-20">
                <div className="w-4 bg-primary rounded-t h-8"></div>
                <div className="w-4 bg-chart-2 rounded-t h-12"></div>
                <div className="w-4 bg-chart-3 rounded-t h-16"></div>
                <div className="w-4 bg-primary rounded-t h-20"></div>
                <div className="w-4 bg-secondary rounded-t h-10"></div>
              </div>
            </div>

            {/* Megaphone Icon */}
            <div
              className="absolute top-20 left-10 text-foreground floating-animation-delayed"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              <Megaphone size={64} className="opacity-80" />
            </div>

            {/* Success Metric */}
            <div
              className="absolute top-40 left-0 bg-green-500 text-white rounded-2xl px-4 py-2 shadow-lg floating-animation-slow"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <div className="flex items-center gap-2">
                <Circle size={8} className="fill-current" />
                <span className="font-semibold">150</span>
              </div>
            </div>

            {/* Donut Chart */}
            <div
              className="absolute bottom-40 left-20 floating-animation"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="w-24 h-24 rounded-full border-8 border-primary border-t-secondary border-r-chart-3 border-b-chart-4"></div>
            </div>

            {/* Video Player Mock */}
            <div
              className="absolute bottom-0 right-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 shadow-2xl floating-animation-delayed"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              <div className="w-32 h-20 bg-black/20 rounded-lg flex items-center justify-center mb-4">
                <Play size={24} className="text-white" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-1 bg-white/20 rounded-full">
                  <div className="w-1/3 h-full bg-secondary rounded-full"></div>
                </div>
                <div className="flex justify-between text-white text-xs">
                  <span>2:30</span>
                  <span>7:45</span>
                </div>
              </div>
            </div>

            {/* User Avatar */}
            <div
              className="absolute top-60 right-40 w-12 h-12 bg-muted rounded-full border-2 border-foreground floating-animation"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
            </div>

            {/* Bar Chart */}
            <div
              className="absolute bottom-20 right-40 bg-secondary rounded-2xl p-4 shadow-lg floating-animation-slow"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="grid grid-cols-4 gap-1 h-16 items-end">
                <div className="bg-white/80 rounded-sm h-8"></div>
                <div className="bg-white/80 rounded-sm h-12"></div>
                <div className="bg-white/80 rounded-sm h-6"></div>
                <div className="bg-white/80 rounded-sm h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
