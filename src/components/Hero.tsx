import { useState } from 'react'
import BlurText from './BlurText'
import QuoteModal from './QuoteModal'
import './navbar-hero.css'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSubject, setModalSubject] = useState('')

  const handleOpenModal = (subject: string) => {
    setModalSubject(subject)
    setIsModalOpen(true)
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text-col fade-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', justifyContent: 'var(--justify-center, flex-start)' }}>
              <BlurText
                text="Solar Energy"
                className="hero-display"
                delay={150}
                animateBy="words"
                direction="top"
                rootMargin="-50px"
              />
              <svg style={{ marginTop: '-24px' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" fill="#fef08a"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>
            <p className="hero-sub">
              We provide complete solar energy solutions to power your home and business. Reliable, high-efficiency systems that reduce costs and drive sustainability.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => handleOpenModal('General Quote')} className="btn btn-primary" style={{ borderRadius: '100px', padding: '14px 28px', border: 'none', cursor: 'pointer' }}>
                Get Quote &nbsp; <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Bento Column */}
          <div className="hero-bento fade-up" style={{ transitionDelay: '200ms' }}>
            {/* Top Left - Large Image */}
            <div className="bento-item bento-large">
              <img className="bento-img" src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800" alt="Solar Panels" />
            </div>
            
            {/* Top Right - Stats */}
            <div className="bento-item bento-text-card">
              <div className="bento-num">300+</div>
              <div className="bento-label">Projects successfully delivered in Tamil Nadu</div>
            </div>

            {/* Middle Right - Small Image */}
            <div className="bento-item">
              <img className="bento-img" src="/image.png" alt="Solar Setup" />
            </div>

            {/* Bottom Left - Wide Info Card */}
            <div className="bento-item bento-wide bento-text-card" style={{ background: '#0ea5e9', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>Ready For Future</span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                Green Energy<br />Make Bold Impact
              </h3>
            </div>

            {/* Bottom Right - Tall Image */}
            <div className="bento-item bento-tall">
              <img className="bento-img" src="/Bottom Right - Tall Image.png" alt="Engineer" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={modalSubject}
      />
    </section>
  )
}