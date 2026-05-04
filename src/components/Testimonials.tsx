import { useState, useEffect } from 'react'
import './bottom-sections.css'

function loadTestimonials() {
  const stored = localStorage.getItem('ssp_testimonials')
  if (stored) {
    try { return JSON.parse(stored) } catch { return [] }
  }
  return []
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(loadTestimonials())

  useEffect(() => {
    const handle = () => setTestimonials(loadTestimonials())
    window.addEventListener('ssp_data_update', handle)
    return () => window.removeEventListener('ssp_data_update', handle)
  }, [])

  if (!testimonials.length) return null

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-grid">
          <div className="testimonial-img fade-up">☀️</div>
          <div className="testimonial-content fade-up">
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>
              What Our <span className="text-blue">Customers</span> Say
            </h2>
            <p className="testimonial-body">
              Real experiences from homeowners and businesses who made the switch to solar with Sri Sakthi Power Systems.
            </p>
            {testimonials.slice(0, 2).map((t: { id: string; name: string; location: string; quote: string; rating: number; avatar: string }) => (
              <div className="testimonial-card" key={t.id} style={{ marginBottom: '20px' }}>
                <div className="stars" style={{ color: 'var(--yellow)' }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: 'var(--yellow)', color: 'var(--dark)' }}>{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
