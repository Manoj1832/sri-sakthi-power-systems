import './bottom-sections.css'

const articles = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f59e0b' }}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>,
    tag: 'Solar Tips',
    title: 'How to Choose the Right Solar Panel for Your Home',
    excerpt: 'Understanding wattage, efficiency ratings, and warranty terms before you invest in solar panels for your rooftop.',
    date: 'May 2026',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0ea5e9' }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    tag: 'OnGrid Systems',
    title: 'Net Metering in Tamil Nadu — Everything You Need to Know',
    excerpt: 'A complete guide to TANGEDCO net metering policy, eligibility, subsidy schemes, and how to apply in Tamil Nadu.',
    date: 'Apr 2026',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><rect x="4" y="6" width="16" height="16" rx="2" ry="2"></rect><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>,
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
