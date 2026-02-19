"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, Shield } from "lucide-react"

interface Registration {
  nombre: string
  email: string
  telefono: string
  linkedin: string
  pais: string
  ciudad: string
  timestamp: string
}

const HEADING_TEXT = "Reg\u00EDstrate, te contactaremos"

export function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    linkedin: "",
    pais: "",
    ciudad: "",
  })
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newRegistration: Registration = {
      ...formData,
      timestamp: new Date().toLocaleString("es-ES"),
    }

    setRegistrations([...registrations, newRegistration])

    toast({
      title: "Registro exitoso",
      description: "Te contactaremos en menos de 48 horas con informaci\u00F3n del Investor Briefing.",
    })

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      linkedin: "",
      pais: "",
      ciudad: "",
    })
  }

  return (
    <section id="registro" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-oxford-blue mb-6">
            {HEADING_TEXT}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-light-cyan shadow-lg">
            <CardHeader>
              <CardTitle className="text-oxford-blue text-center">Formulario de registro</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-oxford-blue">Nombre completo</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-oxford-blue">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-oxford-blue">{"Tel\u00E9fono"}</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      required
                      placeholder="+57 300 123 4567"
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-oxford-blue">Perfil de LinkedIn</Label>
                    <Input
                      id="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      required
                      placeholder="https://linkedin.com/in/tu-perfil"
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pais" className="text-oxford-blue">{"Pa\u00EDs"}</Label>
                    <Input
                      id="pais"
                      value={formData.pais}
                      onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                      required
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad" className="text-oxford-blue">Ciudad</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      required
                      className="border-light-cyan focus:border-caribbean-green"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Quiero acceder al Investor Briefing
                </Button>

                <p className="text-sm text-pine-green text-center flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4" />
                  {"Tu informaci\u00F3n es confidencial. Te contactaremos en menos de 48 horas."}
                </p>
              </form>
            </CardContent>
          </Card>

          {registrations.length > 0 && (
            <Card className="mt-8 border-light-cyan">
              <CardHeader>
                <CardTitle className="text-oxford-blue text-lg">Registros recibidos (demo)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-light-cyan">
                        <th className="text-left py-2 text-oxford-blue font-semibold">Nombre</th>
                        <th className="text-left py-2 text-oxford-blue font-semibold">Email</th>
                        <th className="text-left py-2 text-oxford-blue font-semibold">{"Tel\u00E9fono"}</th>
                        <th className="text-left py-2 text-oxford-blue font-semibold">Ciudad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.map((reg, index) => (
                        <tr key={index} className="border-b border-light-cyan/50">
                          <td className="py-2 text-pine-green">{reg.nombre}</td>
                          <td className="py-2 text-pine-green">{reg.email}</td>
                          <td className="py-2 text-pine-green">{reg.telefono}</td>
                          <td className="py-2 text-pine-green">{reg.ciudad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
