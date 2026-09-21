import { useEffect, useRef } from 'react'
import AchievementCard from './AchievementCard'

export default function AchievementTimeline({ items }) {
  const railRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const rail = railRef.current
      if (!rail) return
      const vh = window.innerHeight
      const staticLayout = reducedMotion.matches || window.matchMedia('(pointer: coarse)').matches
      rail.querySelectorAll('.xp-node').forEach((node) => {
        const rect = node.getBoundingClientRect()
        const delta = (rect.top + rect.height / 2 - vh / 2) / vh
        node.style.setProperty('--shift', staticLayout ? '0px' : `${Math.max(-24, Math.min(24, delta * 46)).toFixed(1)}px`)
        node.style.setProperty('--ghost', staticLayout ? '0px' : `${Math.max(-40, Math.min(40, delta * -70)).toFixed(1)}px`)
      })
      const rect = rail.getBoundingClientRect()
      fillRef.current.style.height = `${Math.min(100, Math.max(0, (vh * .5 - rect.top) / (rect.height || 1) * 100))}%`
      raf = 0
    }
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update) }
    schedule()
    const observer = new ResizeObserver(schedule)
    observer.observe(railRef.current)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reducedMotion.addEventListener('change', schedule)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reducedMotion.removeEventListener('change', schedule)
      cancelAnimationFrame(raf)
    }
  }, [items])

  return (
    <div className="xp-parallax achievement-timeline" ref={railRef}>
      <div className="xp-spine" aria-hidden="true"><span className="xp-spine-fill" ref={fillRef} /></div>
      {items.map((item, index) => (
        <section className={`xp-node ${index % 2 === 0 ? 'left' : 'right'} ${item.firstPlace ? 'achievement-first' : ''}`} key={item.id} aria-labelledby={`achievement-${item.id}`}>
          <span className="xp-dot" aria-hidden="true" />
          <span className="xp-ghost" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <AchievementCard item={item} />
        </section>
      ))}
    </div>
  )
}
