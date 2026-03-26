import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, User2, Package } from 'lucide-react'
import { schedule, phases } from '../data/schedule'

const phaseOrder = ['Investigación', 'Preproducción', 'Producción', 'Postproducción', 'Entrega']

export default function Timeline() {
  const [openDay, setOpenDay] = useState(null)

  const toggle = (day) => setOpenDay((prev) => (prev === day ? null : day))

  return (
    <div>
      <h2 className="section-title">Cronograma de Producción</h2>
      <p className="section-subtitle">15 días · 5 fases · 4 duplas</p>

      {/* Phase legend */}
      <div className="flex flex-wrap gap-2 mb-8">
        {phaseOrder.map((name) => (
          <span
            key={name}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white"
            style={{ backgroundColor: phases[name].color }}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Day cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {schedule.map((item) => {
          const phase = phases[item.phase]
          const isOpen = openDay === item.day

          return (
            <div key={item.day} className="card overflow-hidden">
              <button
                onClick={() => toggle(item.day)}
                className="w-full flex items-center gap-3 p-4 text-left group"
              >
                {/* Day number badge */}
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: phase.color }}
                >
                  {item.day}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: phase.color }}>
                    {item.phase}
                  </p>
                  <p className="text-ink text-sm font-medium truncate">{item.deliverable}</p>
                </div>

                <ChevronDown
                  size={16}
                  className="flex-shrink-0 text-muted transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t border-bg-alt pt-3 space-y-4">
                      {/* Activities */}
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-2">Actividades</p>
                        <ul className="space-y-1.5">
                          {item.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-ink">
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: phase.color }}
                              />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meta */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-bg rounded-xl p-3">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1 flex items-center gap-1">
                            <User2 size={10} /> Responsable
                          </p>
                          <p className="text-xs font-medium text-ink">{item.responsible}</p>
                        </div>
                        <div className="bg-bg rounded-xl p-3">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1 flex items-center gap-1">
                            <Package size={10} /> Entregable
                          </p>
                          <p className="text-xs font-medium text-ink">{item.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-muted mt-6 text-center">Toca cada día para ver actividades y entregable</p>
    </div>
  )
}
