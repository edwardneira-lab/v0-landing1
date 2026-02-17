"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Hammer, TrendingUp, DollarSign } from "lucide-react"

const cards = [
  {
    icon: Hammer,
    title: "Construcción",
    description: "Desarrollo del MVP, validación con usuarios reales y conformación del equipo de la startup."
  },
  {
    icon: TrendingUp,
    title: "Tracción",
    description: "Aceleración de las ventas con un producto que se ajusta rápidamente en cada nueva iteración."
  },
  {
    icon: DollarSign,
    title: "Exit Temprano",
    description: "Modelo de performance que acompaña y traza el camino hacia una venta o adquisición."
  }
]

export function Tesis() {
  return (
    <section id="tesis" className="py-16 sm:py-24 bg-non-photo-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-oxford-blue text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">El modelo Boostart</h2>
          <p className="text-pine-green text-base sm:text-lg lg:text-xl leading-relaxed">
            Combinamos tecnología, marketing y banca de inversión para transformar 
            ideas y proyectos en activos adquiribles en tres o cuatro años.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              className="bg-oxford-blue border-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-caribbean-green rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <card.icon className="h-7 w-7 sm:h-8 sm:w-8 text-oxford-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-light-cyan text-sm sm:text-base">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
