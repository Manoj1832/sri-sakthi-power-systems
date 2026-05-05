import { useEffect } from 'react'
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
    stat: '9+ Years',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  { 
    title: 'Top Brands', 
    desc: 'Dealing with 21+ renowned solar brands',
    stat: '21+ Brands',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  { 
    title: 'End-to-End Service', 
    desc: 'From consultation to after-sales support',
    stat: '100% Support',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  },
  { 
    title: 'Transparent Pricing', 
    desc: 'No hidden costs, upfront quotes',
    stat: 'Zero Hidden Costs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
]

export default function About() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .why-choose-section {
        position: relative;
        padding: 80px 0;
        background: linear-gradient(135deg, var(--gray-light) 0%, var(--gray-light) 60%, var(--blue-pale) 100%);
      }
      .why-choose-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(ellipse at center, var(--blue-pale) 0%, transparent 70%);
        pointer-events: none;
      }
      .why-choose-section .container {
        position: relative;
        z-index: 1;
      }
      .section-heading-highlight {
        position: relative;
        display: inline-block;
      }
      .section-heading-highlight::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 3px;
        background: var(--blue);
        border-radius: 2px;
        animation: underlineGrow 0.8s ease forwards;
        animation-delay: 0.5s;
      }
      @keyframes underlineGrow {
        to { width: 100%; }
      }
      .why-choose-card {
        position: relative;
        background: var(--white);
        border-radius: var(--radius);
        padding: 32px 24px;
        text-align: center;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        border: 1px solid var(--gray-mid);
        border-left: 3px solid transparent;
        transition: all var(--transition);
        overflow: hidden;
      }
      .why-choose-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, var(--blue-pale) 0%, transparent 100%);
        opacity: 0;
        transition: opacity var(--transition);
        pointer-events: none;
      }
      .why-choose-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(3,105,161,0.15);
        border-left-color: var(--blue-text);
      }
      .why-choose-card:hover::before {
        opacity: 1;
      }
      .why-choose-card:hover .why-choose-icon {
        background: var(--blue-text);
      }
      .why-choose-card:hover .why-choose-icon svg {
        stroke: var(--white);
      }
      .why-choose-icon {
        width: 56px;
        height: 56px;
        background: var(--blue-pale);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        transition: all var(--transition);
      }
      .why-choose-icon svg {
        stroke: var(--blue-text);
        transition: stroke var(--transition);
      }
      .why-choose-stat {
        display: block;
        font-family: var(--font-main);
        font-weight: 700;
        font-size: 14px;
        color: var(--yellow);
        margin-bottom: 8px;
        letter-spacing: 0.5px;
      }
      .why-choose-content h3 {
        font-family: var(--font-main);
        font-weight: 700;
        font-size: 18px;
        color: var(--text-dark);
        margin-bottom: 8px;
      }
      .why-choose-content p {
        font-size: 14px;
        color: var(--text-muted);
        line-height: 1.6;
        margin: 0;
      }
      .why-choose-cta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--dark);
        padding: 20px 32px;
        border-radius: var(--radius);
        margin-top: 40px;
        flex-wrap: wrap;
        gap: 16px;
      }
      .why-choose-cta-text {
        font-family: var(--font-main);
        font-weight: 600;
        font-size: 18px;
        color: var(--white);
      }
      .why-choose-cta-btn {
        background: var(--yellow);
        color: var(--dark);
        padding: 12px 24px;
        border-radius: var(--radius-sm);
        font-family: var(--font-main);
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all var(--transition);
        border: none;
        cursor: pointer;
      }
      .why-choose-cta-btn:hover {
        background: var(--yellow-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255,193,7,0.4);
      }
      @media (max-width: 768px) {
        .why-choose-cta {
          flex-direction: column;
          text-align: center;
        }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

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
              Experience the <span className="section-heading-highlight">Sri Sakthi</span> Difference
            </h2>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="why-choose-card fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="why-choose-icon">
                  {item.icon}
                </div>
                <span className="why-choose-stat">{item.stat}</span>
                <div className="why-choose-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-choose-cta">
            <span className="why-choose-cta-text">Ready to make the switch to solar?</span>
            <Link to="/contact" className="why-choose-cta-btn">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}