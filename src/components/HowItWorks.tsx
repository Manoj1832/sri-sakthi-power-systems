import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './sections.css'

const steps = [
  {
    num: 'Step 01', title: 'Site Survey',
    desc: 'We visit your site, assess roof area, shading, and energy needs for free.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
  {
    num: 'Step 02', title: 'System Design',
    desc: 'Our experts design the optimal solar system layout and provide a detailed quote.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    ),
  },
  {
    num: 'Step 03', title: 'Installation',
    desc: 'Certified technicians install the complete system with quality assurance.',
    img: 'https://img.sanishtech.com/u/c3ad705c066a2634e55e35d98f95f426.webp',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
  },
  {
    num: 'Step 04', title: 'Handover',
    desc: 'We commission the system, get approvals, and hand over with full support.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    ),
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

        <div className="how-grid zigzag-grid">
          {steps.map((s, i) => (
            <div className={`how-card fade-up zigzag-item zigzag-${i % 2 === 0 ? 'top' : 'bottom'}`} key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="how-card-img" style={{
                backgroundImage: `url(${s.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,165,233,0.25)' }} />
              <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  width: 40, height: 40, zIndex: 2,
                  background: 'rgba(14,165,233,0.85)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}>
                  {s.icon}
                </div>
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