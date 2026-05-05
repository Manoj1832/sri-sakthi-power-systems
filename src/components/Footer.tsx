import { Link } from 'react-router-dom'
import Logo from './Logo'
import './bottom-sections.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
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
              <a href="https://wa.me/917358942468" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.162-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a5.26 5.26 0 01-2.807-.876l-.36-.211c-.304-.185-.584-.356-.84-.507-.112-.065-.21-.12-.296-.194-.087-.075-.174-.149-.26-.226-.085-.077-.197-.132-.32-.173-.124-.04-.248-.065-.392-.065-.145 0-.298.025-.43.075-.132.05-.26.12-.414.198-.155.078-.33.185-.547.323-.216.138-.485.342-.806.608l-.503.432c-.218.184-.452.396-.7.64-.248.244-.48.514-.703.783-.223.27-.42.559-.593.869-.172.31-.285.64-.354.992-.07.352-.11.711-.11 1.142 0 .43.035.858.106 1.28l.053.455c.07.34.163.677.28 1.01.116.333.262.652.44.959.178.307.392.592.64.857.249.264.526.503.833.717.307.214.648.402 1.018.564.37.162.765.284 1.18.366.415.082.84.12 1.256.114.417-.005.83-.06 1.228-.165.398-.105.782-.273 1.146-.504.364-.23.695-.507.99-.832.295-.324.565-.674.81-1.048l.375-.58c.25-.395.476-.803.676-1.222.2-.42.373-.853.52-1.297.147-.444.268-.9.364-1.363.095-.464.165-.93.212-1.397.047-.467.07-.93.07-1.388 0-.46-.025-.917-.075-1.37l-.077-.71c-.053-.404-.135-.806-.245-1.202-.11-.396-.247-.782-.412-1.158-.165-.375-.354-.74-.567-1.094-.213-.354-.45-.697-.709-1.03l-.56-.72c-.253-.325-.52-.64-.8-.945l-.67-.685c-.327-.333-.667-.65-1.02-.95l-.807-.686c-.352-.3-.717-.584-1.095-.852l-.88-.627c-.378-.27-.77-.524-1.177-.762-.408-.238-.83-.459-1.264-.664l-.987-.465c-.454-.214-.92-.412-1.4-.594-.48-.182-.972-.347-1.476-.495-.504-.148-1.02-.28-1.55-.394-.53-.114-1.072-.212-1.628-.295-.556-.083-1.125-.15-1.708-.2-.583-.05-1.177-.084-1.783-.103-.606-.02-1.22-.024-1.835-.012h-.04c-.614.012-1.228.043-1.84.093-.612.05-1.22.12-1.82.212-.6.092-1.19.205-1.77.34-.58.134-1.15.29-1.71.466-.56.177-1.108.375-1.645.594-.537.22-1.06.46-1.568.722-.51.261-1.004.543-1.483.845-.48.302-.942.624-1.39.966-.448.342-.877.704-1.29 1.086-.413.382-.807.783-1.183 1.203-.376.42-.733.859-1.07 1.317-.338.458-.656.934-.956 1.428-.3.494-.58 1.006-.84 1.537-.26.532-.5 1.083-.72 1.653-.22.57-.418 1.154-.595 1.752-.177.598-.333 1.21-.468 1.835-.135.625-.248 1.262-.34 1.91-.092.648-.163 1.304-.214 1.97-.05.666-.08 1.336-.09 2.008v.008c.01.672.04 1.343.09 2.01.05.667.122 1.33.214 1.99.092.66.205 1.31.34 1.95.135.64.29 1.27.468 1.9.177.63.374 1.245.595 1.85.22.605.46 1.185.72 1.74.26.557.54 1.09.84 1.6.3.51.62 1 .956 1.47.337.47.694.93 1.07 1.38.376.45.77.9 1.183 1.34.413.44.842.87 1.29 1.29.448.42.91.82 1.39 1.2.48.38.98.74 1.483 1.08.504.34 1.03.66 1.568.96.538.3 1.093.57 1.645.81.552.24 1.123.45 1.71.63.587.18 1.195.33 1.82.45.625.12 1.266.21 1.923.27.657.06 1.33.09 2.008.09h.04c.678-.01 1.36-.04 2.03-.09.67-.05 1.34-.12 2-.21.66-.09 1.31-.2 1.95-.34.64-.13 1.275-.28 1.9-.45.625-.17 1.24-.36 1.835-.58.595-.22 1.175-.47 1.74-.75.565-.28 1.113-.59 1.645-.93.532-.34 1.043-.72 1.532-1.13.49-.41.96-.85 1.408-1.32.448-.47.873-.97 1.275-1.5.402-.53.782-1.08 1.14-1.65.358-.57.694-1.16 1.007-1.77.313-.61.603-1.24.87-1.89.267-.65.51-1.32.73-2.01.22-.69.416-1.4.59-2.12.174-.72.323-1.46.447-2.21.124-.75.222-1.52.294-2.29.072-.77.118-1.56.14-2.35l.008-.35V14.382z"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
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
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>18/16, Kumaran Towers Road, Thindal, Erode - 638012, Tamil Nadu</span>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <div>
                <a href="tel:+917358942468">+91 73589 42468</a><br />
                <a href="tel:+919994347579">+91 99943 47579</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:srisakthipowersystemserd@gmail.com">srisakthipowersystemserd@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            2026 <span>Sri Sakthi Power Systems</span>. All rights reserved.
            Proprietor: Sathishkumar A
          </div>
          <Link to="/admin" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}