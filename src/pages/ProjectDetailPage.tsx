import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { loadProjects } from './ProjectsPage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [projects] = useState(loadProjects())
  const project = projects.find((p: { id: string }) => p.id === id)
  const [activeImg, setActiveImg] = useState(0)
  useScrollAnimation()

  if (!project) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: '76px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '32px' }}>Project Not Found</h1>
          <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
        </main>
        <Footer />
      </>
    )
  }

  const allImages = project.images || [project.image]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div className="project-detail-hero">
          <img src={allImages[activeImg]} alt={project.title} />
          <div className="project-detail-hero-content">
            <div className="container">
              <Link to="/projects" style={{ color: 'var(--yellow)', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                ← Back to Projects
              </Link>
              <p style={{ color: 'var(--yellow)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>{project.location}</p>
              <h1 style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: 'clamp(28px, 5vw, 56px)', color: '#fff', lineHeight: 1.1 }}>{project.title}</h1>
            </div>
          </div>
        </div>

        <section style={{ padding: 'var(--pad-section) 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '22px', marginBottom: '16px' }}>Project Overview</h2>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>{project.description}</p>

                <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '18px', marginBottom: '16px' }}>Photo Gallery</h3>
                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '16px', height: '400px' }}>
                  <img src={allImages[activeImg]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="project-detail-gallery">
                  {allImages.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      onClick={() => setActiveImg(i)}
                      style={{ border: activeImg === i ? '3px solid var(--blue)' : '3px solid transparent' }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div style={{ background: 'var(--gray-light)', borderRadius: 'var(--radius)', padding: '32px', position: 'sticky', top: '100px' }}>
                  <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '18px', marginBottom: '24px', color: 'var(--blue)' }}>Project Details</h3>
                  {[
                    { label: 'Capacity', value: project.capacity },
                    { label: 'Type', value: project.type },
                    { label: 'Location', value: project.location },
                    { label: 'Bill Savings', value: project.savings },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--gray-mid)' }}>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>{item.value}</div>
                    </div>
                  ))}

                  <a
                    href={`https://wa.me/917358942468?text=Hi%2C%20I'm%20interested%20in%20a%20${encodeURIComponent(project.type)}%20system%20like%20your%20${encodeURIComponent(project.title)}%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
