import './about.css'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap fade-up">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
              alt="Solar panel installation by Sri Sakthi Power Systems"
            />
            <div className="about-img-badge">
              <img src="https://cdn-icons-png.flaticon.com/24/1828/1828640.png" alt="" style={{ width: 16, height: 16, filter: 'brightness(10)' }} />
              GST Registered
            </div>
          </div>

          {/* Content */}
          <div className="fade-up">
            <p className="section-label">About Us</p>
            <h2 className="section-heading">
Powering Tamil Nadu Through<br />
              <span className="text-blue">Contemporary Solar</span> Solutions
            </h2>
            <p className="about-body">
              Sri Sakthi Power Systems is a trusted solar energy partner
              based in Thindal. We are a GST-registered company (GSTIN: 33KGKPS8891F2ZI)
              specialising in complete solar solutions — from consultation and design
              to installation and after-sales support.
              <br /><br />
              We deal with India's top solar panel brands including Kirloskar, Adani,
              Waaree, Vikram, and Goldi. Our inverter portfolio includes Growatt,
              Sungrow, Havells, Polycab, and more.
            </p>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <div className="about-stat-num">300+</div>
                <div className="about-stat-label">Projects Done</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">9+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">21+</div>
                <div className="about-stat-label">Brands Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}