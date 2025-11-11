"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (portraitsRef.current && textRef.current) {
        const parallaxOffset = (scrollProgress - 0.5) * 50;
        portraitsRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        textRef.current.style.transform = `translateY(${
          -parallaxOffset * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for 3D floating effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitsRef.current) return;

    const rect = portraitsRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const portraits = [
    { id: 1, src: "/images/portrait teams/barro.png" },
    { id: 2, src: "/images/portrait teams/kris.png" },
    { id: 3, src: "/images/portrait teams/johnny.png" },
    { id: 4, src: "/images/portrait teams/riche.png" },
  ];

  const whatsappLink = `https://wa.me/243850674579?text=${encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur votre équipe et vos services."
  )}`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portraits Section */}
          <div
            ref={portraitsRef}
            className={`relative flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Blue diamond shape in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="md:w-40 md:h-40 w-32 h-32 bg-[#007BFF] "
                  style={{
                    transform: `rotate(45deg) scale(${
                      1 + Math.abs(mousePosition.x + mousePosition.y) / 100
                    })`,
                  }}
                />
              </div>

              {/* Portrait grid */}
              <div className="relative grid grid-cols-2">
                {portraits.map((portrait, index) => {
                  const positions = [
                    { x: 0, y: 0 }, // top-left
                    { x: 1, y: 0 }, // top-right
                    { x: 0, y: 1 }, // bottom-left
                    { x: 1, y: 1 }, // bottom-right
                  ];
                  const pos = positions[index];

                  return (
                    <div
                      key={portrait.id}
                      className="relative aspect-square transition-all duration-300 ease-out"
                      style={{
                        transform: `translate(${
                          mousePosition.x * (pos.x === 0 ? -1 : 1) * 0.5
                        }px, ${
                          mousePosition.y * (pos.y === 0 ? -1 : 1) * 0.5
                        }px)`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-8 border-white">
                        <img
                          src={portrait.src}
                          alt={`Team member ${portrait.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div
            ref={textRef}
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-balance text-gray-900  ">
              Collaborez avec une équipe d'experts qualifiés dans chaque
              domaine.{" "}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Faites confiance à une équipe d'experts passionnés, spécialisés en
              développement numérique. Nous combinons expertise et innovation
              pour transformer vos idées en solutions concrètes, adaptées à vos
              besoins.
            </p>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(whatsappLink, "_blank")}
              className="rounded-md border-2 hover:bg-foreground hover:text-background transition-all duration-300 text-base md:text-lg px-6 py-6 bg-transparent text-gray-900"
            >
              Contactez notre equipe{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
