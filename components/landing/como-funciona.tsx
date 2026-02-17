"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

const bulletPoints = [
  "Diseñar el modelo de negocio",
  "Construir el MVP",
  "Validar mercado y primeros clientes",
  "Preparar fundraising estratégico",
  "Habilitar conexiones comerciales clave",
  "Estructura legal y financiera de la startup"
]

const investorBenefits = [
  "Tendrás participación en las startups del Batch 2026",
  "Acceso prioritario al deal flow",
  "Briefings privados",
  "Eventos exclusivos",
  "Actualizaciones periódicas"
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-oxford-blue mb-6 sm:mb-8 text-balance">
            Boostart es Venture Studio + Investment Banking
          </h2>
          <p className="text-pine-green text-base sm:text-lg leading-relaxed">
            Somos un equipo con amplia experiencia en marketing, tecnología e inversión, 
            diseñado para construir compañías desde cero junto a emprendedores expertos en su industria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* What we do */}
          <div className="space-y-5 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-oxford-blue mb-6 sm:mb-8">Qué hacemos</h3>
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-caribbean-green flex-shrink-0 mt-0.5" />
                <span className="text-oxford-blue text-base sm:text-lg">{point}</span>
              </div>
            ))}
          </div>

          {/* Investor benefits card */}
          <Card className="bg-oxford-blue border-pine-green">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-white flex items-center gap-2 text-lg sm:text-xl">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-caribbean-green" />
                Qué recibes como inversionista
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              {investorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-caribbean-green rounded-full flex-shrink-0" />
                  <span className="text-white/90 text-base sm:text-lg">{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
