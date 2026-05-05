import { Link } from 'react-router-dom'
import './about.css'

const trustBadges = [
  { title: 'GST Registered', desc: 'GSTIN: 33KGKPS8891F2ZI' },
  { title: 'Verified Dealer', desc: 'Authorised by top brands' },
  { title: 'Quality Assured', desc: 'ISO certified processes' },
]

const whyChooseUs = [
  { 
    title: 'Expert Team', 
    desc: 'Certified technicians with 9+ years experience',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  { 
    title: 'Top Brands', 
    desc: 'Dealing with 21+ renowned solar brands',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  },
  { 
    title: 'End-to-End Service', 
    desc: 'From consultation to after-sales support',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  { 
    title: 'Transparent Pricing', 
    desc: 'No hidden costs, upfront quotes',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap fade-up">
            <img
              src="./premium-instalation.jpg"
              alt="Premium Solar Installation"
            />
            <div className="about-img-badge">
              Since 2016
            </div>
          </div>

          <div className="fade-up">
            <p className="section-label">About Sri Sakthi Power Systems</p>
            <h2 className="section-heading">
              Your Trusted Partner for<br />
              <span className="text-blue">Solar Energy Solutions</span>
            </h2>
            <p className="about-body">
              We are a premier solar energy company based in Tamil Nadu, committed to 
              delivering clean and sustainable energy solutions for homes, businesses, 
              and industries. With years of expertise and a customer-first approach, 
              we've helped hundreds of families and businesses transition to solar energy.
            </p>

            <div className="trust-badges">
              {trustBadges.map((badge, i) => (
                <div key={i} className="trust-badge">
                  <div className="trust-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <div className="trust-title">{badge.title}</div>
                    <div className="trust-desc">{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <div className="about-stat-num">300+</div>
                <div className="about-stat-label">Projects Completed</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">9+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">21+</div>
                <div className="about-stat-label">Partner Brands</div>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Get Free Consultation
            </Link>
          </div>
        </div>

        <div className="why-choose-section">
          <div className="section-header-center">
            <p className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</p>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>
              Experience the <span className="text-blue">Sri Sakthi Difference</span>
            </h2>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="why-choose-card fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="why-choose-icon">
                  {item.icon}
                </div>
                <div className="why-choose-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}