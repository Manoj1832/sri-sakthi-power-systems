import { Link } from 'react-router-dom'
import './navbar-hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #0c1929 0%, #0284c7 40%, #0a1628 70%, #0c1929 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,193,7,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,193,7,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="hero-content">
        <h1 className="hero-display">
          SOLAR<br />
          <em>ENERGY</em>
        </h1>
        <p className="hero-sub">
          Powering Erode one rooftop at a time. OnGrid, Hybrid & Off-Grid solar solutions
          with top brands — Kirloskar, Adani, Waaree, Growatt & more.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/917358942468?text=Hi%2C%20I%20want%20a%20free%20solar%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Free Quote
          </a>
          <Link to="/products" className="btn btn-ghost">
            Explore Products
          </Link>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}