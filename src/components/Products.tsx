import { useState } from 'react'
import { Link } from 'react-router-dom'
import Masonry from './Masonry'
import QuoteModal from './QuoteModal'
import './sections.css'

const products = [
  { id: '1',  name: 'Solar Panels',     desc: 'Mono & Poly crystalline panels from top brands',     img: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=800', height: 500 },
  { id: '2',  name: 'Solar Inverters',   desc: 'OnGrid, Hybrid & Off-Grid inverters',               img: 'https://images.unsplash.com/photo-1624397558428-7528c6d2013e?auto=format&fit=crop&q=80&w=800', height: 350 },
  { id: '3',  name: 'ACDB / DCDB',       desc: 'AC & DC distribution boxes for plant safety',       img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800', height: 400 },
  { id: '4',  name: 'Earthing Kit',      desc: 'Complete earthing solutions for protection',         img: 'https://images.unsplash.com/photo-1558449028-b53c3e9789a0?auto=format&fit=crop&q=80&w=800', height: 450 },
  { id: '5',  name: 'Structure',         desc: 'MS & GI mounting structures for all roof types',     img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800', height: 380 },
  { id: '6',  name: 'OnGrid Plant',      desc: 'Grid-tied solar power plant with net metering',     img: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800', height: 520 },
  { id: '7',  name: 'Hybrid Plant',      desc: 'Solar + battery backup hybrid power systems',       img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800', height: 360 },
  { id: '8',  name: 'Off-Grid Plant',    desc: 'Complete off-grid solar for remote locations',      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800', height: 440 },
  { id: '9',  name: 'Water Heater',      desc: 'Solar water heating for home & commercial use',     img: 'https://images.unsplash.com/photo-1615799998603-7c6270a45196?auto=format&fit=crop&q=80&w=800', height: 380 },
  { id: '10', name: 'Solar Pumps',       desc: 'AC & DC motor solar pumping systems',               img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800', height: 460 },
  { id: '11', name: 'Street Light',      desc: 'Integrated solar street lighting systems',          img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800', height: 500 },
  { id: '12', name: 'Solar Studs',       desc: 'Road safety solar stud lights',                     img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800', height: 320 },
]
const masonryItems = products.map(p => ({
  id: p.id,
  img: p.img,
  height: p.height,
  label: p.name,
  desc: p.desc,
}))

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleOpenModal = (productName: string) => {
    setSelectedProduct(productName)
    setModalOpen(true)
  }

  const renderProductOverlay = (item: any) => (
    <div className="masonry-item-overlay">
      <h4>{item.label}</h4>
      <p style={{ marginBottom: '12px' }}>{item.desc}</p>
      <button 
        className="btn btn-primary" 
        style={{ padding: '6px 12px', fontSize: '13px', width: '100%', justifyContent: 'center' }}
        onClick={(e) => { e.stopPropagation(); handleOpenModal(item.label); }}
      >
        <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="" style={{ width: 14, height: 14 }} />
        Get Quote
      </button>
    </div>
  )

  return (
    <>
      <section className="products-section" id="products">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }} className="fade-up">
            <p className="section-label" style={{ justifyContent: 'center' }}>What We Offer</p>
            <h2 className="section-heading">
              Complete Solar <span className="text-blue">Product Range</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.7' }}>
              From solar panels and inverters to complete power plant installations —
              we supply, install, and maintain everything for your solar journey.
            </p>
          </div>

          {/* Masonry Grid */}
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            renderOverlay={renderProductOverlay}
          />

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }} className="fade-up">
            <Link to="/products" className="btn btn-outline-blue">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productName={selectedProduct} 
      />
    </>
  )
}