import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, Palette, Megaphone } from "lucide-react"; // Icônes Lucide adaptées

export default function ServicesSection() {
  const services = [
    {
      title: "Solutions IA & Automatisation",
      description:
        "Libérez le plein potentiel de votre entreprise grâce à l’intelligence artificielle. Nous concevons des solutions d’automatisation sur mesure pour optimiser vos processus, réduire les tâches répétitives et améliorer votre productivité.",
      icon: Brain,
      isDark: true,
    },
    {
      title: "Applications Web & Mobiles",
      description:
        "Nous créons des applications performantes, intuitives et sécurisées, pensées pour offrir une expérience fluide sur tous les appareils. De la conception au déploiement, nous assurons une présence digitale moderne et efficace.",
      icon: Smartphone,
      isDark: false,
    },
    {
      title: "Design UX/UI centré utilisateur",
      description:
        "Nous plaçons vos utilisateurs au cœur du design. Nos interfaces allient esthétique, ergonomie et clarté pour offrir une navigation agréable et un engagement durable.",
      icon: Palette,
      isDark: false,
    },
    {
      title: "Communication 360°",
      description:
        "Nous élaborons des stratégies de communication cohérentes et percutantes, pour renforcer votre visibilité et votre notoriété sur tous les canaux. De la stratégie à la création, chaque message sert votre image et vos objectifs.",
      icon: Megaphone,
      isDark: false,
    },
  ];

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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
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
                        className={`text-sm font-medium hover:underline ${
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
    </section>
  );
}
