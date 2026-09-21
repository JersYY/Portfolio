import { useEffect, useRef } from 'react'
import './cyber-cursor.css'

const interactive = 'a[href], button:not(:disabled), [role="button"], summary, select, input[type="checkbox"], input[type="radio"], label[for]'
const native = 'textarea, input:not([type="checkbox"]):not([type="radio"]), [contenteditable="true"], :disabled'

export default function CyberCursor() {
  const ringRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const ring = ringRef.current
    let frame = 0
    let x = 0
    let y = 0
    const hide = () => {
      ring.classList.remove('visible', 'pressed')
      document.documentElement.classList.remove('cyber-cursor-active')
      cancelAnimationFrame(frame)
      frame = 0
    }
    const move = (event) => {
      if (!media.matches || event.pointerType !== 'mouse') { hide(); return }
      document.documentElement.classList.add('cyber-cursor-active')
      const target = event.target instanceof Element ? event.target : null
      ring.classList.toggle('interactive', Boolean(target?.closest(interactive)))
      // Native text cursors stay usable; native dialogs render above decorative overlays.
      ring.classList.toggle('visible', !target?.closest(`${native}, dialog`))
      x = event.clientX
      y = event.clientY
      if (!frame) frame = requestAnimationFrame(() => {
        ring.style.transform = `translate3d(${x}px, ${y}px, 0)`
        frame = 0
      })
    }
    const leave = (event) => { if (!event.relatedTarget) hide() }
    const down = () => ring.classList.add('pressed')
    const up = () => ring.classList.remove('pressed')
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', move, { passive: true })
    window.addEventListener('pointerout', leave)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    window.addEventListener('blur', hide)
    media.addEventListener('change', hide)
    return () => {
      hide()
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', move)
      window.removeEventListener('pointerout', leave)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('blur', hide)
      media.removeEventListener('change', hide)
    }
  }, [])

  return <div ref={ringRef} className="cyber-cursor-ring" aria-hidden="true"><span /></div>
}
