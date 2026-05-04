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
          <div className="brands-group-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            Solar Panel Brands
          </div>
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
          <div className="brands-group-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Inverter Brands
          </div>
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
