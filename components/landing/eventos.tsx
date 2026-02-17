"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Calendar, MapPin, Monitor } from "lucide-react"

const eventos = [
  {
    fecha: "Feb 19",
    dia: "Miércoles",
    ciudad: "Online",
    titulo: "Investor MeetUp - Online",
    cta: "Register Now",
    tipo: "online",
    lugar: "Evento online"
  },
  {
    fecha: "Feb 26",
    dia: "Jueves",
    ciudad: "Bogotá",
    titulo: "Investor MeetUp - Bogotá",
    cta: "Register Now",
    tipo: "presencial",
    lugar: "Pendiente por definir"
  },
  {
    fecha: "Mar 4",
    dia: "Miércoles",
    ciudad: "Pereira",
    titulo: "Investor MeetUp - Pereira",
    cta: "Register Now",
    tipo: "presencial",
    lugar: "Pendiente por definir"
  },
  {
    fecha: "Mar 25",
    dia: "Miércoles",
    ciudad: "Monterrey",
    titulo: "Investor MeetUp - Monterrey",
    cta: "Register Now",
    tipo: "presencial",
    lugar: "Pendiente por definir"
  },
  {
    fecha: "Apr 2",
    dia: "Jueves",
    ciudad: "Ciudad de México",
    titulo: "Investor MeetUp - Ciudad de México",
    cta: "Register Now",
    tipo: "presencial",
    lugar: "Pendiente por definir"
  }
]

interface EventFormData {
  nombre: string
  email: string
  ciudad: string
  ticket: string
}

export function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState<typeof eventos[0] | null>(null)
  const [formData, setFormData] = useState<EventFormData>({
    nombre: "",
    email: "",
    ciudad: "",
    ticket: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Registro enviado",
      description: `Te has registrado para "${selectedEvent?.titulo}". Te contactaremos pronto.`,
    })
    setSelectedEvent(null)
    setFormData({ nombre: "", email: "", ciudad: "", ticket: "" })
  }

  return (
    <section id="eventos" className="py-24 bg-non-photo-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-oxford-blue mb-6">
            Próximos eventos para inversionistas
          </h2>
          <p className="text-pine-green text-lg leading-relaxed">
            Estamos realizando una serie de encuentros exclusivos para quienes quieren 
            formar parte de la Red de Ángeles Boostart 2026.
          </p>
        </div>

        <div className="space-y-4">
          {eventos.map((evento, index) => (
            <Card 
              key={index} 
              className="bg-white border-light-cyan hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-24 bg-oxford-blue rounded-xl flex flex-col items-center justify-center text-white">
                      <Calendar className="h-4 w-4 mb-1" />
                      <span className="text-sm font-bold">{evento.fecha}</span>
                      <span className="text-xs text-light-cyan">{evento.dia}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-pine-green text-sm mb-1">
                        {evento.tipo === "online" ? (
                          <Monitor className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        {evento.ciudad}
                      </div>
                      <h3 className="text-lg font-bold text-oxford-blue">{evento.titulo}</h3>
                      <p className="text-pine-green text-sm mt-1">Hora: 6 pm Colombia / 5 pm CDMX</p>
                      <p className="text-pine-green text-sm">Lugar: {evento.lugar}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedEvent(evento)}
                    className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold"
                  >
                    {evento.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Registration Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-oxford-blue">Registro para evento</DialogTitle>
            <DialogDescription className="text-pine-green">
              {selectedEvent?.titulo}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-nombre" className="text-oxford-blue">Nombre completo</Label>
              <Input
                id="event-nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="border-light-cyan focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-email" className="text-oxford-blue">Email</Label>
              <Input
                id="event-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-light-cyan focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-ciudad" className="text-oxford-blue">Ciudad</Label>
              <Input
                id="event-ciudad"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                required
                className="border-light-cyan focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-ticket" className="text-oxford-blue">Ticket estimado de inversión</Label>
              <Select
                value={formData.ticket}
                onValueChange={(value) => setFormData({ ...formData, ticket: value })}
              >
                <SelectTrigger className="border-light-cyan focus:border-caribbean-green">
                  <SelectValue placeholder="Selecciona un rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k-10k">USD 5k–10k</SelectItem>
                  <SelectItem value="10k-25k">USD 10k–25k</SelectItem>
                  <SelectItem value="25k-50k">USD 25k–50k</SelectItem>
                  <SelectItem value="50k+">USD 50k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold"
            >
              Confirmar registro
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
