import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactPage() {
  useScrollAnimation()
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello Sri Sakthi Power Systems,\n\nI am reaching out to request a premium consultation regarding your solar solutions.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || 'N/A'}\n*Product Interest:* ${form.product || 'N/A'}\n*Message:* ${form.message || 'N/A'}\n\nPlease let me know when we can discuss this further.`
    )
    window.open(`https://wa.me/917358942468?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <div style={{ background: 'var(--dark)', padding: '80px 0 60px', textAlign: 'center' }}>
          <div className="container">
            <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
            <h1 className="section-heading light">Contact Us</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '17px' }}>
              We're happy to help. Reach us via WhatsApp, phone, or email.
            </p>
          </div>
        </div>

        <section style={{ padding: 'var(--pad-section) 0', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '72px', alignItems: 'start' }}>
              <div className="fade-up">
                <h2 className="section-heading" style={{ marginBottom: '32px' }}>
                  Get a <span className="text-blue">Free Quote</span>
                </h2>
                {[
                  { icon: '', label: 'Address', value: '18/16, Kumaran Towers Road, Thindal, Erode – 638012, Tamil Nadu' },
                  { icon: '', label: 'Phone', value: '+91 73589 42468 / +91 99943 47579' },
                  { icon: '', label: 'Email', value: 'srisakthipowersystemserd@gmail.com' },
                  { icon: '', label: 'Hours', value: 'Monday – Saturday: 9:00 AM – 7:00 PM' },
                  { icon: '', label: 'GSTIN', value: '33KGKPS8891F2ZI' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '20px', color: 'var(--blue)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{item.label === 'Address' ? '📍' : item.label === 'Phone' ? '📞' : item.label === 'Email' ? '✉️' : item.label === 'Hours' ? '🕐' : '🏷️'}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '14px', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.value}</div>
                    </div>
                  </div>
                ))}

                <a
                  href="https://wa.me/917358942468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '8px' }}
                >
                  Open WhatsApp
                </a>
              </div>

              <div className="fade-up">
                <div style={{ background: 'var(--gray-light)', borderRadius: 'var(--radius)', padding: '40px' }}>
                  {sent ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                      <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '22px', color: 'var(--text-dark)', marginBottom: '12px' }}>Message Sent!</h3>
                      <p style={{ color: 'var(--text-muted)' }}>We've opened WhatsApp with your details. We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '22px', color: 'var(--text-dark)', marginBottom: '8px' }}>Send an Enquiry</h3>

                      {[
                        { name: 'name',  type: 'text',  placeholder: 'Your Full Name *',  required: true },
                        { name: 'phone', type: 'tel',   placeholder: 'Phone Number *',     required: true },
                        { name: 'email', type: 'email', placeholder: 'Email Address',      required: false },
                      ].map(f => (
                        <input
                          key={f.name}
                          name={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required}
                          value={(form as Record<string, string>)[f.name]}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      ))}

                      <select name="product" value={form.product} onChange={handleChange} style={inputStyle}>
                        <option value="">Product Interest (Optional)</option>
                        {['Solar Panels','Solar Inverters','OnGrid Power Plant','Hybrid Power Plant','Off-Grid Plant','Solar Water Heater','Solar Pumps','Solar Street Light','Other'].map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>

                      <textarea
                        name="message"
                        placeholder="Your Message or Requirements"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />

                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                        Send via WhatsApp
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid #dde8f0',
  fontSize: '15px',
  fontFamily: 'var(--font-body)',
  background: '#fff',
  outline: 'none',
  color: 'var(--text-dark)',
  transition: 'border-color 0.2s',
}
