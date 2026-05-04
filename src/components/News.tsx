import './bottom-sections.css'

const articles = [
  {
    icon: '☀️',
    tag: 'Solar Tips',
    title: 'How to Choose the Right Solar Panel for Your Home',
    excerpt: 'Understanding wattage, efficiency ratings, and warranty terms before you invest in solar panels for your rooftop.',
    date: 'May 2026',
  },
  {
    icon: '⚡',
    tag: 'OnGrid Systems',
    title: 'Net Metering in Tamil Nadu — Everything You Need to Know',
    excerpt: 'A complete guide to TANGEDCO net metering policy, eligibility, subsidy schemes, and how to apply in Erode.',
    date: 'Apr 2026',
  },
  {
    icon: '🔋',
    tag: 'Hybrid Solar',
    title: 'Solar + Battery: Why Hybrid Systems Are the Future',
    excerpt: 'Hybrid systems with battery backup give you uninterrupted power even during grid failures. Here\'s why they\'re worth it.',
    date: 'Apr 2026',
  },
]

export default function News() {
  return (
    <section className="news-section" id="news">
      <div className="container">
        <div className="news-header fade-up">
          <div>
            <p className="section-label">Latest Updates</p>
            <h2 className="section-heading">Latest <span className="text-blue">News</span></h2>
          </div>
          <a href="#" className="btn btn-outline-blue">View All →</a>
        </div>

        <div className="news-grid">
          {articles.map((a, i) => (
            <div className="news-card fade-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="news-card-img">{a.icon}</div>
              <div className="news-card-body">
                <div className="news-tag">{a.tag}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '10px' }}>{a.date}</div>
                <div className="news-card-title">{a.title}</div>
                <div className="news-card-excerpt">{a.excerpt}</div>
                <div className="news-read-more">Read More →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
