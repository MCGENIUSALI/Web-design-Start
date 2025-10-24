import { Navigation } from "@/components/navigation";
import { ParallaxHero } from "@/components/parallax-hero";
import ServicesSection from "@/components/services-section";
import Products from "@/components/products";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import TeamSection from "@/components/team-section";
import FaqStatsSection from "@/components/faq-stats-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ParallaxHero />
      <ServicesSection />
      <Products />
      {/* <StatsSection /> */}
      <TeamSection />
      <FaqStatsSection/>
      <CTASection />
      <Footer />
    </main>
  );
}
