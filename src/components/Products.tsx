import { useState } from 'react'
import { Link } from 'react-router-dom'
import Masonry from './Masonry'
import QuoteModal from './QuoteModal'
import './sections.css'

const products = [
  { id: '1',  name: 'Solar Panels',     desc: 'Mono & Poly crystalline panels from top brands',     img: 'https://img.sanishtech.com/u/57bf7584090e5b3501a07228afab1351.jpeg', height: 500 },
  { id: '2',  name: 'Solar Inverters',   desc: 'OnGrid, Hybrid & Off-Grid inverters',               img: 'https://img.sanishtech.com/u/1d3bace2fce5f7fa189d1b88e311f6fa.png', height: 350 },
  { id: '3',  name: 'ACDB / DCDB',       desc: 'AC & DC distribution boxes for plant safety',       img: 'https://img.sanishtech.com/u/532ba90061d856d3e26e09528f8f69f6.jpg', height: 400 },
  { id: '4',  name: 'Earthing Kit',      desc: 'Complete earthing solutions for protection',         img: 'https://img.sanishtech.com/u/f6b75be3e4f40206e80b8c16bf45a3f6.jpeg', height: 450 },
  { id: '5',  name: 'Structure',         desc: 'MS & GI mounting structures for all roof types',     img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800', height: 380 },
  { id: '6',  name: 'OnGrid Plant',      desc: 'Grid-tied solar power plant with net metering',     img: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800', height: 520 },
  { id: '7',  name: 'Hybrid Plant',      desc: 'Solar + battery backup hybrid power systems',       img: 'https://img.sanishtech.com/u/af68b6c1f6493d4cb0b9ac2f05c68227.png', height: 360 },
  { id: '8',  name: 'Off-Grid Plant',    desc: 'Complete off-grid solar for remote locations',      img: 'https://img.sanishtech.com/u/31af0d48e1b0ad126454526e937c4bdf.jpeg', height: 440 },
  { id: '9',  name: 'Water Heater',      desc: 'Solar water heating for home & commercial use',     img: 'https://img.sanishtech.com/u/da98819edc4a8fad61600bfea17ed752.jpeg', height: 380 },
  { id: '10', name: 'Solar Pumps',       desc: 'AC & DC motor solar pumping systems',               img: 'https://img.sanishtech.com/u/2ee79e1e60e5fe1362ed68da7c4d414c.jpeg', height: 460 },
  { id: '11', name: 'Street Light',      desc: 'Integrated solar street lighting systems',          img: 'https://img.sanishtech.com/u/89cdaaad5fa7b512efc9d33e67833cad.jpeg', height: 500 },
  { id: '12', name: 'Solar Studs',       desc: 'Road safety solar stud lights',                     img: 'https://img.sanishtech.com/u/82a0f7d20062bbc5819ee3bcbe4eccfb.jpeg', height: 320 },
]
const masonryItems = products.map(p => ({
  id: p.id,
  img: p.img,
  height: p.height,
  label: p.name,
  desc: p.desc,
  contain: p.img.includes('sanishtech.com') || p.img.includes('png')
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
      <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{item.label}</p>
      <p style={{ marginBottom: '12px' }}>{item.desc}</p>
      <button 
        className="btn btn-primary" 
        style={{ padding: '6px 12px', fontSize: '13px', width: '100%', justifyContent: 'center' }}
        onClick={(e) => { e.stopPropagation(); handleOpenModal(item.label); }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
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