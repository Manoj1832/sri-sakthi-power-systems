import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import CtaBanner from '../components/CtaBanner'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function AboutPage() {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div style={{
          background: 'var(--dark)',
          padding: '80px 0 60px',
          textAlign: 'center',
        }}>
          <div className="container">
            <p className="section-label" style={{ justifyContent: 'center' }}>Who We Are</p>
            <h1 className="section-heading light">About Sri Sakthi Power Systems</h1>
          </div>
        </div>
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
