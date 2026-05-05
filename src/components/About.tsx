import { Link } from 'react-router-dom'
import './about.css'

const trustBadges = [
  { icon: '🏢', title: 'GST Registered', desc: 'GSTIN: 33KGKPS8891F2ZI' },
  { icon: '⭐', title: 'Verified Dealer', desc: 'Authorised by top brands' },
  { icon: '🛡️', title: 'Quality Assured', desc: 'ISO certified processes' },
]

const whyChooseUs = [
  { icon: '✓', title: 'Expert Team', desc: 'Certified technicians with 9+ years experience' },
  { icon: '✓', title: 'Top Brands', desc: 'Dealing with 21+ renowned solar brands' },
  { icon: '✓', title: 'End-to-End Service', desc: 'From consultation to after-sales support' },
  { icon: '✓', title: 'Transparent Pricing', desc: 'No hidden costs, upfront quotes' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap fade-up">
            <img
              src="https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1200"
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
                  <span className="trust-icon">{badge.icon}</span>
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
                <div className="why-choose-icon">{item.icon}</div>
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