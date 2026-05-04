import { Link } from 'react-router-dom'
import './sections.css'

const steps = [
  {
    num: 'Step 01', title: 'Site Survey',
    desc: 'We visit your site, assess roof area, shading, and energy needs for free.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    icon: 'https://cdn-icons-png.flaticon.com/48/2920/2920298.png',
  },
  {
    num: 'Step 02', title: 'System Design',
    desc: 'Our experts design the optimal solar system layout and provide a detailed quote.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=600',
    icon: 'https://cdn-icons-png.flaticon.com/48/1087/1087815.png',
  },
  {
    num: 'Step 03', title: 'Installation',
    desc: 'Certified technicians install the complete system with quality assurance.',
    img: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=600',
    icon: 'https://cdn-icons-png.flaticon.com/48/1995/1995574.png',
  },
  {
    num: 'Step 04', title: 'Handover',
    desc: 'We commission the system, get approvals, and hand over with full support.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600',
    icon: 'https://cdn-icons-png.flaticon.com/48/1828/1828640.png',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
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
              <div className="how-card-img" style={{
                backgroundImage: `url(${s.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,165,233,0.25)' }} />
                <img src={s.icon} alt={s.title} style={{
                  position: 'absolute', bottom: 12, right: 12,
                  width: 36, height: 36, filter: 'brightness(10) drop-shadow(0 2px 6px rgba(0,0,0,0.3))',
                  zIndex: 2,
                }} />
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