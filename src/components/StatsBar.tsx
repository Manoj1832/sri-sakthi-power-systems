import './about.css'

const stats = [
  { icon: '', num: '300+',  label: 'Projects Completed' },
  { icon: '', num: '21+',   label: 'Brands Available' },
  { icon: '', num: '9+',    label: 'Years in Business' },
  { icon: '', num: '400+',  label: 'Happy Customers' },
]

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((s, i) => (
            <div className="stats-bar-item fade-up" key={i}>
              <div className="stats-bar-icon">{['🏗️', '⚡', '🏆', '😊'][i]}</div>
              <div className="stats-bar-num">{s.num}</div>
              <div className="stats-bar-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
