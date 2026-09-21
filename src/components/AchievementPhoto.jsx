import { useRef, useState } from 'react'

export default function AchievementPhoto({ photo, title, year, onOpen }) {
  const dialogRef = useRef(null)
  const [failed, setFailed] = useState(false)

  if (!photo?.src || failed) {
    return <div className="achievement-photo-placeholder"><span aria-hidden="true" className="photo-year">{year}</span><span>PHOTO COMING SOON</span></div>
  }

  return (
    <>
      <button type="button" className="achievement-photo" aria-label={`View photo: ${title}`} onClick={() => { onOpen?.(); dialogRef.current.showModal() }}>
        <img src={photo.src} alt={photo.alt || title} loading="lazy" decoding="async" style={{ objectPosition: photo.position || 'center' }} onError={() => setFailed(true)} />
        <span>VIEW PHOTO ↗</span>
      </button>
      <dialog ref={dialogRef} className="achievement-lightbox" aria-label={`Photo: ${title}`} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close() }}>
        <div className="lightbox-content">
          <button type="button" autoFocus onClick={() => dialogRef.current.close()} aria-label="Close photo">Close ×</button>
          <img src={photo.src} alt={photo.alt || title} />
          <p>{photo.caption || title}</p>
        </div>
      </dialog>
    </>
  )
}
