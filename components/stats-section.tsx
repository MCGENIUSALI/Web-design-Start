"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: "150+", label: "Projets Réalisés", suffix: "" },
  { number: "98", label: "Satisfaction Client", suffix: "%" },
  { number: "5", label: "Années d'Expérience", suffix: "+" },
  { number: "24/7", label: "Support Technique", suffix: "" },
]

export function StatsSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${getComputedStyle(document.documentElement).getPropertyValue("--color-primary")} 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                transform: `translateY(${scrollY * (0.02 + index * 0.01)}px)`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="space-y-4">
                <div className="text-5xl lg:text-6xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-xl text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
