import { Link } from 'react-router-dom'
import CardNav from './CardNav'
import './navbar-hero.css'

export default function Hero() {
  const navItems = [
    {
      label: "Home",
      bgColor: "#0284c7",
      textColor: "#fff",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "Learn about us" },
        { label: "Services", href: "/products", ariaLabel: "Our services" }
      ]
    },
    {
      label: "Products",
      bgColor: "#0ea5e9",
      textColor: "#fff",
      links: [
        { label: "Solar Panels", href: "/products", ariaLabel: "Solar panels" },
        { label: "Inverters", href: "/products", ariaLabel: "Solar inverters" },
        { label: "Power Plants", href: "/products", ariaLabel: "Complete power plants" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#38bdf8",
      textColor: "#0c1929",
      links: [
        { label: "Our Work", href: "/projects", ariaLabel: "View projects" },
        { label: "Case Studies", href: "/projects", ariaLabel: "Project case studies" }
      ]
    }
  ];

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
            linear-gradient(rgba(255,193,7,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,193,7,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <CardNav
        items={navItems}
        baseColor="#0ea5e9"
        menuColor="#fff"
        buttonBgColor="#ffc107"
        buttonTextColor="#0c1929"
      />

      <div className="hero-content">
        <h1 className="hero-display">
          SOLAR<br />
          <em>ENERGY</em>
        </h1>
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