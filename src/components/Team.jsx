import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Palette, Zap, BookOpen, Film, Layers, Music, X } from 'lucide-react'
import { departments } from '../data/team'
import MemberModal from './MemberModal'

const iconMap = { Star, Palette, Zap, BookOpen, Film, Layers, Music }

export default function Team() {
  const [selected, setSelected]         = useState(null)
  const [filterPending, setFilterPending] = useState(false)

  const confirmed = departments.flatMap((d) => d.members).filter((m) => m.confirmed).length
  const pending   = departments.flatMap((d) => d.members).filter((m) => !m.confirmed).length

  const openModal = (member, dept) => {
    if (!member.confirmed) return
    setSelected({ member, deptColor: dept.color, deptLabel: dept.label })
  }

  // When filter is on, only show depts that have pending members, and only those members
  const visibleDepts = departments
    .map((dept) => ({
      ...dept,
      members: filterPending ? dept.members.filter((m) => !m.confirmed) : dept.members,
    }))
    .filter((dept) => dept.members.length > 0)

  return (
    <div>
      <h2 className="section-title">Equipo de Producción</h2>
      <p className="section-subtitle">
        {confirmed} roles confirmados · {pending} por definir · Toca un miembro para ver sus responsabilidades
      </p>

      {/* Legend / filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilterPending(false)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
            !filterPending
              ? 'bg-primary text-white'
              : 'bg-bg-alt/40 text-muted border border-muted/30 hover:bg-primary/10'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Todos
        </button>
        <button
          onClick={() => setFilterPending(true)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
            filterPending
              ? 'bg-warm-red text-white'
              : 'bg-bg-alt/40 text-muted border border-muted/30 hover:bg-warm-red/10'
          }`}
        >
          {filterPending ? <X size={10} /> : <span className="w-1.5 h-1.5 rounded-full bg-muted/50 border border-muted/60" />}
          Por asignar {filterPending && `(${pending})`}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filterPending ? 'pending' : 'all'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visibleDepts.map((dept, i) => {
            const Icon = iconMap[dept.icon] || Film
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
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
        </motion.div>
      </AnimatePresence>

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
