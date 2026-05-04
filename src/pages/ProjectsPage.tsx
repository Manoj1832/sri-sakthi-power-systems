import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const defaultProjects = [
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

function loadProjects() {
  const stored = localStorage.getItem('ssp_projects')
  if (stored) {
    try { return JSON.parse(stored) } catch { return defaultProjects }
  }
  return defaultProjects
}

function saveProjects(projects: typeof defaultProjects) {
  localStorage.setItem('ssp_projects', JSON.stringify(projects))
}

export { loadProjects, saveProjects }

export default function ProjectsPage() {
  useScrollAnimation()
  const [projects, setProjects] = useState(loadProjects())

  useEffect(() => {
    const handle = () => setProjects(loadProjects())
    window.addEventListener('storage', handle)
    window.addEventListener('ssp_data_update', handle)
    return () => {
      window.removeEventListener('storage', handle)
      window.removeEventListener('ssp_data_update', handle)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div style={{ background: 'var(--dark)', padding: '80px 0 60px', textAlign: 'center' }}>
          <div className="container">
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Portfolio</p>
            <h1 className="section-heading light">Recent Projects</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '17px', maxWidth: '600px', margin: '16px auto 0' }}>
              Take a look at some of our successful solar installations across Erode and surrounding areas.
            </p>
          </div>
        </div>

        <section style={{ padding: 'var(--pad-section) 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="projects-grid-page">
              {projects.map((p: typeof defaultProjects[0]) => (
                <Link to={`/projects/${p.id}`} key={p.id} className="project-card fade-up">
                  <div className="project-card-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-location">{p.location}</div>
                    <h3 className="project-card-title">{p.title}</h3>
                    <p className="project-card-desc">{p.description}</p>
                    <span className="project-card-link">View Details</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}