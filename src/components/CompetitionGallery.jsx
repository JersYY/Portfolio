import { useEffect, useRef, useState } from 'react'
import { achievements } from '../data/portfolio'
import { competitionPhotos } from '../data/competitionPhotos'
import AchievementPhoto from './AchievementPhoto'

const achievementPhotos = achievements
  .filter((item) => item.category === 'Competition')
  .flatMap((item) => (item.photos || (item.photo?.src ? [item.photo] : []))
    .filter((photo) => photo.src)
    .map((photo, index) => ({ ...photo, id: `${item.id}-${index}`, title: item.title, date: item.date })))

const photos = [...competitionPhotos, ...achievementPhotos]

export default function CompetitionGallery() {
  const railRef = useRef(null)
  const sequenceRef = useRef(null)
  const keyboardFocus = useRef(false)
  const pauseUntil = useRef(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const rail = railRef.current
    if (!rail || photos.length < 2 || !playing) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let previous = 0
    let position = rail.scrollLeft
    const tick = (time) => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0
      previous = time
      const photoOpen = Boolean(document.querySelector('.achievement-lightbox[open]'))
      if (!reducedMotion.matches && !keyboardFocus.current && time >= pauseUntil.current && !photoOpen && !document.hidden) {
        const cycleWidth = sequenceRef.current?.offsetWidth || 0
        if (cycleWidth > rail.clientWidth) {
          position = (position + elapsed * .055) % cycleWidth
          rail.scrollLeft = position
        }
      } else position = rail.scrollLeft
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playing])

  const scroll = (direction) => {
    pauseUntil.current = performance.now() + 900
    railRef.current?.scrollBy({
      left: direction * railRef.current.clientWidth * .8,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return (
    <section className="panel competition-gallery" aria-labelledby="competition-gallery-title">
      <div className="competition-gallery-head">
        <div><h2 id="competition-gallery-title">Competition Moments</h2><p>A glimpse of the competitions behind the milestones.</p></div>
        {photos.length > 1 && <div className="competition-gallery-controls" role="group" aria-label="Photo gallery controls">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous photos">←</button>
          <button type="button" className="gallery-autoplay" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause photo scrolling' : 'Resume photo scrolling'}>{playing ? 'Pause' : 'Play'}</button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next photos">→</button>
        </div>}
      </div>
      {photos.length === 0 ? <p className="competition-gallery-empty">Photos coming soon.</p> : (
        <div className="competition-gallery-rail" ref={railRef} tabIndex={0} role="region" aria-label="Competition photos, scroll horizontally"
          onFocus={(event) => { keyboardFocus.current = event.target.matches(':focus-visible') }}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) keyboardFocus.current = false }}
          onPointerDown={() => { keyboardFocus.current = false; pauseUntil.current = performance.now() + 1500 }}
          onPointerMove={(event) => { if (event.buttons) pauseUntil.current = performance.now() + 1500 }}
          onWheel={() => { pauseUntil.current = performance.now() + 1500 }}>
          {[0, 1].map((copy) => <div className="competition-gallery-sequence" key={copy} ref={copy === 0 ? sequenceRef : undefined}>
            {photos.map((photo) => <figure className="competition-gallery-item" key={photo.id}>
              <AchievementPhoto photo={photo} title={photo.title} showCaption={false} loading="eager" duplicate={copy === 1} />
            </figure>)}
          </div>)}
        </div>
      )}
    </section>
  )
}
