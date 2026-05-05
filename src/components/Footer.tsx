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

const contactItems = [
  { label: 'Address', value: '18/16, Kumaran Towers Road, Thindal, Erode - 638012, Tamil Nadu' },
  { label: 'Phone', value: '+91 73589 42468 / +91 99943 47579' },
  { label: 'Email', value: 'srisakthipowersystemserd@gmail.com' },
  { label: 'Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM' },
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
              <a href="https://wa.me/917358942468" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.493.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a5.593 5.593 0 0 1-3.594-1.342c-.056-.104-.081-.209-.081-.333-.003-.124.008-.247.048-.368.045-.136.119-.274.194-.406.093-.163.186-.326.284-.485.108-.177.207-.353.299-.526.089-.162.172-.327.244-.493.076-.174.142-.352.2-.53.067-.186.123-.374.17-.564.054-.205.089-.414.114-.628.022-.188.033-.378.033-.571 0-.124-.008-.251-.025-.375-.022-.163-.061-.328-.109-.495-.056-.193-.129-.392-.214-.594-.097-.231-.218-.468-.359-.71-.161-.276-.352-.56-.548-.844-.227-.328-.488-.672-.78-1.018-.324-.382-.688-.794-1.074-1.232-.439-.501-.908-1.037-1.411-1.622-.548-.639-1.066-1.341-1.482-2.071-.451-.794-.819-1.682-1.057-2.593-.232-.889-.314-1.836-.279-2.753.034-.895.162-1.78.394-2.636.254-.938.654-1.83 1.168-2.638.548-.862 1.229-1.632 2.057-2.277.9-.704 1.936-1.22 3.058-1.504 1.184-.299 2.442-.406 3.67-.34 1.242.068 2.45.432 3.51.996 1.057.563 1.907 1.355 2.48 2.277.628 1.01 1.035 2.138 1.232 3.347.201 1.234.24 2.494.142 3.742-.095 1.217-.318 2.402-.68 3.538-.389 1.216-.883 2.31-1.52 3.246-.695 1.018-1.49 1.893-2.387 2.605-.912.722-1.868 1.344-2.87 1.845-1.006.503-2.046.914-3.107 1.21-1.074.3-2.164.494-3.251.562-.981.062-1.96.024-2.931-.113-.948-.134-1.881-.43-2.74-.855-.876-.435-1.695-.978-2.414-1.653-.766-.718-1.416-1.537-1.947-2.432-.542-.916-.972-1.888-1.284-2.879-.297-.943-.46-1.92-.5-2.913-.04-.968.008-1.931.148-2.884.14-.967.38-1.893.713-2.75.348-.9.795-1.742 1.34-2.503.543-.758 1.17-1.45 1.876-2.058.71-.612 1.488-1.162 2.329-1.636.852-.48 1.77-.878 2.74-1.178.981-.304 2.015-.477 3.061-.512 1.069-.036 2.136.03 3.17.192 1.028.162 2.01.433 2.913.802.9.368 1.74.838 2.501 1.397.772.568 1.485 1.21 2.12 1.914.633.702 1.213 1.45 1.722 2.228.507.776.938 1.6 1.285 2.453.347.852.62 1.743.82 2.65.2.906.33 1.83.39 2.75.06.937.045 1.876-.044 2.81-.09.96-.253 1.9-.49 2.8-.242.922-.563 1.81-.953 2.641-.42.9-.93 1.73-1.52 2.468-.6.75-1.285 1.43-2.05 2.02-.78.6-1.62 1.12-2.51 1.55-.91.44-1.87.78-2.86 1.01-.97.23-1.97.37-2.96.42-.99.05-1.99.01-2.98-.12z"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
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
            {contactItems.map((item, i) => (
              <div key={i} className="footer-contact-item">
                <span className="icon">
                  {i === 0 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  {i === 1 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                  {i === 2 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  {i === 3 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                </span>
                {i === 1 ? (
                  <div>
                    <a href="tel:+917358942468">+91 73589 42468</a><br />
                    <a href="tel:+919994347579">+91 99943 47579</a>
                  </div>
                ) : i === 2 ? (
                  <a href="mailto:srisakthipowersystemserd@gmail.com">{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            2026 <span>Sri Sakthi Power Systems</span>. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://your-portfolio-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-developed-by"
              title="View Developer Portfolio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Developed by Manoj
            </a>
            <Link to="/admin" className="footer-admin-trigger" title="Admin">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}