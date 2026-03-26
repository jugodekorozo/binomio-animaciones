import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import LogoDG from './LogoDG'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.14, duration: 0.65, ease: 'easeOut' } }),
}

export default function Hero({ scrollTo }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-primary px-6 py-24">
      {/* Background: blobs + grid texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full bg-warm-red/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] texture-dark" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-0">

        {/* Logo */}
        <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="mb-10">
          <LogoDG height={54} />
        </motion.div>

        {/* Conversatorio label */}
        <motion.p
          custom={1} initial="hidden" animate="show" variants={fadeUp}
          className="text-accent/80 text-xs font-bold uppercase tracking-[0.28em] mb-5"
        >
          Conversatorio
        </motion.p>

        {/* Main title */}
        <motion.h1
          custom={2} initial="hidden" animate="show" variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-5"
        >
          Binomio de Oro<br />
          <span className="text-accent italic">de América</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={3} initial="hidden" animate="show" variants={fadeUp}
          className="font-display italic text-white/60 text-lg md:text-xl leading-snug mb-10"
        >
          de la creatividad a la<br className="hidden sm:block" /> inteligencia artificial
        </motion.p>

        {/* Divider */}
        <motion.div
          custom={4} initial="hidden" animate="show" variants={fadeUp}
          className="flex items-center gap-3 mb-10 w-full justify-center"
        >
          <div className="h-px flex-1 max-w-[80px] bg-accent/30" />
          <div className="w-1 h-1 rounded-full bg-accent/50" />
          <div className="h-px flex-1 max-w-[80px] bg-accent/30" />
        </motion.div>

        {/* Festival badge */}
        <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp} className="mb-5">
          <span className="inline-block glass-dark text-accent text-sm font-semibold px-5 py-2.5 rounded-full tracking-wide">
            59 Festival de la Leyenda Vallenata · 2026
          </span>
        </motion.div>

        {/* Director credit */}
        <motion.p
          custom={6} initial="hidden" animate="show" variants={fadeUp}
          className="text-white/40 text-xs font-medium tracking-widest uppercase"
        >
          Prof. Orlando Korzo
        </motion.p>

      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('cronograma')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.4 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/55 transition-colors"
        aria-label="Ver cronograma"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.button>
    </div>
  )
}
