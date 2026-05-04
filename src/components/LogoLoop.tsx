import './sections.css'

const logos = [
  { name: 'Tata Power Solar', img: 'https://logo.clearbit.com/tatapower.com' },
  { name: 'Adani Solar', img: 'https://logo.clearbit.com/adani.com' },
  { name: 'Waaree', img: 'https://logo.clearbit.com/waaree.com' },
  { name: 'Kirloskar', img: 'https://logo.clearbit.com/kirloskar.com' },
  { name: 'Vikram Solar', img: 'https://logo.clearbit.com/vikramsolar.com' },
  { name: 'Goldi Solar', img: 'https://logo.clearbit.com/goldisolar.com' },
  { name: 'Growatt', img: 'https://logo.clearbit.com/ginverter.com' },
  { name: 'Sungrow', img: 'https://logo.clearbit.com/sungrowpower.com' },
  { name: 'Havells', img: 'https://logo.clearbit.com/havells.com' },
  { name: 'Polycab', img: 'https://logo.clearbit.com/polycab.com' },
  { name: 'Solis', img: 'https://logo.clearbit.com/ginlong.com' },
  { name: 'Luminous', img: 'https://logo.clearbit.com/luminousindia.com' },
]

export default function LogoLoop() {
  const duplicated = [...logos, ...logos]

  return (
    <section className="logo-loop-section">
      <div className="container">
        <div className="logo-loop-label">Our Trusted Partners</div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {duplicated.map((logo, i) => (
              <div className="marquee-item" key={i}>
                <img src={logo.img} alt={logo.name} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
