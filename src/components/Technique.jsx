import { motion } from 'framer-motion'
import {
  Pencil, ScanLine, Import, Move, Waves, LayoutTemplate, Play,
  Sliders, Info,
} from 'lucide-react'

const steps = [
  { num: 1, icon: Pencil,        label: 'Boceto de poses clave',      desc: 'En papel o Procreate. 3–5 poses por pieza de 10 seg.' },
  { num: 2, icon: ScanLine,      label: 'Digitalización y limpieza',  desc: 'Photoshop / Illustrator · Capas separadas por elemento.' },
  { num: 3, icon: Import,        label: 'Importar a After Effects',    desc: 'Como composición. Mantener estructura de capas.' },
  { num: 4, icon: Move,          label: 'Animar posiciones / escalas', desc: 'Keyframes básicos entre poses. Sin over-animate.' },
  { num: 5, icon: Waves,         label: 'Turbulent Displace',         desc: 'Aplicar efecto con Random Seed animado por frame.' },
  { num: 6, icon: LayoutTemplate, label: 'Composición final',         desc: 'Fondos, tipografía, transiciones, audio.' },
  { num: 7, icon: Play,          label: 'Render y revisión',          desc: 'Formato evento · Revisar codec, resolución, duración.' },
]

const params = [
  { param: 'Amount',          value: '5 – 15',     note: 'Bajo = sutil · Alto = agresivo' },
  { param: 'Size',            value: '3 – 8',      note: 'Controla el tamaño de la distorsión' },
  { param: 'Displacement',    value: 'Turbulent / Twist', note: 'Según el estilo deseado' },
  { param: 'Random Seed',     value: 'random() o posterizeTime()', note: 'Expresión para variación por frame' },
]

export default function Technique() {
  return (
    <div>
      <h2 className="section-title">Técnica: Turbulence Displacement</h2>
      <p className="section-subtitle">Animación cuadro a cuadro falseada con After Effects</p>

      {/* Principle card */}
      <div className="glass-dark rounded-2xl p-5 mb-8 flex gap-4 items-start text-white">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Info size={20} className="text-accent" />
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Principio de la técnica</p>
          <p className="text-white/75 text-sm leading-relaxed">
            Se dibujan pocas poses clave (3–5 por pieza de 10 seg) y se importan a After Effects. El efecto{' '}
            <span className="text-accent font-semibold">Turbulent Displace</span> con un{' '}
            <span className="text-accent font-semibold">Random Seed animado</span> genera variaciones sutiles por
            fotograma, simulando el temblor característico de la animación tradicional cuadro a cuadro.
          </p>
        </div>
      </div>

      {/* Parameters table */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sliders size={16} className="text-primary" />
          <p className="font-semibold text-primary text-sm uppercase tracking-wide">Parámetros recomendados</p>
        </div>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg-alt">
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted">Parámetro</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted">Valor</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted hidden md:table-cell">Nota</th>
              </tr>
            </thead>
            <tbody>
              {params.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-bg/50' : ''}>
                  <td className="px-4 py-3 font-semibold text-ink">{row.param}</td>
                  <td className="px-4 py-3 font-mono text-sm text-primary">{row.value}</td>
                  <td className="px-4 py-3 text-muted text-xs hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workflow steps */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Play size={16} className="text-primary" />
          <p className="font-semibold text-primary text-sm uppercase tracking-wide">Flujo de trabajo por pieza</p>
        </div>

        {/* Horizontal scroll on mobile, 2-col on desktop */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0">
          <div className="flex gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="card p-4 flex-shrink-0 w-44 md:w-auto"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </span>
                    <Icon size={14} className="text-accent" />
                  </div>
                  <p className="font-semibold text-ink text-sm leading-snug mb-1">{step.label}</p>
                  <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
        <p className="text-xs text-muted mt-3 md:hidden">← Desliza para ver todos los pasos</p>
      </div>
    </div>
  )
}
