import AchievementPhoto from './AchievementPhoto'

export default function AchievementCard({ item }) {
  return (
    <article className="xp-card">
      <div className="xp-card-top"><span className="xp-period">{item.date}</span><span className="xp-tag">{item.category}</span></div>
      <p className="achievement-result">{item.result}</p>
      <h2 id={`achievement-${item.id}`}>{item.title}</h2>
      {item.description && <p className="achievement-description">{item.description}</p>}
      {item.photo?.src && <AchievementPhoto key={item.photo.src} photo={item.photo} title={item.title} />}
    </article>
  )
}
