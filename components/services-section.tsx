import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ServiceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" />
  </svg>
)

export default function ServicesSection() {
  const services = [
    {
      title: "Solutions IA & Automatisation",
      description:
        "Nous créons des applications web modernes, rapides et sécurisées en utilisant les dernières technologies.",
      isDark: true,
    },
    {
      title: "Applications Web & Mobiles",
      description:
        "Nous créons des applications web modernes, rapides et sécurisées en utilisant les dernières technologies.",
      isDark: false,
    },
    {
      title: "Design UX/UI centré utilisateur",
      description:
        "Nous créons des applications web modernes, rapides et sécurisées en utilisant les dernières technologies.",
      isDark: false,
    },
    {
      title: "Communication 360°",
      description:
        "Nous créons des applications web modernes, rapides et sécurisées en utilisant les dernières technologies.",
      isDark: false,
    },
  ]

  return (
    <section className="py-40 px-6 bg-[#EFF5FC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Services pour lesquels nous pouvons vous aider
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Des solutions de productivité et de collaboration sur mesure, conçues pour s'adapter parfaitement aux
              besoins uniques de votre entreprise.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
              Parlons-en
            </Button>
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`p-6 border-0 shadow-sm hover:shadow-md transition-shadow ${
                    service.isDark ? "bg-[#18191D] text-white transform -rotate-3 " : "bg-white text-gray-900" 
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-lg ${service.isDark ? "text-blue-400" : "text-blue-500"}`}>
                        <ServiceIcon />
                      </div>
                      <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                    </div>
                    <p className={`mb-6 leading-relaxed ${service.isDark ? "text-gray-300" : "text-gray-600"}`}>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
