import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Palette, Zap, BookOpen, Film, Layers, Music } from 'lucide-react'
import { departments } from '../data/team'
import MemberModal from './MemberModal'

const iconMap = { Star, Palette, Zap, BookOpen, Film, Layers, Music }

export default function Team() {
  const [selected, setSelected] = useState(null) // { member, deptColor, deptLabel }

  const confirmed = departments.flatMap((d) => d.members).filter((m) => m.confirmed).length
  const pending   = departments.flatMap((d) => d.members).filter((m) => !m.confirmed).length

  const openModal = (member, dept) => {
    if (!member.confirmed) return
    setSelected({ member, deptColor: dept.color, deptLabel: dept.label })
  }

  return (
    <div>
      <h2 className="section-title">Equipo de Producción</h2>
      <p className="section-subtitle">
        {confirmed} roles confirmados · {pending} por definir · Toca un miembro para ver sus responsabilidades
      </p>

      {/* Legend */}
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
                  <li key={j}>
                    <button
                      onClick={() => openModal(member, dept)}
                      disabled={!member.confirmed}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                        member.confirmed
                          ? 'hover:bg-white/60 cursor-pointer group'
                          : 'opacity-50 cursor-default'
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-150 ${
                          member.confirmed
                            ? 'text-white group-hover:scale-110'
                            : 'bg-transparent border-2 border-dashed border-muted/40 text-muted/60'
                        }`}
                        style={member.confirmed ? { backgroundColor: dept.color } : {}}
                      >
                        {member.confirmed ? member.name.charAt(0).toUpperCase() : '?'}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-semibold leading-tight ${member.confirmed ? 'text-ink' : 'text-muted italic'}`}>
                          {member.name}
                        </p>
                        <p className="text-xs text-muted leading-snug mt-0.5">{member.role}</p>
                      </div>

                      {member.confirmed && (
                        <span
                          className="flex-shrink-0 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150 pr-0.5"
                          style={{ color: dept.color }}
                        >
                          Ver →
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {/* Modal */}
      <MemberModal
        member={selected?.member ?? null}
        deptColor={selected?.deptColor}
        deptLabel={selected?.deptLabel}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
