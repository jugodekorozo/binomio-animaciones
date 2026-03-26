import { motion } from 'framer-motion'
import { Users, Clock, Layers, ChevronDown } from 'lucide-react'
import LogoDG from './LogoDG'

const chips = [
  { icon: Users,  label: '8 integrantes · 4 duplas' },
  { icon: Clock,  label: '8–15 seg por pieza' },
  { icon: Layers, label: 'After Effects + IA' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

export default function Hero({ scrollTo }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-primary px-6 py-20">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-warm-red/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex justify-center mb-8"
        >
          <LogoDG height={52} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
        >
          Producción de<br />
          <span className="text-accent italic">Animaciones Cortas</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-white/70 text-base md:text-lg mb-2 font-medium"
        >
          Conversatorio: <span className="text-white">El Binomio de Oro de América</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display italic text-accent-light text-xl md:text-2xl mb-10"
        >
          «Desde la Creatividad a la Inteligencia Artificial»
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="w-16 h-px bg-accent/50 mx-auto mb-10"
        />

        {/* Chips */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {chips.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-white/90 text-sm"
            >
              <Icon size={14} className="text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Event badge */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="inline-block glass-dark text-accent text-sm font-semibold px-5 py-2 rounded-full">
            Festival de la Leyenda Vallenata 2026
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('cronograma')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/55 transition-colors"
        aria-label="Ver cronograma"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </div>
  )
}
