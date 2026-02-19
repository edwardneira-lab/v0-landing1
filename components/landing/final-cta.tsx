"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Calendar } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 bg-oxford-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
          Haz parte de la próxima generación de startups de IA en América Latina.
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          {"Boostart está construyendo 10 compañías desde cero para el Batch 2026. Participa desde el inicio en un portafolio diseñado para lograr tracción y exit temprano."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-base px-6"
            asChild
          >
            <a href="https://wa.me/573214692966" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-white text-oxford-blue hover:bg-white/90 font-semibold text-base px-6"
            asChild
          >
            <a href="#registro">
              <FileText className="mr-2 h-5 w-5" />
              Registro
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
              Eventos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
