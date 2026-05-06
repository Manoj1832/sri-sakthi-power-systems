import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loadProjects, saveProjects } from './ProjectsPage'

interface Project {
  id: string
  title: string
  location: string
  image: string
  description: string
  capacity: string
  type: string
  savingsFrom: string
  savingsTo: string
  images: string[]
}

const PROJECT_TYPES = [
  'OnGrid Solar',
  'Hybrid Solar',
  'OffGrid Solar',
  'Solar Pump',
  'Street Light',
  'Water Heater',
  'Solar Panel',
  'Inverter',
  'EPC Project'
]

const CAPACITY_OPTIONS = [
  '1kW', '2kW', '3kW', '5kW', '7.5kW', '10kW', '15kW', '20kW', '25kW', '30kW', 
  '50kW', '75kW', '100kW', '150kW', '200kW', '250kW', '300kW', '500kW', '1MW', 'Custom'
]

interface Product {
  id: string
  name: string
  description: string
  image: string
}

interface Brand {
  id: string
  name: string
  image: string
  category: string
}

function loadBrands(): Brand[] {
  const stored = localStorage.getItem('ssp_brands')
  if (stored) {
    try { return JSON.parse(stored) } catch { return defaultBrands }
  }
  return defaultBrands
}

function saveBrands(brands: Brand[]) {
  localStorage.setItem('ssp_brands', JSON.stringify(brands))
}

const defaultBrands: Brand[] = [
  { id: '1', name: 'Kirloskar Solar', image: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '2', name: 'Goldi Solar', image: 'https://img.logo.dev/goldisolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '3', name: 'Adani Solar', image: 'https://img.logo.dev/adani.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '4', name: 'Vikram Solar', image: 'https://img.logo.dev/vikramsolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '5', name: 'Waaree', image: 'https://img.logo.dev/waaree.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '6', name: 'Navitas', image: 'https://img.logo.dev/navitassolar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '7', name: 'UTL', image: 'https://img.logo.dev/utl.co.in?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '8', name: 'Premier Energies', image: 'https://img.logo.dev/premierenergies.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'panel' },
  { id: '9', name: 'Growatt', image: 'https://img.logo.dev/ginverter.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '10', name: 'Sungrow', image: 'https://img.logo.dev/sungrowpower.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '11', name: 'Havells', image: 'https://img.logo.dev/havells.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '12', name: 'Polycab', image: 'https://img.logo.dev/polycab.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '13', name: 'Solis', image: 'https://img.logo.dev/ginlong.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '14', name: 'Deye', image: 'https://img.logo.dev/deye.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '15', name: 'Livguard', image: 'https://img.logo.dev/livguard.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
  { id: '16', name: 'Kirloskar', image: 'https://img.logo.dev/kirloskar.com?token=pk_ck2t6VNVTl60E4BXdUVW-A', category: 'inverter' },
]

interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  avatar: string
}

function loadProducts(): Product[] {
  const stored = localStorage.getItem('ssp_products')
  if (stored) {
    try { return JSON.parse(stored) } catch { return defaultProducts }
  }
  return defaultProducts
}

function saveProducts(products: Product[]) {
  localStorage.setItem('ssp_products', JSON.stringify(products))
}

const defaultProducts: Product[] = [
  { id: '1', name: 'Solar Panels', description: 'Mono & Poly crystalline panels from top brands', image: 'https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Solar Inverters', description: 'OnGrid, Hybrid & Off-Grid inverters', image: 'https://images.unsplash.com/photo-1624397558428-7528c6d2013e?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'OnGrid Plant', description: 'Grid-tied solar power plant with net metering', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Hybrid Plant', description: 'Solar + battery backup hybrid power systems', image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=400' },
]

function loadTestimonials(): Testimonial[] {
  const stored = localStorage.getItem('ssp_testimonials')
  if (stored) {
    try { return JSON.parse(stored) } catch { return defaultTestimonials }
  }
  return defaultTestimonials
}

function saveTestimonials(testimonials: Testimonial[]) {
  localStorage.setItem('ssp_testimonials', JSON.stringify(testimonials))
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Tamil Nadu',
    quote: 'Excellent service! Sri Sakthi Power Systems installed a 5kW OnGrid system for my home. My electricity bill dropped from ₹3,500 to just ₹200 per month. Highly recommended!',
    rating: 5,
    avatar: 'R',
  },
]

type Tab = 'projects' | 'products' | 'testimonials' | 'brands'

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('projects')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [projects, setProjects] = useState<Project[]>(loadProjects())
  const [products, setProducts] = useState<Product[]>(loadProducts())
  const [testimonials, setTestimonials] = useState<Testimonial[]>(loadTestimonials())
  const [brands, setBrands] = useState<Brand[]>(loadBrands())

  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin')
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]')
    if (meta) meta.setAttribute('content', 'noindex, nofollow')
    return () => {
      if (meta) meta.setAttribute('content', 'index, follow')
    }
  }, [])

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        background: '#f0f7ff'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            border: '4px solid #e2e8f0', 
            borderTopColor: '#0ea5e9', 
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  const notifyUpdate = () => {
    window.dispatchEvent(new Event('ssp_data_update'))
  }

  const handleSaveProject = (data: Partial<Project>) => {
    if (editingItem) {
      const updated = projects.map(p => p.id === editingItem.id ? { ...p, ...data } : p)
      setProjects(updated)
      saveProjects(updated)
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        title: data.title || '',
        location: data.location || '',
        image: data.image || '',
        description: data.description || '',
        capacity: data.capacity || '',
        type: data.type || '',
        savingsFrom: data.savingsFrom || '',
        savingsTo: data.savingsTo || '',
        images: data.images ? (typeof data.images === 'string' ? (data.images as string).split(',').map((s: string) => s.trim()) : data.images) : [],
      }
      if (!newProject.images.length) newProject.images = [newProject.image]
      const updated = [...projects, newProject]
      setProjects(updated)
      saveProjects(updated)
    }
    notifyUpdate()
    setShowModal(false)
    setEditingItem(null)
  }

  const handleDeleteProject = (id: string) => {
    if (confirm('Delete this project?')) {
      const updated = projects.filter(p => p.id !== id)
      setProjects(updated)
      saveProjects(updated)
      notifyUpdate()
    }
  }

  const handleSaveProduct = (data: Partial<Product>) => {
    if (editingItem) {
      const updated = products.map(p => p.id === editingItem.id ? { ...p, ...data } : p)
      setProducts(updated)
      saveProducts(updated)
    } else {
      const newProduct: Product = { id: Date.now().toString(), name: data.name || '', description: data.description || '', image: data.image || '' }
      const updated = [...products, newProduct]
      setProducts(updated)
      saveProducts(updated)
    }
    notifyUpdate()
    setShowModal(false)
    setEditingItem(null)
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm('Delete this product?')) {
      const updated = products.filter(p => p.id !== id)
      setProducts(updated)
      saveProducts(updated)
      notifyUpdate()
    }
  }

  const handleSaveBrand = (data: Partial<Brand>) => {
    if (editingItem) {
      const updated = brands.map(b => b.id === editingItem.id ? { ...b, ...data } : b)
      setBrands(updated)
      saveBrands(updated)
    } else {
      const newBrand: Brand = {
        id: Date.now().toString(),
        name: data.name || '',
        image: data.image || '',
        category: data.category || 'panel',
      }
      const updated = [...brands, newBrand]
      setBrands(updated)
      saveBrands(updated)
    }
    notifyUpdate()
    setShowModal(false)
    setEditingItem(null)
  }

  const handleDeleteBrand = (id: string) => {
    if (confirm('Delete this brand?')) {
      const updated = brands.filter(b => b.id !== id)
      setBrands(updated)
      saveBrands(updated)
      notifyUpdate()
    }
  }

  const handleSaveTestimonial = (data: Partial<Testimonial>) => {
    if (editingItem) {
      const updated = testimonials.map(t => t.id === editingItem.id ? { ...t, ...data } : t)
      setTestimonials(updated)
      saveTestimonials(updated)
    } else {
      const newTest: Testimonial = { id: Date.now().toString(), name: data.name || '', location: data.location || '', quote: data.quote || '', rating: data.rating || 5, avatar: data.avatar || data.name?.charAt(0) || 'U' }
      const updated = [...testimonials, newTest]
      setTestimonials(updated)
      saveTestimonials(updated)
    }
    notifyUpdate()
    setShowModal(false)
    setEditingItem(null)
  }

  const handleDeleteTestimonial = (id: string) => {
    if (confirm('Delete this testimonial?')) {
      const updated = testimonials.filter(t => t.id !== id)
      setTestimonials(updated)
      saveTestimonials(updated)
      notifyUpdate()
    }
  }

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'projects', label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { key: 'products', label: 'Products', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { key: 'testimonials', label: 'Testimonials', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { key: 'brands', label: 'Brands', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="admin-layout">
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`admin-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <img src="/logo.png" alt="SSP Logo" className="admin-logo-img" />
            <div>
              <span>SSP Admin</span>
              <small>Dashboard</small>
            </div>
          </div>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <nav className="admin-nav" aria-label="Admin navigation">
          {tabs.map(t => (
            <button key={t.key} className={`admin-nav-item${activeTab === t.key ? ' active' : ''}`} onClick={() => { setActiveTab(t.key); setSidebarOpen(false) }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={t.icon}></path></svg>
              {t.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-nav-item admin-logout-btn" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Logout
          </button>
        </div>
      </aside>

      <div className="admin-content">
        <header className="admin-navbar" role="banner">
          <button className="admin-hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="admin-navbar-actions">
            <a href="/" className="admin-view-site-btn" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              View Site
            </a>
            <button className="btn btn-primary" onClick={() => { setEditingItem(null); setShowModal(true) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add New
            </button>
          </div>
        </header>

        <main className="admin-main" role="main">
          {activeTab === 'projects' && (
            <div className="admin-table">
              <table>
                <thead>
<tr>
                      <td><strong>{p.title}</strong></td>
                      <td>{p.location}</td>
                      <td>{p.capacity}</td>
                      <td>{p.type}</td>
                      <td>{p.savingsFrom || p.savingsTo ? `₹${p.savingsFrom || 0} - ₹${p.savingsTo || 0}` : '-'}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-btn-edit" onClick={() => { setEditingItem(p); setShowModal(true) }}>Edit</button>
                          <button className="admin-btn-delete" onClick={() => handleDeleteProject(p.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                </thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id}>
                      <td><strong>{p.title}</strong></td>
                      <td>{p.location}</td>
                      <td>{p.capacity}</td>
                      <td>{p.type}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-btn-edit" onClick={() => { setEditingItem(p); setShowModal(true) }}>Edit</button>
                          <button className="admin-btn-delete" onClick={() => handleDeleteProject(p.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="admin-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id}>
                      <td><strong>{p.name}</strong></td>
                      <td>{p.description}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-btn-edit" onClick={() => { setEditingItem(p); setShowModal(true) }}>Edit</button>
                          <button className="admin-btn-delete" onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="admin-table">
              <table>
                <thead>
<tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Capacity</th>
                    <th>Type</th>
                    <th>Savings (₹/month)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map(t => (
                    <tr key={t.id}>
                      <td><strong>{t.name}</strong></td>
                      <td>{t.location}</td>
                      <td aria-label={`Rating: ${t.rating} out of 5 stars`}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-btn-edit" onClick={() => { setEditingItem(t); setShowModal(true) }}>Edit</button>
                          <button className="admin-btn-delete" onClick={() => handleDeleteTestimonial(t.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'brands' && (
            <div className="admin-table">
              <table>
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map(b => (
                    <tr key={b.id}>
                      <td><img src={b.image} alt={`${b.name} logo`} className="admin-brand-thumb" loading="lazy" /></td>
                      <td><strong>{b.name}</strong></td>
                      <td>{b.category === 'panel' ? 'Solar Panel' : 'Inverter'}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-btn-edit" onClick={() => { setEditingItem(b); setShowModal(true) }}>Edit</button>
                          <button className="admin-btn-delete" onClick={() => handleDeleteBrand(b.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {showModal && (
            <AdminModal
              tab={activeTab}
              editingItem={editingItem}
              onSave={activeTab === 'projects' ? handleSaveProject : activeTab === 'products' ? handleSaveProduct : activeTab === 'brands' ? handleSaveBrand : handleSaveTestimonial}
              onClose={() => { setShowModal(false); setEditingItem(null) }}
            />
          )}
        </main>
      </div>
    </div>
  )
}

function AdminModal({ tab, editingItem, onSave, onClose }: {
  tab: Tab
  editingItem: any
  onSave: (data: any) => void
  onClose: () => void
}) {
  const [form, setForm] = useState(editingItem || {})

  const handleChange = (field: string, value: string | number) => {
    setForm((f: any) => ({ ...f, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div className="admin-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <h3 id="modal-title">{editingItem ? 'Edit' : 'Add New'} {tab === 'projects' ? 'Project' : tab === 'products' ? 'Product' : tab === 'brands' ? 'Brand' : 'Testimonial'}</h3>
        <form onSubmit={handleSubmit}>
          {tab === 'projects' && (
            <>
              <div className="admin-form-group">
                <label htmlFor="project-title">Title</label>
                <input id="project-title" value={form.title || ''} onChange={(e) => handleChange('title', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="project-location">Location</label>
                <input id="project-location" value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="project-image">Cover Image URL</label>
                <input id="project-image" value={form.image || ''} onChange={(e) => handleChange('image', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="project-gallery">Gallery Images (comma-separated URLs)</label>
                <textarea id="project-gallery" rows={3} value={form.images ? (Array.isArray(form.images) ? form.images.join(', ') : form.images) : ''} onChange={(e) => handleChange('images', e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label htmlFor="project-desc">Description</label>
                <textarea id="project-desc" rows={3} value={form.description || ''} onChange={(e) => handleChange('description', e.target.value)} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="admin-form-group">
                  <label htmlFor="project-capacity">Capacity</label>
                  <select id="project-capacity" value={form.capacity || ''} onChange={(e) => handleChange('capacity', e.target.value)}>
                    <option value="">Select Capacity</option>
                    {CAPACITY_OPTIONS.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="admin-form-group">
                  <label htmlFor="project-type">Type</label>
                  <select id="project-type" value={form.type || ''} onChange={(e) => handleChange('type', e.target.value)}>
                    <option value="">Select Type</option>
                    {PROJECT_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="admin-form-group">
                <label>Bill Savings (₹/month)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>From</span>
                    <input 
                      type="text" 
                      placeholder="₹ From" 
                      value={form.savingsFrom || ''} 
                      onChange={(e) => handleChange('savingsFrom', e.target.value)} 
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>To</span>
                    <input 
                      type="text" 
                      placeholder="₹ To" 
                      value={form.savingsTo || ''} 
                      onChange={(e) => handleChange('savingsTo', e.target.value)} 
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'products' && (
            <>
              <div className="admin-form-group">
                <label htmlFor="product-name">Name</label>
                <input id="product-name" value={form.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="product-desc">Description</label>
                <textarea id="product-desc" rows={3} value={form.description || ''} onChange={(e) => handleChange('description', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="product-image">Image URL</label>
                <input id="product-image" value={form.image || ''} onChange={(e) => handleChange('image', e.target.value)} />
              </div>
            </>
          )}

          {tab === 'brands' && (
            <>
              <div className="admin-form-group">
                <label htmlFor="brand-name">Brand Name</label>
                <input id="brand-name" value={form.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="brand-image">Logo URL</label>
                <input id="brand-image" value={form.image || ''} onChange={(e) => handleChange('image', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="brand-category">Category</label>
                <select id="brand-category" value={form.category || 'panel'} onChange={(e) => handleChange('category', e.target.value)}>
                  <option value="panel">Solar Panel</option>
                  <option value="inverter">Inverter</option>
                </select>
              </div>
            </>
          )}

          {tab === 'testimonials' && (
            <>
              <div className="admin-form-group">
                <label htmlFor="testimonial-name">Name</label>
                <input id="testimonial-name" value={form.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="testimonial-location">Location</label>
                <input id="testimonial-location" value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="testimonial-quote">Quote</label>
                <textarea id="testimonial-quote" rows={4} value={form.quote || ''} onChange={(e) => handleChange('quote', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label htmlFor="testimonial-rating">Rating (1-5)</label>
                <input id="testimonial-rating" type="number" min={1} max={5} value={form.rating || 5} onChange={(e) => handleChange('rating', parseInt(e.target.value))} />
              </div>
            </>
          )}

          <div className="admin-modal-actions">
            <button type="button" className="btn btn-ghost" style={{ color: 'var(--text-dark)', borderColor: 'var(--gray-mid)' }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">{editingItem ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
