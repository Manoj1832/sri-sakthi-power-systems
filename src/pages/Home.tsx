import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import LogoLoop from '../components/LogoLoop'
import Products from '../components/Products'
import HowItWorks from '../components/HowItWorks'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'

import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogoLoop />
        <Products />
        <HowItWorks />
        <Brands />
        <Testimonials />

      </main>
      <Footer />
    </>
  )
}
