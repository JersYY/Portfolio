import { useMemo, useState } from 'react'
import { achievements } from '../data/portfolio'
import './content-updates.css'
import AchievementTimeline from './AchievementTimeline'

const years = [...new Set(achievements.flatMap((item) => item.years || [item.year]))].sort().reverse()

export default function AchievementExplorer() {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('All years')
  const [category, setCategory] = useState('All')
  const filtered = useMemo(() => achievements.filter((item) =>
    (year === 'All years' || (item.years || [item.year]).includes(year)) &&
    (category === 'All' || item.category === category) &&
    `${item.title} ${item.result} ${item.date}`.toLowerCase().includes(query.trim().toLowerCase()),
  ), [query, year, category])
  const reset = () => { setQuery(''); setYear('All years'); setCategory('All') }

  return (
    <div className="achievement-explorer">
    <section className="panel achievement-controls" aria-label="Search and filter achievements">
      <div className="achievement-search">
        <label>Search achievements
          <input type="search" placeholder="Event, award, or result..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label>Year
          <select aria-label="Year" value={year} onChange={(event) => setYear(event.target.value)}>
            <option>All years</option>
            {years.map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
      </div>
      <div className="content-filter-bar">
        <div className="content-filters" role="group" aria-label="Filter achievements">
          {['All', 'Competition', 'Scholarship'].map((value) => (
            <button type="button" key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>
          ))}
        </div>
        <button className="filter-reset" type="button" onClick={reset} disabled={!query && year === 'All years' && category === 'All'}>Reset filters</button>
      </div>
      <p className="filter-count" role="status">{filtered.length} of {achievements.length} achievements</p>
    </section>
      {filtered.length > 0 && <AchievementTimeline items={filtered} />}
      {filtered.length === 0 && <p className="achievement-empty">No matching achievements. Try another search or reset your filters.</p>}
    </div>
  )
}
