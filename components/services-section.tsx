"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, Palette, Megaphone, X } from 'lucide-react';
import { useState } from "react";

export default function ServicesSection() {

  const whatsappLink = `https://wa.me/243850674579?text=${encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur votre équipe et vos services."
  )}`;

  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Solutions IA & Automatisation",
      description:
        "Libérez le plein potentiel de votre entreprise grâce à l'intelligence artificielle. Nous concevons des solutions d'automatisation sur mesure pour optimiser vos processus, réduire les tâches répétitives et améliorer votre productivité.",
      detailedDescription:
        "Nos solutions d'IA et d'automatisation transforment radicalement votre façon de travailler. Nous développons des systèmes intelligents capables d'analyser vos données, de prédire les tendances et d'automatiser les processus complexes. De l'automatisation de vos workflows à l'implémentation de chatbots intelligents, en passant par l'analyse prédictive et le machine learning, nous créons des solutions qui s'adaptent à vos besoins spécifiques. Notre approche garantit une intégration fluide avec vos systèmes existants tout en maximisant votre retour sur investissement.",
      icon: Brain,
      isDark: true,
      bannerImage: " /images/image services/ia.png",
    },
    {
      title: "Applications Web & Mobiles",
      description:
        "Nous créons des applications performantes, intuitives et sécurisées, pensées pour offrir une expérience fluide sur tous les appareils. De la conception au déploiement, nous assurons une présence digitale moderne et efficace.",
      detailedDescription:
        "De l'idée au lancement, nous accompagnons votre projet d'application web et mobile avec expertise. Nos développeurs maîtrisent les technologies les plus récentes (React, Next.js, React Native, Flutter) pour créer des applications rapides, sécurisées et évolutives. Nous accordons une attention particulière à l'architecture logicielle, à la performance et à la sécurité des données. Chaque application est testée rigoureusement et optimisée pour offrir une expérience utilisateur exceptionnelle sur tous les appareils et plateformes.",
      icon: Smartphone,
      isDark: false,
      bannerImage: "/images/image services/app.png",
    },
    {
      title: "Design UX/UI centré utilisateur",
      description:
        "Nous plaçons vos utilisateurs au cœur du design. Nos interfaces allient esthétique, ergonomie et clarté pour offrir une navigation agréable et un engagement durable.",
      detailedDescription:
        "Notre approche du design UX/UI combine recherche utilisateur, prototypage et tests itératifs pour créer des interfaces qui ravissent vos utilisateurs. Nous analysons le comportement de vos cibles, créons des parcours utilisateurs optimisés et concevons des interfaces visuellement attrayantes. Chaque élément est pensé pour maximiser l'engagement, faciliter la navigation et renforcer votre identité de marque. Nous utilisons les outils les plus performants (Figma, Adobe XD) et suivons les meilleures pratiques en matière d'accessibilité et de design system.",
      icon: Palette,
      isDark: false,
      bannerImage:"/images/image services/ux.png",
    },
    {
      title: "Communication 360°",
      description:
        "Nous élaborons des stratégies de communication cohérentes et percutantes, pour renforcer votre visibilité et votre notoriété sur tous les canaux. De la stratégie à la création, chaque message sert votre image et vos objectifs.",
      detailedDescription:
        "Notre service de communication 360° englobe l'ensemble de vos besoins en matière de visibilité et de notoriété. De l'élaboration de votre stratégie de contenu à la création de visuels percutants, en passant par la gestion de vos réseaux sociaux et vos campagnes publicitaires, nous assurons une présence cohérente et impactante sur tous les canaux. Nous analysons votre marché, identifions vos cibles et créons des messages qui résonnent avec votre audience. Notre objectif : faire rayonner votre marque et générer un engagement durable avec vos clients.",
      icon: Megaphone,
      isDark: false,
      bannerImage: "/images/image services/com.png",
    },
    
  ];

  const openModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-40 px-6 bg-[#EFF5FC]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Services pour lesquels nous pouvons vous aider
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Des solutions de productivité et de collaboration sur mesure,
              conçues pour s'adapter parfaitement aux besoins uniques de votre
              entreprise.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium" onClick={() => window.open(whatsappLink, "_blank")}>
              Parlons-en
            </Button>
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className={`p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 ${
                      service.isDark
                        ? "bg-[#18191D] text-white transform -rotate-3"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-2 rounded-lg ${
                            service.isDark
                              ? "text-blue-400 bg-[#232428]"
                              : "text-blue-500 bg-blue-50"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className={`mb-6 leading-relaxed ${
                          service.isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                      <button
                        onClick={() => openModal(index)}
                        className={`text-sm font-medium hover:underline transition-all ${
                          service.isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        En savoir plus
                      </button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Banner Image */}
            <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
              <img
                src={services[selectedService].bannerImage || "/placeholder.svg"}
                alt={services[selectedService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {(() => {
                    const Icon = services[selectedService].icon;
                    return <Icon className="w-8 h-8 text-blue-500" />;
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {services[selectedService].title}
                </h2>
              </div>

              {/* Detailed Description */}
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {services[selectedService].detailedDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
                  Contactez-nous
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 hover:bg-gray-200 hover:text-gray-900 bg-accent-foreground text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  onClick={closeModal}
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
