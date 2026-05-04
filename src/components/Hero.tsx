import { Link } from 'react-router-dom'
import './navbar-hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ background: '#fff' }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&q=80&w=1920)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.25,
      }} />
      {/* Gradient overlay */}
      <div className="hero-bg" />

      <div className="hero-content">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BlurText
            text="SOLAR ENERGY"
            className="hero-display"
            delay={150}
            animateBy="words"
            direction="top"
          />
        </div>
        <p className="hero-sub">
          Powering Tamil Nadu one rooftop at a time. OnGrid, Hybrid & Off-Grid solar solutions
          with top brands — Kirloskar, Adani, Waaree, Growatt & more.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/917358942468?text=Hi%2C%20I%20want%20a%20free%20solar%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="" style={{ width: 18, height: 18, filter: 'brightness(10)' }} />
            Get Free Quote
          </a>
          <Link to="/products" className="btn btn-outline-blue">
            <img src="https://cdn-icons-png.flaticon.com/24/3248/3248316.png" alt="" style={{ width: 18, height: 18 }} />
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  )
}