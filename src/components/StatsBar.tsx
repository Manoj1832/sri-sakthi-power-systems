import './about.css'

const stats = [
  { icon: 'https://cdn-icons-png.flaticon.com/48/1087/1087840.png', num: '300+',  label: 'Projects Completed' },
  { icon: 'https://cdn-icons-png.flaticon.com/48/3248/3248316.png', num: '21+',   label: 'Brands Available' },
  { icon: 'https://cdn-icons-png.flaticon.com/48/3135/3135783.png', num: '9+',    label: 'Years in Business' },
  { icon: 'https://cdn-icons-png.flaticon.com/48/1828/1828884.png', num: '400+',  label: 'Happy Customers' },
]

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((s, i) => (
            <div className="stats-bar-item fade-up" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="stats-bar-icon">
                <img src={s.icon} alt={s.label} style={{ width: 24, height: 24, filter: 'brightness(10)' }} />
              </div>
              <div className="stats-bar-num">{s.num}</div>
              <div className="stats-bar-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
