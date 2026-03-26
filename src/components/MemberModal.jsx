import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'

export default function MemberModal({ member, deptColor, deptLabel, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(250,245,216,0.92)',
                backdropFilter: 'blur(32px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.85)',
                boxShadow: '0 24px 60px rgba(33,24,27,0.22), inset 0 1.5px 0 rgba(255,255,255,0.95)',
              }}
            >
              {/* Header strip */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ backgroundColor: deptColor }}
              >
                <div>
                  <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                    {deptLabel}
                  </p>
                  <p className="text-white font-bold text-base leading-tight">{member.name}</p>
                  <p className="text-white/75 text-xs mt-0.5">{member.role}</p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              {/* Task list */}
              <div className="px-5 py-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">
                  Responsabilidades en la producción
                </p>
                <ul className="space-y-3">
                  {member.tasks.map((task, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm text-ink leading-snug"
                    >
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: deptColor }}
                      />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
