import { motion } from 'framer-motion'
import { Star, Palette, Zap, BookOpen, Film, Layers, Music } from 'lucide-react'
import { departments } from '../data/team'

const iconMap = { Star, Palette, Zap, BookOpen, Film, Layers, Music }

export default function Team() {
  const confirmed = departments.flatMap((d) => d.members).filter((m) => m.confirmed).length
  const pending   = departments.flatMap((d) => d.members).filter((m) => !m.confirmed).length

  return (
    <div>
      <h2 className="section-title">Equipo de Producción</h2>
      <p className="section-subtitle">
        {confirmed} roles confirmados · {pending} por definir
      </p>

      {/* Summary chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Confirmado
        </span>
        <span className="inline-flex items-center gap-1.5 bg-bg-alt/40 text-muted border border-muted/30 text-xs font-semibold px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-muted/50 border border-muted/60" />
          Por definir
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, i) => {
          const Icon = iconMap[dept.icon] || Film
          return (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card overflow-hidden"
            >
              {/* Department header */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ backgroundColor: dept.color }}
              >
                <Icon size={16} className="text-white/90" strokeWidth={1.8} />
                <span className="text-white font-semibold text-sm tracking-wide">{dept.label}</span>
              </div>

              {/* Members list */}
              <ul className="divide-y divide-bg-alt/60">
                {dept.members.map((member, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      member.confirmed ? '' : 'opacity-50'
                    }`}
                  >
                    {/* Avatar placeholder */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        member.confirmed
                          ? 'text-white'
                          : 'bg-transparent border-2 border-dashed border-muted/40 text-muted/60'
                      }`}
                      style={member.confirmed ? { backgroundColor: dept.color } : {}}
                    >
                      {member.confirmed
                        ? member.name.charAt(0).toUpperCase()
                        : '?'}
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-sm font-semibold leading-tight ${
                          member.confirmed ? 'text-ink' : 'text-muted italic'
                        }`}
                      >
                        {member.name}
                      </p>
                      <p className="text-xs text-muted leading-snug mt-0.5">{member.role}</p>
                    </div>

                    {member.confirmed && (
                      <span
                        className="ml-auto flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: dept.color }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
