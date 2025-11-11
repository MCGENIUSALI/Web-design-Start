"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Megaphone, Play, Star, Plus, Circle } from "lucide-react";
import Image from "next/image";
import logo from "@/public/vect heder.svg";

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const whatsappLink = `https://wa.me/243850674579?text=${encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur votre équipe et vos services."
  )}`;


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
                Trouver de nouvelles solutions grâce au{" "}
                <span className="text-primary">numérique.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Nous développons des solutions numériques innovantes et
                accessibles, qui créent de la valeur en transformant vos
                communications tout en accompagnant nos partenaires dans
                l'atteinte de leurs objectifs commerciaux.
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
               onClick={() => window.open(whatsappLink, "_blank")}
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
            {/* Megaphone Icon */}
            <div
              className="absolute top-20 left-10 text-foreground floating-animation-fast"
              style={{ transform: `translateY(${scrollY * 0.30}px)` }}
            ></div>
            {/*  Success Metric */}
            <Image
              src={logo}
              alt="Logo"
              className=" floating-animation-delayed "
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            />

            {/* Bar Chart */}
          </div>
        </div>
      </div>
    </section>
  );
}
