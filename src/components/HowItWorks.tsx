import { Link } from 'react-router-dom'
import './sections.css'

const steps = [
  { num: 'Step 01', title: 'Site Survey', desc: 'We visit your site, assess roof area, shading, and energy needs for free.' },
  { num: 'Step 02', title: 'System Design', desc: 'Our experts design the optimal solar system layout and provide a detailed quote.' },
  { num: 'Step 03', title: 'Installation', desc: 'Certified technicians install the complete system with quality assurance.' },
  { num: 'Step 04', title: 'Handover', desc: 'We commission the system, get approvals, and hand over with full support.' },
]

const stepImages = [
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1624397558428-7528c6d2013e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558449028-b53c3e9789a0?auto=format&fit=crop&q=80&w=800',
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-watermark">Works</div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="how-header">
          <div>
            <p className="section-label">Our Process</p>
            <h2 className="section-heading">How It <span className="text-blue">Works</span></h2>
          </div>
          <Link to="/contact" className="btn btn-outline-blue">
            Start Your Project
          </Link>
        </div>

        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-card fade-up" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="how-card-img" style={{ backgroundImage: `url(${stepImages[i]})` }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,132,199,0.4)' }} />
              </div>
              <div className="how-card-body">
                <div className="how-step-num">{s.num}</div>
                <div className="how-card-title">{s.title}</div>
                <div className="how-card-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}