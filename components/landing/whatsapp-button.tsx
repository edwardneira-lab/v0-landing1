"use client"

import { MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/573214692966"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-caribbean-green hover:bg-caribbean-green/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-oxford-blue" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-oxford-blue text-white border-pine-green">
          <p>¿Hablamos?</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
