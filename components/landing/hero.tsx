"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Calendar } from "lucide-react"

export function Hero() {
  return (
    <>
      {/* Logo Bar */}
      <div className="bg-oxford-blue py-6 sm:py-8 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <img 
            src="/images/logo-boostart.jpg" 
            alt="Boostart - we foster solid start-ups" 
            className="h-8 sm:h-14 w-auto object-contain"
          />
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-120px)] bg-oxford-blue py-16 sm:py-20 flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0ADCA5 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #0ADCA5 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* Headline - full width */}
          <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-extrabold mb-8 sm:mb-10 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-[#7DFBC3] bg-clip-text text-transparent">
              {'Unete al batch 2026 de '}
            </span>
            <span className="bg-gradient-to-r from-[#0ADCA5] to-[#7DFBC3] bg-clip-text text-transparent">
              Boostart
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#7DFBC3] via-white to-white bg-clip-text text-transparent">
              {'\u2014 En Vivo en tu ciudad'}
            </span>
          </h1>

          <div className="text-center max-w-4xl mx-auto">
            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Estamos conformando una red exclusiva de inversionistas y empresarios para incubar el Batch 2026 
              de Boostart Venture Studio: 10 startups creadas desde cero para resolver problemas 
              reales en diferentes industrias de América Latina con Inteligencia Artificial.
            </p>

            {/* City Selection Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 bg-gradient-to-r from-[#0ADCA5] to-[#7DFBC3] bg-clip-text text-transparent">
              Elige tu ciudad
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-base px-6"
                asChild
              >
                <a href="https://wa.me/573214692966" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-oxford-blue hover:bg-white/90 font-semibold text-base px-6"
                asChild
              >
                <a href="#registro">
                  <FileText className="mr-2 h-5 w-5" />
                  Registrarme
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-caribbean-green text-caribbean-green hover:bg-caribbean-green/10 font-semibold text-base px-6 bg-transparent"
                asChild
              >
                <a href="#eventos">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver próximos eventos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
