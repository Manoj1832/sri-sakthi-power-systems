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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
