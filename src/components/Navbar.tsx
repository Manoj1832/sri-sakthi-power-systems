import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './navbar-hero.css'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/products',  label: 'Products' },
  { to: '/projects',  label: 'Projects' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/"><Logo size="sm" /></Link>
          <div className="navbar-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>
            Get Quote
          </Link>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center' }}>Get Quote</Link>
      </div>
    </>
  )
}
