import { useState, useEffect, useRef } from 'react'
import './sections.css'

interface HomeStatsProps {
  variant?: 'light' | 'dark'
}

const statsData = [
  { label: 'Years Experience', value: 9, suffix: '+' },
  { label: 'Projects Completed', value: 300, suffix: '+' },
  { label: 'Partner Brands', value: 21, suffix: '+' },
]

export default function HomeStats({ variant = 'dark' }: HomeStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`home-stats-section ${variant === 'light' ? 'light' : ''}`}
    >
      <div className="container">
        <div className="home-stats-grid">
          {statsData.map((stat, index) => (
            <div 
              key={stat.label} 
              className="home-stat-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CountUp
                target={stat.value}
                isVisible={isVisible}
                suffix={stat.suffix}
                delay={index * 150}
              />
              <span className="home-stat-label">{stat.label}</span>
              <span className="home-stat-line"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({
  target,
  isVisible,
  suffix = '',
  delay = 0
}: {
  target: number
  isVisible: boolean
  suffix?: string
  delay?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 2500
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, target, delay])

  return (
    <span className="home-stat-value">
      {count.toLocaleString()}{suffix}
    </span>
  )
}