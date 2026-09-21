import { useState } from 'react'
import { experience } from '../data/portfolio'

export default function ExperienceConsole() {
  const [active, setActive] = useState(0)
  const [transition, setTransition] = useState(0)
  const item = experience[active]

  return (
    <section className="experience-console" aria-label="Professional experience">
      <div className="experience-directory" role="group" aria-label="Choose an experience">
        <p className="console-eyebrow">CAREER / {String(experience.length).padStart(2, '0')} RECORDS</p>
        {experience.map((entry, index) => (
          <button key={entry.org} type="button" aria-pressed={active === index} aria-controls="experience-record" onClick={() => { setActive(index); setTransition((value) => value + 1) }}>
            <span className="experience-record-number">{String(index + 1).padStart(2, '0')}</span>
            <span><strong>{entry.role}</strong><small>{entry.org}</small><small>{entry.period}</small></span>
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <article key={transition} id="experience-record" className="experience-record" aria-live="polite" aria-atomic="true">
        <div className="record-status"><span className="console-eyebrow">RECORD / {String(active + 1).padStart(2, '0')}</span><span>{item.current ? '● CURRENT INTERNSHIP' : item.period.endsWith('Present') ? '● ONGOING' : 'COMPLETED'}</span></div>
        <p className="record-period">{item.period}</p>
        <h2>{item.role}</h2>
        <p className="record-company">{item.org}</p>
        <div className="record-description">
          <h3>{item.current ? 'Current role' : 'Experience overview'}</h3>
          {item.description && <p>{item.description}</p>}
          {item.bullets.length > 0 && <ul className="clean-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </div>
        <div className="record-footer"><span>STEVEN ANTHONY / EXPERIENCE</span><span aria-hidden="true">▰ ▰ ▰ ▱ ▱</span></div>
      </article>
    </section>
  )
}
