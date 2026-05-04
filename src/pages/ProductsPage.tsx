import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Brands from '../components/Brands'
import CtaBanner from '../components/CtaBanner'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ProductsPage() {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '76px' }}>
          <div style={{ background: 'var(--dark)', padding: '80px 0 60px', textAlign: 'center' }}>
            <div className="container">
              <p className="section-label" style={{ justifyContent: 'center' }}>What We Offer</p>
              <h1 className="section-heading light">Our Products &amp; Solutions</h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '17px', maxWidth: '600px', margin: '16px auto 0' }}>
                Complete solar product range — panels, inverters, systems, and accessories
                from India's top brands.
              </p>
            </div>
          </div>
          <Products />
          <Brands />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}
