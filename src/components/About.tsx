import { Link } from 'react-router-dom'
import './about.css'

const trustBadges = [
  { title: 'GST Registered', desc: 'GSTIN: 33KGKPS8891F2ZI' },
  { title: 'Verified Dealer', desc: 'Authorised by top brands' },
  { title: 'Quality Assured', desc: 'ISO certified processes' },
]

const whyChooseUs = [
  { title: 'Expert Team', desc: 'Certified technicians with 9+ years experience' },
  { title: 'Top Brands', desc: 'Dealing with 21+ renowned solar brands' },
  { title: 'End-to-End Service', desc: 'From consultation to after-sales support' },
  { title: 'Transparent Pricing', desc: 'No hidden costs, upfront quotes' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap fade-up">
            <img
              src="https://kommodo.ai/i/VLNd3YWhwmZVVFgTLpdd"
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
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