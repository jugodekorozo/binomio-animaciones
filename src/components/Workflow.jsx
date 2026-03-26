import { motion } from 'framer-motion'
import { Search, BookMarked, MessageSquareText, ArrowRight } from 'lucide-react'

const tools = [
  {
    name: 'Perplexity',
    icon: Search,
    color: '#2E86AB',
    bg: '#EBF5FA',
    role: 'Recopilación y verificación de datos con fuentes citadas',
    input: 'Preguntas de investigación (sección 3)',
    output: 'Datos verificados + enlaces de fuentes originales',
  },
  {
    name: 'NotebookLM',
    icon: BookMarked,
    color: '#A23B72',
    bg: '#F7EDF3',
    role: 'Síntesis, cruce de fuentes y organización temática',
    input: 'Textos, PDFs y notas de Perplexity cargados como fuentes',
    output: 'Documento maestro sintetizado con conexiones entre temas',
  },
  {
    name: 'Claude',
    icon: MessageSquareText,
    color: '#21181b',
    bg: '#f0ebe3',
    role: 'Estructuración para producción: guiones, briefs, documentos de trabajo',
    input: 'Documento maestro de NotebookLM + brief del proyecto',
    output: 'Guiones narrativos, storyboards textuales, cronograma detallado, brief por pieza',
  },
]

export default function Workflow() {
  return (
    <div>
      <h2 className="section-title">Flujo de Herramientas</h2>
      <p className="section-subtitle">Pipeline de investigación · De los datos a la producción</p>

      {/* Pipeline — stacked on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
        {tools.map((tool, i) => {
          const Icon = tool.icon
          const isLast = i === tools.length - 1

          return (
            <div key={tool.name} className="flex flex-col md:flex-row items-stretch flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card flex-1 p-5 flex flex-col gap-4"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: tool.color }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{tool.name}</p>
                    <p className="text-xs text-muted leading-tight">{tool.role}</p>
                  </div>
                </div>

                {/* Input / Output */}
                <div className="space-y-3">
                  <div className="rounded-xl p-3" style={{ backgroundColor: tool.bg }}>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: tool.color }}
                    >
                      Qué entra
                    </p>
                    <p className="text-xs text-ink leading-relaxed">{tool.input}</p>
                  </div>
                  <div className="rounded-xl p-3 bg-bg">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">
                      Qué sale
                    </p>
                    <p className="text-xs text-ink leading-relaxed font-medium">{tool.output}</p>
                  </div>
                </div>
              </motion.div>

              {/* Arrow connector */}
              {!isLast && (
                <div className="flex items-center justify-center py-1 md:py-0 md:px-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                  >
                    <ArrowRight
                      size={20}
                      className="text-muted rotate-90 md:rotate-0"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <div className="mt-8 card p-4 flex gap-3 items-start">
        <div className="w-1 self-stretch rounded-full bg-accent flex-shrink-0" />
        <p className="text-sm text-ink leading-relaxed">
          <span className="font-semibold">Nota sobre Claude:</span> La síntesis en Claude es la última capa del proceso.
          Recibe el material ya organizado de NotebookLM y lo transforma en documentos de producción listos para usar
          — guiones, briefs por pieza, storyboards textuales.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-bg-alt text-center">
        <p className="font-display italic text-primary text-lg mb-1">Programa de Diseño Gráfico Areandina Valledupar</p>
        <p className="text-muted text-xs">Documento de trabajo — Sujeto a ajustes según fecha del evento · Revisado 26 de marzo de 2026</p>
      </div>
    </div>
  )
}
