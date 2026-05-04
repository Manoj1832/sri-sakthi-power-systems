import { Link } from 'react-router-dom'
import './sections.css'

const products = [
  { name: 'Solar Panels', desc: 'Mono & Poly crystalline panels from top brands', img: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Solar Inverters', desc: 'OnGrid, Hybrid & Off-Grid inverters', img: 'https://images.unsplash.com/photo-1624397558428-7528c6d2013e?auto=format&fit=crop&q=80&w=800' },
  { name: 'ACDB / DCDB', desc: 'AC & DC distribution boxes for plant safety', img: 'https://images.unsplash.com/photo-1558449028-b53c3e9789a0?auto=format&fit=crop&q=80&w=800' },
  { name: 'Earthing Kit', desc: 'Complete earthing solutions for protection', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Structure', desc: 'MS & GI mounting structures for all roof types', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800' },
  { name: 'OnGrid Plant', desc: 'Grid-tied solar power plant with net metering', img: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Hybrid Plant', desc: 'Solar + battery backup hybrid power systems', img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800' },
  { name: 'Off-Grid Plant', desc: 'Complete off-grid solar for remote locations', img: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800' },
  { name: 'Water Heater', desc: 'Solar water heating for home & commercial use', img: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8d1da?auto=format&fit=crop&q=80&w=800' },
  { name: 'Solar Pumps', desc: 'AC & DC motor solar pumping systems', img: 'https://images.unsplash.com/photo-1560472355-5367c3b6a13e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Street Light', desc: 'Integrated solar street lighting systems', img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Solar Studs', desc: 'Road safety solar stud lights', img: 'https://images.unsplash.com/photo-1508549827494-08ac60a77800?auto=format&fit=crop&q=80&w=800' },
]

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="products-layout">
          <div className="products-intro fade-up">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading light">
              Complete Solar<br />
              Product Range
            </h2>
            <p>
              From solar panels and inverters to complete power plant installations —
              we supply, install, and maintain everything you need for your solar journey
              in Erode and across Tamil Nadu.
            </p>
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>

          <div className="products-grid">
            {products.map((p, i) => (
              <div className="product-card fade-up" key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                <div style={{
                  height: '120px',
                  background: `url(${p.img}) center/cover`,
                  borderRadius: '8px',
                  marginBottom: '14px',
                }} />
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}