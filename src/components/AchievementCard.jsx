import { useState } from 'react'
import AchievementPhoto from './AchievementPhoto'

export default function AchievementCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const [override, setOverride] = useState(null)
  const expanded = override ?? hovered
  const photoId = `achievement-photo-${item.id}`

  return (
    <article className="xp-card"
      onPointerLeave={() => {
        setHovered(false)
        setOverride((value) => value === false ? null : value)
      }}
    >
      <div className="xp-card-top"><span className="xp-period">{item.date}</span><span className="xp-tag">{item.category}</span></div>
      <p className="achievement-result">{item.result}</p>
      <h2 id={`achievement-${item.id}`}>
        <button type="button" className="achievement-title-trigger" aria-expanded={expanded} aria-controls={photoId}
          onPointerEnter={(event) => {
            if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) setHovered(true)
          }}
          onClick={() => setOverride(!expanded)}>
          {item.title}
        </button>
      </h2>
      <div id={photoId} className={`achievement-photo-reveal${expanded ? ' expanded' : ''}`} aria-hidden={!expanded} inert={!expanded}>
        <div className="achievement-photo-reveal-inner">
          {item.description && <p className="achievement-description">{item.description}</p>}
          <AchievementPhoto key={item.photo?.src || item.id} photo={item.photo} title={item.title} year={item.year} onOpen={() => setOverride(true)} />
        </div>
      </div>
    </article>
  )
}
