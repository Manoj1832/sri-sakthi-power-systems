import LogoLoop from './LogoLoop'
import './sections.css'

const panelBrands = [
  { src: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Kirloskar Solar', title: 'Kirloskar Solar' },
  { src: 'https://img.logo.dev/goldisolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Goldi Solar', title: 'Goldi Solar' },
  { src: 'https://img.logo.dev/adani.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Adani Solar', title: 'Adani Solar' },
  { src: 'https://img.logo.dev/vikramsolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Vikram Solar', title: 'Vikram Solar' },
  { src: 'https://img.logo.dev/waaree.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Waaree', title: 'Waaree' },
  { src: 'https://img.logo.dev/navitassolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Navitas', title: 'Navitas' },
  { src: 'https://img.logo.dev/utl.co.in?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'UTL', title: 'UTL' },
  { src: 'https://img.logo.dev/premierenergies.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Premier Energies', title: 'Premier Energies' },
]

const inverterBrands = [
  { src: 'https://img.logo.dev/ginverter.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Growatt', title: 'Growatt' },
  { src: 'https://img.logo.dev/sungrowpower.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Sungrow', title: 'Sungrow' },
  { src: 'https://img.logo.dev/havells.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Havells', title: 'Havells' },
  { src: 'https://img.logo.dev/polycab.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Polycab', title: 'Polycab' },
  { src: 'https://img.logo.dev/ginlong.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Solis', title: 'Solis' },
  { src: 'https://img.logo.dev/deye.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Deye', title: 'Deye' },
  { src: 'https://img.logo.dev/livguard.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Livguard', title: 'Livguard' },
  { src: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', alt: 'Kirloskar', title: 'Kirloskar' },
]

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-header fade-up">
          <p className="section-label" style={{ justifyContent: 'center' }}>Authorised Dealers</p>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>
            Brands We <span className="text-blue">Deal With</span>
          </h2>
        </div>

        <div className="brands-group fade-up">
          <div className="brands-group-label">☀ Solar Panel Brands</div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={panelBrands}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={56}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#f8fbff"
              ariaLabel="Solar panel brand logos"
            />
          </div>
        </div>

        <div className="brands-group fade-up">
          <div className="brands-group-label">⚡ Inverter Brands</div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={inverterBrands}
              speed={60}
              direction="right"
              logoHeight={40}
              gap={56}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#f8fbff"
              ariaLabel="Inverter brand logos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
