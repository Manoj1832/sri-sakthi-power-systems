import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectStats from '../components/ProjectStats'
import ProjectFilters, { type ProjectFilter } from '../components/ProjectFilters'
import ProjectCard, { type Project } from '../components/ProjectCard'
import ProjectDrawer from '../components/ProjectDrawer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const defaultProjects: Project[] = [
  {
    id: '1',
    title: '5kW On-Grid Solar System',
    location: 'Thindal, Erode',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600',
    description: 'Residential rooftop installation using Kirloskar solar panels and Growatt inverter.',
    capacity: '5kW',
    type: 'On-Grid',
    savings: '₹3,500 → ₹200/month',
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1558449028-b53c3e9789a0?auto=format&fit=crop&q=80&w=1600',
    ]
  },
  {
    id: '2',
    title: '10kW Hybrid Solar Power Plant',
    location: 'Perundurai, Erode',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1600',
    description: 'Commercial setup with battery backup for uninterrupted power supply.',
    capacity: '10kW',
    type: 'Hybrid',
    savings: '₹8,000 → ₹800/month',
    images: [
      'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1624397558428-7528c6d2013e?auto=format&fit=crop&q=80&w=1600',
    ]
  },
  {
    id: '3',
    title: '3HP Solar Pumping System',
    location: 'Bhavani, Erode',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=1600',
    description: 'Agricultural solar pump installation for efficient irrigation.',
    capacity: '3HP',
    type: 'Solar Pump',
    savings: 'Zero electricity cost',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600',
    ]
  },
  {
    id: '4',
    title: 'Solar Street Lighting Project',
    location: 'Modakkurichi, Erode',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1600',
    description: 'Installation of integrated solar street lights for a gated community.',
    capacity: '20 Lights',
    type: 'Street Light',
    savings: '₹5,000/month saved',
    images: [
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1558449028-b53c3e9789a0?auto=format&fit=crop&q=80&w=1600',
    ]
  },
  {
    id: '5',
    title: '15kW Commercial Solar Plant',
    location: 'Erode City',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=1600',
    description: 'Large scale commercial solar installation for office building with complete monitoring system.',
    capacity: '15kW',
    type: 'On-Grid',
    savings: '₹15,000 → ₹1,500/month',
    images: [
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1600',
    ]
  },
  {
    id: '6',
    title: '2kW Residential Solar System',
    location: 'Perundurai, Erode',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600',
    description: 'Home solar setup with net metering for reducing electricity bills.',
    capacity: '2kW',
    type: 'On-Grid',
    savings: '₹1,200 → ₹100/month',
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600',
    ]
  },
]

function loadProjects(): Project[] {
  const stored = localStorage.getItem('ssp_projects')
  if (stored) {
    try { return JSON.parse(stored) } catch { return defaultProjects }
  }
  return defaultProjects
}

function saveProjects(projects: Project[]) {
  localStorage.setItem('ssp_projects', JSON.stringify(projects))
}

export { loadProjects, saveProjects }

export default function ProjectsPage() {
  useScrollAnimation()
  const [projects, setProjects] = useState<Project[]>(loadProjects())
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [drawerProject, setDrawerProject] = useState<Project | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handle = () => setProjects(loadProjects())
    window.addEventListener('storage', handle)
    window.addEventListener('ssp_data_update', handle)
    return () => {
      window.removeEventListener('storage', handle)
      window.removeEventListener('ssp_data_update', handle)
    }
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (activeFilter !== 'All') {
      filtered = filtered.filter(p => p.type === activeFilter)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.location.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [projects, activeFilter, searchQuery])

  const handleCardClick = (project: Project) => {
    setDrawerProject(project)
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px', background: 'var(--dark)' }}>
        <div style={{ background: 'var(--dark)', padding: '80px 0 40px', textAlign: 'center' }}>
          <div className="container">
            <p className="section-label fade-up" style={{ justifyContent: 'center' }}>Projects</p>
            <h1 className="section-heading light fade-up" style={{ transitionDelay: '0.1s' }}>Our Projects</h1>
            <p className="fade-in" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '17px', maxWidth: '600px', margin: '16px auto 0', transitionDelay: '0.2s' }}>
              Explore our completed solar installations across Tamil Nadu
            </p>
          </div>
        </div>

        <ProjectStats projects={projects} />

        <section style={{ background: 'var(--gray-light)', padding: '60px 0' }}>
          <div className="container">
            <div className="project-search fade-up">
              <div className="project-search-input">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search by project name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search projects"
                />
              </div>
            </div>

            <ProjectFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <div className="project-cards-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="fade-up"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => handleCardClick(project)}
                    />
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
                  <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>No projects found matching your criteria.</p>
                  <button
                    className="btn btn-outline-blue"
                    style={{ marginTop: '16px' }}
                    onClick={() => { setActiveFilter('All'); setSearchQuery('') }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ProjectDrawer
        project={drawerProject}
        isOpen={!!drawerProject}
        onClose={() => setDrawerProject(null)}
      />
    </>
  )
}