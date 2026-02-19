"use client"

import {
  TrendingUp,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Brain,
  KeyRound,
} from "lucide-react"

const benefits = [
  { icon: TrendingUp, title: "Valoraciones altamente atractivas" },
  { icon: Target, title: "Startups diseñadas para exit" },
  { icon: Users, title: "Acompañamiento de un experto en VC" },
  { icon: Lightbulb, title: "Innovación como ventaja estratégica" },
  { icon: Rocket, title: "Startups que redefinen las industrias" },
  { icon: Brain, title: "Exposición a la economía IA" },
  { icon: KeyRound, title: "Dealflow preferencial Boostart" },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-non-photo-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-oxford-blue mb-4 text-balance leading-tight">
            {"¿Por que hacer parte de la Red de Inversionistas Boostart?"}
          </h2>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {benefits.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group relative bg-oxford-blue rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(10,220,165,0.15)]"
            >
              {/* Number badge */}
              <span className="absolute top-5 right-5 text-caribbean-green/20 text-5xl font-black leading-none select-none">
                {index + 1}
              </span>

              <div className="w-12 h-12 rounded-xl bg-caribbean-green/10 border border-caribbean-green/20 flex items-center justify-center mb-5 group-hover:bg-caribbean-green/20 transition-colors">
                <item.icon className="h-6 w-6 text-caribbean-green" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug pr-6">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Middle row: 2 cards centered wider */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-5xl mx-auto">
          {benefits.slice(3, 5).map((item, index) => (
            <div
              key={index + 3}
              className="group relative bg-oxford-blue rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(10,220,165,0.15)]"
            >
              <span className="absolute top-5 right-5 text-caribbean-green/20 text-5xl font-black leading-none select-none">
                {index + 4}
              </span>

              <div className="w-12 h-12 rounded-xl bg-caribbean-green/10 border border-caribbean-green/20 flex items-center justify-center mb-5 group-hover:bg-caribbean-green/20 transition-colors">
                <item.icon className="h-6 w-6 text-caribbean-green" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug pr-6">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered wider */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.slice(5, 7).map((item, index) => (
            <div
              key={index + 5}
              className="group relative bg-oxford-blue rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(10,220,165,0.15)]"
            >
              <span className="absolute top-5 right-5 text-caribbean-green/20 text-5xl font-black leading-none select-none">
                {index + 6}
              </span>

              <div className="w-12 h-12 rounded-xl bg-caribbean-green/10 border border-caribbean-green/20 flex items-center justify-center mb-5 group-hover:bg-caribbean-green/20 transition-colors">
                <item.icon className="h-6 w-6 text-caribbean-green" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug pr-6">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
