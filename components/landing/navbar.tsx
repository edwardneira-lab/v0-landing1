"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#tesis", label: "Tesis" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#angelhub", label: "AngelHub" },
  { href: "#eventos", label: "Eventos" },
  { href: "#registro", label: "Registro" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxford-blue/95 backdrop-blur-sm border-b border-pine-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-caribbean-green">Boostart</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-caribbean-green transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold"
            >
              <a href="#registro">Quiero ser parte</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-pine-green/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-caribbean-green transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold w-full"
              >
                <a href="#registro" onClick={() => setIsOpen(false)}>Quiero ser parte</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
