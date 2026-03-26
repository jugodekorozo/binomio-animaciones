import { useState, useEffect } from 'react'
import { Home, CalendarDays, BookOpen, Layers, Users, GitBranch } from 'lucide-react'
import LogoDG from './LogoDG'

const navItems = [
  { key: 'inicio',        label: 'Inicio',    Icon: Home },
  { key: 'cronograma',    label: 'Días',      Icon: CalendarDays },
  { key: 'investigacion', label: 'Invest.',   Icon: BookOpen },
  { key: 'tecnica',       label: 'Técnica',   Icon: Layers },
  { key: 'equipo',        label: 'Equipo',    Icon: Users },
  { key: 'flujo',         label: 'Flujo',     Icon: GitBranch },
]

export default function Nav({ scrollTo, sectionRefs }) {
  const [active, setActive] = useState('inicio')

  // Hero is dark; all other sections are light/beige
  const isDark = active === 'inicio'

  useEffect(() => {
    const observers = []

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(key) },
        { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
      )
      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionRefs])

  return (
    <>
      {/* Bottom nav — mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-nav-dark border-t border-white/10 transition-all duration-500">
        <ul className="flex items-center justify-around h-16">
          {navItems.map(({ key, label, Icon }) => {
            const isActive = active === key
            return (
              <li key={key}>
                <button
                  onClick={() => scrollTo(key)}
                  className={`flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-lg transition-all duration-200 ${
                    isActive ? 'text-accent' : 'text-white/40 hover:text-white/70'
                  }`}
                  aria-label={label}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                  <span className="text-[9px] font-medium tracking-wide">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Top nav — desktop: adapts to section background */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-8 transition-all duration-500 ${
          isDark ? 'glass-nav-dark' : 'glass-nav-light'
        }`}
      >
        <LogoDG height={36} light={!isDark} />
        <ul className="flex items-center gap-1">
          {navItems.map(({ key, label, Icon }) => {
            const isActive = active === key
            return (
              <li key={key}>
                <button
                  onClick={() => scrollTo(key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-accent bg-white/10'
                        : 'text-warm-red bg-primary/8'
                      : isDark
                        ? 'text-white/60 hover:text-white hover:bg-white/5'
                        : 'text-ink/60 hover:text-ink hover:bg-primary/5'
                  }`}
                >
                  <Icon size={15} strokeWidth={isActive ? 2.5 : 1.5} />
                  {label === 'Invest.' ? 'Investigación' : label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
