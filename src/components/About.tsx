import { Link } from 'react-router-dom'
import './about.css'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap fade-up">
            <img
              src="https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=1600"
              alt="Solar Installation"
            />
            <div className="about-img-badge">
              GST Registered · Since 2016
            </div>
          </div>

          <div className="fade-up">
            <p className="section-label">About Us</p>
            <h2 className="section-heading">
              Powering Erode Through<br />
              <span className="text-blue">Contemporary Solar</span> Solutions
            </h2>
            <p className="about-body">
              Sri Sakthi Power Systems is a GST-registered solar energy company based in Thindal, Erode,
              dealing in India's top solar panel and inverter brands. Our experienced team ensures quality
              installation, proper documentation, and after-sales support for every project — residential,
              commercial, or industrial.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <div className="about-stat-num">300+</div>
                <div className="about-stat-label">Projects Done</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">9+</div>
                <div className="about-stat-label">Panel Brands</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-num">12+</div>
                <div className="about-stat-label">Inverter Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}