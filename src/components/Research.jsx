import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Music, Landmark, Cpu, Film, Sparkles } from 'lucide-react'
import { researchBlocks } from '../data/research'

const iconMap = { Music, Landmark, Cpu, Film, Sparkles }

export default function Research() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <div>
      <h2 className="section-title">Marco de Investigación</h2>
      <p className="section-subtitle">5 ejes temáticos · Usa Perplexity y NotebookLM como fuentes principales</p>

      <div className="space-y-3">
        {researchBlocks.map((block) => {
          const Icon = iconMap[block.icon] || Music
          const isOpen = openId === block.id

          return (
            <div
              key={block.id}
              className={`card overflow-hidden transition-shadow duration-200 ${isOpen ? 'shadow-md' : ''} ${block.highlight ? 'ring-2 ring-primary/20' : ''}`}
            >
              <button
                onClick={() => toggle(block.id)}
                className="w-full flex items-center gap-4 p-4 text-left"
              >
                {/* Icon badge */}
                <span
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: block.color }}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </span>

                <div className="flex-1 min-w-0">
                  {block.highlight && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                      ★ Eje narrativo principal
                    </p>
                  )}
                  <p className="text-ink font-semibold text-sm leading-snug">{block.title}</p>
                  <p className="text-muted text-xs mt-0.5">{block.questions.length} preguntas guía · {block.tool}</p>
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
                    <div className="px-4 pb-5 border-t border-bg-alt pt-4 space-y-4">
                      {/* Questions */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-3">
                          Preguntas guía
                        </p>
                        <ul className="space-y-2">
                          {block.questions.map((q, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-ink">
                              <span
                                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                                style={{ backgroundColor: block.color }}
                              >
                                {i + 1}
                              </span>
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sources */}
                      <div
                        className="rounded-xl p-3 text-sm"
                        style={{ backgroundColor: `${block.color}12` }}
                      >
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: block.color }}>
                          Fuentes sugeridas
                        </p>
                        <p className="text-muted text-xs leading-relaxed italic">{block.sources}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
