import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function AchievementPhoto({ photo, title, showCaption = true, loading = 'lazy', duplicate = false }) {
  const dialogRef = useRef(null)
  const [failed, setFailed] = useState(false)

  if (!photo?.src || failed) {
    return null
  }

  return (
    <>
      <button type="button" className="achievement-photo" tabIndex={duplicate ? -1 : undefined} aria-hidden={duplicate || undefined} aria-label={`View photo: ${title}`} onClick={() => dialogRef.current.showModal()}>
        <img src={photo.src} alt={photo.alt || title} loading={loading} decoding="async" style={{ objectPosition: photo.position || 'center', objectFit: photo.fit || 'cover' }} onError={() => setFailed(true)} />
        <span>VIEW PHOTO ↗</span>
      </button>
      {createPortal(<dialog ref={dialogRef} className="achievement-lightbox" aria-label={`Photo: ${title}`} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close() }}>
        <div className="lightbox-content">
          <button type="button" autoFocus onClick={() => dialogRef.current.close()} aria-label="Close photo">Close ×</button>
          <img src={photo.src} alt={photo.alt || title} loading="lazy" decoding="async" />
          {showCaption && <p>{photo.caption || title}</p>}
        </div>
      </dialog>, document.body)}
    </>
  )
}
