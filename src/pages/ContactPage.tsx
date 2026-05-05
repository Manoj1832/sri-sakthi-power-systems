import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

interface FormErrors {
  name?: string
  phone?: string
}

const contactInfo = [
  { 
    label: 'Address', 
    value: '18/16, Kumaran Towers Road, Thindal, Erode – 638012, Tamil Nadu',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  { 
    label: 'Phone', 
    value: '+91 73589 42468 / +91 99943 47579',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
  { 
    label: 'Email', 
    value: 'srisakthipowersystemserd@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  },
  { 
    label: 'Hours', 
    value: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  { 
    label: 'GSTIN', 
    value: '33KGKPS8891F2ZI',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  },
]

const productOptions = [
  'On-Grid Solar',
  'Off-Grid Solar', 
  'Hybrid Solar',
  'Solar Pump',
  'Solar Street Light',
  'Solar Water Heater',
  'Other'
]

export default function ContactPage() {
  useScrollAnimation()
  
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name: string, value: string): string | undefined => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required'
      if (value.trim().length < 2) return 'Name must be at least 2 characters'
    }
    if (name === 'phone') {
      if (!value.trim()) return 'Phone number is required'
      if (!/^[6-9]\d{9}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid 10-digit mobile number'
    }
    return undefined
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: FormErrors = {
      name: validateField('name', form.name),
      phone: validateField('phone', form.phone)
    }
    
    setErrors(newErrors)
    setTouched({ name: true, phone: true, email: true, product: true, message: true })
    
    if (newErrors.name || newErrors.phone) {
      return
    }

    const message = encodeURIComponent(
      `Hi Sri Sakthi Power Systems,\n\nI am ${form.name}.\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${form.product ? `\nInterested in: ${form.product}` : ''}${form.message ? `\nMessage: ${form.message}` : ''}\n\nPlease contact me regarding a free quote.`
    )
    
    window.open(`https://wa.me/917358942468?text=${message}`, '_blank')
    setIsSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <div className="contact-hero-text">
                <p className="section-label">Contact Us</p>
                <h1 className="section-heading light">
                  Get a <span className="text-yellow">Free Quote</span>
                </h1>
              </div>
              <div className="contact-hero-badges">
                <div className="contact-hero-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Free Site Visit</span>
                </div>
                <div className="contact-hero-divider" />
                <div className="contact-hero-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Same Day Response</span>
                </div>
                <div className="contact-hero-divider" />
                <div className="contact-hero-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span>9+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info-panel fade-up">
                <h2 className="contact-info-title">Reach Us Directly</h2>
                <div className="contact-info-list">
                  {contactInfo.map((item, i) => (
                    <div key={item.label} className="contact-info-item">
                      <div className="contact-info-icon">
                        {item.icon}
                      </div>
                      <div>
                        <div className="contact-info-label">{item.label}</div>
                        <div className="contact-info-value">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://wa.me/917358942468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.493.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>

              <div className="contact-form-panel fade-up" style={{ animationDelay: '0.1s' }}>
                {isSubmitted ? (
                  <div className="contact-form-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3>Enquiry Sent!</h3>
                    <p>We've opened WhatsApp with your details. We'll get back to you shortly.</p>
                    <button onClick={() => { setIsSubmitted(false); setForm({ name: '', phone: '', email: '', product: '', message: '' }); setErrors({}); setTouched({}); }} className="btn btn-outline-blue">Send Another</button>
                  </div>
                ) : (
                  <>
                    <div className="contact-form-header">
                      <h3>Send an Enquiry</h3>
                      <p>We'll get back to you within a few hours</p>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className={`contact-form-group${touched.name && errors.name ? ' has-error' : ''}`}>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                          className="contact-form-input"
                        />
                        <label htmlFor="name" className="contact-form-label">Your Full Name *</label>
                        {touched.name && errors.name && <span className="contact-form-error">{errors.name}</span>}
                      </div>

                      <div className={`contact-form-group${touched.phone && errors.phone ? ' has-error' : ''}`}>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                          className="contact-form-input"
                        />
                        <label htmlFor="phone" className="contact-form-label">Phone Number *</label>
                        {touched.phone && errors.phone && <span className="contact-form-error">{errors.phone}</span>}
                      </div>

                      <div className="contact-form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder=" "
                          className="contact-form-input"
                        />
                        <label htmlFor="email" className="contact-form-label">Email Address</label>
                      </div>

                      <div className="contact-form-group">
                        <select
                          name="product"
                          id="product"
                          value={form.product}
                          onChange={handleChange}
                          className="contact-form-input"
                        >
                          <option value="">Product Interest (Optional)</option>
                          {productOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <label htmlFor="product" className="contact-form-label select-label">Product Interest</label>
                      </div>

                      <div className="contact-form-group">
                        <textarea
                          name="message"
                          id="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder=" "
                          rows={4}
                          maxLength={500}
                          className="contact-form-input"
                        />
                        <label htmlFor="message" className="contact-form-label">Your Message or Requirements</label>
                        <span className="contact-char-count">{form.message.length}/500</span>
                      </div>

                      <button type="submit" className="contact-submit-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.493.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Send via WhatsApp
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="contact-map-section fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="contact-map-title">Find Us</h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.059874!2d77.7172!3m11.341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s18%2F16%2C%20Kumaran%20Towers%20Road%2C%20Thindal%2C%20Erode%2C%20Tamil%20Nadu%20638012!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Sakthi Power Systems Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}