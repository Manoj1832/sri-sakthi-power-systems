import { useState } from 'react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function QuoteModal({ isOpen, onClose, productName }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirements: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    let message = `Hello Sri Sakthi Power Systems,\n\nI would like to request a premium quote and consultation for ${productName || 'your Solar Solutions'}.\n\n`
    message += `*Name:* ${formData.name}\n`
    message += `*Phone:* ${formData.phone}\n`
    message += `*Location:* ${formData.location}\n`
    if (formData.requirements) {
      message += `*Requirements:* ${formData.requirements}\n`
    }
    message += `\nPlease advise on the next steps.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/917358942468?text=${encodedMessage}`, '_blank')
    onClose()
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        background: '#fff', padding: '24px', borderRadius: '12px',
        width: 'calc(100% - 32px)', maxWidth: '440px', position: 'relative',
        boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
        boxSizing: 'border-box',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '24px', color: '#666' }}
        >
          &times;
        </button>
        <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '24px', marginBottom: '8px', color: 'var(--text-dark)' }}>
          Get a Quote
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
          {productName ? `Inquiring about: ${productName}` : 'Fill in your details and we will reach out.'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-dark)' }}>Name</label>
            <input 
              type="text" required
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--gray-mid)', fontSize: '15px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-dark)' }}>Phone Number</label>
            <input 
              type="tel" required
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--gray-mid)', fontSize: '15px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-dark)' }}>Location (City/Area)</label>
            <input 
              type="text" required
              value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--gray-mid)', fontSize: '15px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-dark)' }}>Requirements (Optional)</label>
            <textarea 
              rows={3}
              value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--gray-mid)', fontSize: '15px', resize: 'vertical' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="" style={{ width: 18, height: 18 }} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
