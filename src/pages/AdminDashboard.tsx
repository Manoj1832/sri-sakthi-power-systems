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
  savings: string
  images: string[]
}

interface Product {
  id: string
  name: string
  description: string
  image: string
}

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

type Tab = 'projects' | 'products' | 'testimonials'

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  const [projects, setProjects] = useState<Project[]>(loadProjects())
  const [products, setProducts] = useState<Product[]>(loadProducts())
  const [testimonials, setTestimonials] = useState<Testimonial[]>(loadTestimonials())

  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin')
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) return null

  const notifyUpdate = () => {
    window.dispatchEvent(new Event('ssp_data_update'))
  }

  // Project CRUD
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
        savings: data.savings || '',
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

  // Product CRUD
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

  // Testimonial CRUD
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

  const tabs: { key: Tab; label: string }[] = [
    { key: 'projects', label: 'Projects' },
    { key: 'products', label: 'Products' },
    { key: 'testimonials', label: 'Testimonials' },
  ]

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span>SSP Admin</span>
          <small>Dashboard</small>
        </div>
        {tabs.map(t => (
          <button key={t.key} className={`admin-nav-item${activeTab === t.key ? ' active' : ''}`} onClick={() => setActiveTab(t.key)}>
            {t.key === 'projects' ? '📁' : t.key === 'products' ? '📦' : '⭐'} {t.label}
          </button>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button className="admin-nav-item" onClick={() => { logout(); navigate('/') }}>
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <button className="btn btn-primary" onClick={() => { setEditingItem(null); setShowModal(true) }}>
            + Add New
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="admin-table">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Capacity</th>
                  <th>Type</th>
                  <th>Actions</th>
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
                  <th>Name</th>
                  <th>Location</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map(t => (
                  <tr key={t.id}>
                    <td><strong>{t.name}</strong></td>
                    <td>{t.location}</td>
                    <td>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</td>
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

        {showModal && (
          <AdminModal
            tab={activeTab}
            editingItem={editingItem}
            onSave={activeTab === 'projects' ? handleSaveProject : activeTab === 'products' ? handleSaveProduct : handleSaveTestimonial}
            onClose={() => { setShowModal(false); setEditingItem(null) }}
          />
        )}
      </main>
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
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{editingItem ? 'Edit' : 'Add New'} {tab === 'projects' ? 'Project' : tab === 'products' ? 'Product' : 'Testimonial'}</h3>
        <form onSubmit={handleSubmit}>
          {tab === 'projects' && (
            <>
              <div className="admin-form-group">
                <label>Title</label>
                <input value={form.title || ''} onChange={(e) => handleChange('title', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Location</label>
                <input value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Cover Image URL</label>
                <input value={form.image || ''} onChange={(e) => handleChange('image', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Gallery Images (comma-separated URLs)</label>
                <textarea rows={3} value={form.images ? (Array.isArray(form.images) ? form.images.join(', ') : form.images) : ''} onChange={(e) => handleChange('images', e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea rows={3} value={form.description || ''} onChange={(e) => handleChange('description', e.target.value)} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="admin-form-group">
                  <label>Capacity</label>
                  <input value={form.capacity || ''} onChange={(e) => handleChange('capacity', e.target.value)} />
                </div>
                <div className="admin-form-group">
                  <label>Type</label>
                  <input value={form.type || ''} onChange={(e) => handleChange('type', e.target.value)} />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Bill Savings</label>
                <input value={form.savings || ''} onChange={(e) => handleChange('savings', e.target.value)} />
              </div>
            </>
          )}

          {tab === 'products' && (
            <>
              <div className="admin-form-group">
                <label>Name</label>
                <input value={form.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea rows={3} value={form.description || ''} onChange={(e) => handleChange('description', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Image URL</label>
                <input value={form.image || ''} onChange={(e) => handleChange('image', e.target.value)} />
              </div>
            </>
          )}

          {tab === 'testimonials' && (
            <>
              <div className="admin-form-group">
                <label>Name</label>
                <input value={form.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Location</label>
                <input value={form.location || ''} onChange={(e) => handleChange('location', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Quote</label>
                <textarea rows={4} value={form.quote || ''} onChange={(e) => handleChange('quote', e.target.value)} required />
              </div>
              <div className="admin-form-group">
                <label>Rating (1-5)</label>
                <input type="number" min={1} max={5} value={form.rating || 5} onChange={(e) => handleChange('rating', parseInt(e.target.value))} />
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
