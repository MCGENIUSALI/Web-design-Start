"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useRef } from "react"

const faqData = [
  {
    question: "Quel plan tarifaire me convient le mieux ?",
    answer:
      "Nous proposons plusieurs plans adaptés à vos besoins. Notre équipe peut vous aider à choisir le plan le plus approprié en fonction de vos objectifs et de votre budget.",
  },
  {
    question: "Quels modes de paiement proposez-vous ?",
    answer:
      "Nous acceptons les cartes de crédit, les virements bancaires, PayPal et d'autres méthodes de paiement sécurisées pour votre commodité.",
  },
  {
    question: "Combien coûte un site web chez vous ?",
    answer:
      "Le coût varie selon la complexité et les fonctionnalités souhaitées. Contactez-nous pour un devis personnalisé adapté à votre projet.",
  },
  {
    question: "Quelles sont les formations que vous proposez ?",
    answer:
      "Nous offrons des formations complètes en développement web, design UI/UX, marketing digital et stratégies de croissance pour les entreprises.",
  },
]

const statsData = [
  {
    value: "3k",
    label: "Projet terminé",
    color: "bg-[#007BFF]",
    textColor: "text-white",
    icon: "+",
  },
  {
    value: "89",
    label: "Clients satisfaits",
    color: "bg-[#F4F4F4]",
    textColor: "text-black",
    suffix: "%",
  },
  {
    value: "254",
    label: "Membres",
    color: "bg-black",
    textColor: "text-white",
    icon: "+",
  },
  {
    value: "550",
    label: "Personnes formées",
    color: "bg-[#FFC045]",
    textColor: "text-black",
    icon: "+",
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-[#E0E0E0] py-6">
      <button onClick={onClick} className="w-full flex items-center justify-between text-left group">
        <span className="text-lg font-bold text-black pr-4 group-hover:text-[#007BFF] transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center group-hover:bg-[#007BFF] group-hover:text-white transition-all">
          {isOpen ? <Minus className="w-5 h-5 text-gray-900" /> : <Plus className="w-5 h-5 text-gray-900" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-4 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}

function StatCard({ stat, index }: { stat: (typeof statsData)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`${stat.color} ${stat.textColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="text-5xl font-bold mb-2">
        {stat.value}
        {stat.suffix && <span className="text-4xl">{stat.suffix}</span>}
        {stat.icon && <span className="text-4xl ml-1">{stat.icon}</span>}
      </div>
      <div className="text-base font-medium opacity-90">{stat.label}</div>
    </motion.div>
  )
}

export default function FaqStatsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* FAQ Column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
              Questions
              <br />
              fréquemment
              <br />
              posées.
            </h2>
            <div>
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          {/* Stats Column */}
          <div ref={statsRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Quelques-uns de nos
                <br />
                plus beaux travaux.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Notre équipe a fait preuves en aidant les marques à évaluer de manière rentables grace notre stratégies
                très performatnte
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
