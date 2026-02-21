import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Registro() {
  return (
    <section id="registro" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="https://forms.gle/kuZyzPXZJ35q3Rza8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              {"Reg\u00EDstrate para ser contactado"}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
