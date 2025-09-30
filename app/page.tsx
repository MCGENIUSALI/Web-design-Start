import { Navigation } from "@/components/navigation"
import { ParallaxHero } from "@/components/parallax-hero"
import ServicesSection from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ParallaxHero />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
