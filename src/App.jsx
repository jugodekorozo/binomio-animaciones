import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Research from './components/Research'
import Technique from './components/Technique'
import Team from './components/Team'
import Workflow from './components/Workflow'

export default function App() {
  const sectionRefs = {
    inicio:        useRef(null),
    cronograma:    useRef(null),
    investigacion: useRef(null),
    tecnica:       useRef(null),
    equipo:        useRef(null),
    flujo:         useRef(null),
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

        <section ref={sectionRefs.cronograma} id="cronograma" className="bg-bg-alt">
          <div className="section-pad">
            <Timeline />
          </div>
        </section>

        <section ref={sectionRefs.investigacion} id="investigacion">
          <div className="section-pad">
            <Research />
          </div>
        </section>

        <section ref={sectionRefs.tecnica} id="tecnica" className="bg-bg-alt">
          <div className="section-pad">
            <Technique />
          </div>
        </section>

        <section ref={sectionRefs.equipo} id="equipo">
          <div className="section-pad">
            <Team />
          </div>
        </section>

        <section ref={sectionRefs.flujo} id="flujo" className="bg-bg-alt">
          <div className="section-pad">
            <Workflow />
          </div>
        </section>
      </main>
    </div>
  )
}
