import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from './ProjectCard'
import './sections.css'

interface ProjectDrawerProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!project) return null

  const typeColors: Record<string, { bg: string; text: string }> = {
    'On-Grid': { bg: 'var(--blue-pale)', text: 'var(--blue-text)' },
    'Hybrid': { bg: 'var(--yellow-light)', text: '#b45309' },
    'Solar Pump': { bg: '#dcfce7', text: '#15803d' },
    'Street Light': { bg: '#f3e8ff', text: '#7e22ce' },
  }

  const typeStyle = typeColors[project.type] || typeColors['On-Grid']

  return (
    <>
      <div
        className={`project-drawer-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`project-drawer${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <button className="project-drawer-close" onClick={onClose} aria-label="Close drawer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="project-drawer-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-drawer-content">
          <h2 id="drawer-title" className="project-drawer-title">{project.title}</h2>

          <div className="project-drawer-meta">
            <span className="project-drawer-type" style={{ background: typeStyle.bg, color: typeStyle.text }}>
              {project.type}
            </span>
            <span className="project-drawer-capacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              {project.capacity}
            </span>
            <span className="project-drawer-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {project.location}
            </span>
          </div>

          <div className="project-drawer-description">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>

          {project.images && project.images.length > 1 && (
            <div className="project-drawer-gallery">
              {project.images.slice(0, 4).map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx + 1}`} loading="lazy" />
              ))}
            </div>
          )}

          <div className="project-drawer-savings">
            <div className="savings-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="savings-text">
              <span>Monthly Savings</span>
              <strong>{project.savings}</strong>
            </div>
          </div>

          <Link to="/contact" className="btn btn-primary project-drawer-cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Get a Quote
          </Link>
        </div>
      </aside>
    </>
  )
}