import { useState, useEffect } from 'react'
import LogoLoop from './LogoLoop'
import './sections.css'

interface Brand {
  id: string
  name: string
  image: string
  category: string
}

const defaultPanelBrands: Brand[] = [
  { id: '1', name: 'Kirloskar Solar', image: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '2', name: 'Goldi Solar', image: 'https://img.logo.dev/goldisolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '3', name: 'Adani Solar', image: 'https://img.logo.dev/adani.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '4', name: 'Vikram Solar', image: 'https://img.logo.dev/vikramsolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '5', name: 'Waaree', image: 'https://img.logo.dev/waaree.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '6', name: 'Navitas', image: 'https://img.logo.dev/navitassolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '7', name: 'UTL', image: 'https://img.logo.dev/utl.co.in?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '8', name: 'Premier Energies', image: 'https://img.logo.dev/premierenergies.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
]

const defaultInverterBrands: Brand[] = [
  { id: '9', name: 'Growatt', image: 'https://img.logo.dev/ginverter.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '10', name: 'Sungrow', image: 'https://img.logo.dev/sungrowpower.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '11', name: 'Havells', image: 'https://img.logo.dev/havells.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '12', name: 'Polycab', image: 'https://img.logo.dev/polycab.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '13', name: 'Solis', image: 'https://img.logo.dev/ginlong.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '14', name: 'Deye', image: 'https://img.logo.dev/deye.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '15', name: 'Livguard', image: 'https://img.logo.dev/livguard.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '16', name: 'Kirloskar', image: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
]

function loadBrands(): Brand[] {
  const stored = localStorage.getItem('ssp_brands')
  if (stored) {
    try { return JSON.parse(stored) } catch { return [...defaultPanelBrands, ...defaultInverterBrands] }
  }
  return [...defaultPanelBrands, ...defaultInverterBrands]
}

export default function Brands() {
  const [brands, setBrands] = useState<Brand[]>(loadBrands())

  useEffect(() => {
    const handleUpdate = () => setBrands(loadBrands())
    window.addEventListener('ssp_data_update', handleUpdate)
    return () => window.removeEventListener('ssp_data_update', handleUpdate)
  }, [])

  const panelBrands = brands.filter(b => b.category === 'panel')
  const inverterBrands = brands.filter(b => b.category === 'inverter')

  const toLogoFormat = (brand: Brand) => ({ src: brand.image, alt: brand.name, title: brand.name })

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-header fade-up">
          <p className="section-label" style={{ justifyContent: 'center' }}>Authorised Dealers</p>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>
            Brands We <span className="text-blue">Deal With</span>
          </h2>
        </div>

        {panelBrands.length > 0 && (
          <div className="brands-group fade-up">
            <div className="brands-group-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              Solar Panel Brands
            </div>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={panelBrands.map(toLogoFormat)}
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
        )}

        {inverterBrands.length > 0 && (
          <div className="brands-group fade-up">
            <div className="brands-group-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              Inverter Brands
            </div>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={inverterBrands.map(toLogoFormat)}
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
        )}
      </div>
    </section>
  )
}
