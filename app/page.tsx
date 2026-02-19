import { Hero } from "@/components/landing/hero"
import { Tesis } from "@/components/landing/tesis"
import { AngelHub } from "@/components/landing/angelhub"
import { Eventos } from "@/components/landing/eventos"
import { Partners } from "@/components/landing/partners"
import { Registro } from "@/components/landing/registro"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Hero />
      <Eventos />
      <Tesis />
      <AngelHub />
      <Partners />
      <Registro />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
