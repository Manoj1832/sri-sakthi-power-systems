import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './sections.css'

export interface Project {
  id: string
  title: string
  location: string
  image: string
  description: string
  capacity: string
  type: string
  savings: string
  images?: string[]
}

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

const typeColors: Record<string, { bg: string; text: string }> = {
  'On-Grid': { bg: 'var(--blue-pale)', text: 'var(--blue-text)' },
  'Hybrid': { bg: 'var(--yellow-light)', text: '#b45309' },
  'Solar Pump': { bg: '#dcfce7', text: '#15803d' },
  'Street Light': { bg: '#f3e8ff', text: '#7e22ce' },
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const typeStyle = typeColors[project.type] || typeColors['On-Grid']

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate(`/projects/${project.id}`)
    }
  }

  return (
    <article
      className={`project-card${isHovered ? ' hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View details for ${project.title}`}
    >
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
        <span
          className="project-card-type-badge"
          style={{ background: typeStyle.bg, color: typeStyle.text }}
        >
          {project.type}
        </span>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>

        <div className="project-card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{project.location}</span>
        </div>

        <p className="project-card-description">{project.description}</p>

        <div className="project-card-footer">
          <div className="project-card-capacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>{project.capacity}</span>
          </div>
          <div className="project-card-savings">
            <span className="savings-label">Savings:</span>
            <span className="savings-value">{project.savings}</span>
          </div>
        </div>
      </div>
    </article>
  )
}