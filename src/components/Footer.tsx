import { Link } from 'react-router-dom'
import Logo from './Logo'
import './bottom-sections.css'

const quickLinks = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/products',  label: 'Products' },
  { to: '/projects',  label: 'Projects' },
  { to: '/contact',   label: 'Contact' },
]

const productLinks = [
  'Solar Panels', 'Solar Inverters', 'OnGrid Plants',
  'Hybrid Plants', 'Off-Grid Plants', 'Solar Water Heater',
  'Solar Pumps', 'Solar Street Lights',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="md" />
            </div>
            <p className="footer-desc">
              Your trusted solar energy partner. We supply, install, and
              maintain solar systems for homes, businesses, and industries across
              Tamil Nadu.
            </p>
            <div className="footer-gstin">GSTIN: 33KGKPS8891F2ZI</div>
            <div className="footer-socials">
              <a href="https://wa.me/917358942468" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">💬</a>
              <a href="#" className="footer-social-btn" aria-label="Facebook">📘</a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">📸</a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">▶️</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              {quickLinks.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Our Products</div>
            <div className="footer-links">
              {productLinks.map(p => <a key={p} href="/products">{p}</a>)}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <span className="icon">📍</span>
              <span>18/16, Kumaran Towers Road, Thindal, Erode – 638012, Tamil Nadu</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📞</span>
              <div>
                <a href="tel:+917358942468">+91 73589 42468</a><br />
                <a href="tel:+919994347579">+91 99943 47579</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="icon">✉️</span>
              <a href="mailto:srisakthipowersystemserd@gmail.com">
                srisakthipowersystemserd@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="icon">🕐</span>
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 <span>Sri Sakthi Power Systems</span>. All rights reserved.
            Proprietor: Sathishkumar A
          </div>
          <Link to="/admin" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.2)'}>
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}
