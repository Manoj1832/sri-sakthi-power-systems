import './sections.css'

const panelBrands = [
  { name: 'Kirloskar Solar', img: 'https://logo.clearbit.com/kirloskar.com' },
  { name: 'Goldi Solar', img: 'https://logo.clearbit.com/goldisolar.com' },
  { name: 'Adani Solar', img: 'https://logo.clearbit.com/adani.com' },
  { name: 'Vikram Solar', img: 'https://logo.clearbit.com/vikramsolar.com' },
  { name: 'Waaree', img: 'https://logo.clearbit.com/waaree.com' },
  { name: 'Tata Power', img: 'https://logo.clearbit.com/tatapower.com' },
  { name: 'Canadian Solar', img: 'https://logo.clearbit.com/canadiansolar.com' },
  { name: 'JA Solar', img: 'https://logo.clearbit.com/jasolar.com' },
]

const inverterBrands = [
  { name: 'Growatt', img: 'https://logo.clearbit.com/ginverter.com' },
  { name: 'Sungrow', img: 'https://logo.clearbit.com/sungrowpower.com' },
  { name: 'Havells', img: 'https://logo.clearbit.com/havells.com' },
  { name: 'Polycab', img: 'https://logo.clearbit.com/polycab.com' },
  { name: 'Solis', img: 'https://logo.clearbit.com/ginlong.com' },
  { name: 'Luminous', img: 'https://logo.clearbit.com/luminousindia.com' },
  { name: 'Microtek', img: 'https://logo.clearbit.com/microtekindia.com' },
  { name: 'Su-Kam', img: 'https://logo.clearbit.com/sukam.com' },
]

function BrandMarquee({ brands }: { brands: typeof panelBrands }) {
  const duplicated = [...brands, ...brands]
  return (
    <div className="marquee-wrapper">
      <div className="brand-marquee-track">
        {duplicated.map((b, i) => (
          <div className="brand-loop-item" key={i}>
            <img src={b.img} alt={b.name} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-header fade-up">
          <p className="section-label" style={{ justifyContent: 'center' }}>Authorised Dealers</p>
          <h2 className="section-heading light" style={{ textAlign: 'center' }}>
            Brands We <span className="text-yellow">Deal With</span>
          </h2>
        </div>

        <div className="brands-group fade-up">
          <div className="brands-group-label">Solar Panel Brands</div>
          <BrandMarquee brands={panelBrands} />
        </div>

        <div className="brands-group fade-up">
          <div className="brands-group-label">Inverter Brands</div>
          <BrandMarquee brands={inverterBrands} />
        </div>
      </div>
    </section>
  )
}
