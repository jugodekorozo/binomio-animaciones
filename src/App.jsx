import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Research from './components/Research'
import Technique from './components/Technique'
import Team from './components/Team'

export default function App() {
  const sectionRefs = {
    inicio:        useRef(null),
    cronograma:    useRef(null),
    investigacion: useRef(null),
    tecnica:       useRef(null),
    equipo:        useRef(null),
  }

  const scrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-bg">
      <Nav scrollTo={scrollTo} sectionRefs={sectionRefs} />

      <main className="pb-24 md:pb-0 md:pt-16">
        <section ref={sectionRefs.inicio} id="inicio">
          <Hero scrollTo={scrollTo} />
        </section>

        <section ref={sectionRefs.cronograma} id="cronograma" className="relative bg-bg-alt texture-light">
          <div className="section-pad">
            <Timeline />
          </div>
        </section>

        <section ref={sectionRefs.investigacion} id="investigacion" className="relative bg-bg texture-light">
          <div className="section-pad">
            <Research />
          </div>
        </section>

        <section ref={sectionRefs.tecnica} id="tecnica" className="relative bg-bg-alt texture-light">
          <div className="section-pad">
            <Technique />
          </div>
        </section>

        <section ref={sectionRefs.equipo} id="equipo" className="relative bg-bg texture-light">
          <div className="section-pad">
            <Team />
          </div>
          {/* Footer */}
          <div className="border-t border-bg-alt text-center py-8 px-6">
            <p className="font-display italic text-primary text-lg mb-1">Programa de Diseño Gráfico Areandina Valledupar</p>
            <p className="text-muted text-xs">Documento de trabajo — Sujeto a ajustes según fecha del evento · Revisado 26 de marzo de 2026</p>
          </div>
        </section>
      </main>
    </div>
  )
}
