import './bottom-sections.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content fade-up">
        <p className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.7)' }}>Get Started</p>
        <h2>
          Get <span>Solar Energy</span><br />
          for Your Home Today
        </h2>
        <p>
          Save up to 90% on electricity bills. Contact us for a free site survey
          and customised solar quote — no obligation, no hidden charges.
        </p>
        <div className="cta-banner-actions">
          <a
            href="https://wa.me/917358942468?text=Hi%2C%20I%20want%20a%20free%20solar%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="" style={{ width: 18, height: 18 }} />
            WhatsApp Us
          </a>
          <a href="tel:+917358942468" className="btn btn-ghost">
            <img src="https://cdn-icons-png.flaticon.com/24/724/724664.png" alt="" style={{ width: 18, height: 18, filter: 'brightness(10)' }} />
            Call Now
          </a>
        </div>
        <div className="cta-phone-link">
          <img src="https://cdn-icons-png.flaticon.com/16/724/724664.png" alt="" style={{ width: 14, height: 14, filter: 'brightness(10)' }} />
          <a href="tel:+917358942468">+91 73589 42468</a>
          &nbsp;·&nbsp;
          <a href="tel:+919994347579">+91 99943 47579</a>
        </div>
      </div>
    </section>
  )
}
