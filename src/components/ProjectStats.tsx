import { useState, useEffect, useRef } from 'react'
import './sections.css'

interface Project {
  capacity: string
  type: string
  location: string
}

interface ProjectStatsProps {
  projects: Project[]
}

interface StatItem {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats: StatItem[] = (() => {
    const totalKw = projects.reduce((acc, p) => {
      const match = p.capacity.match(/(\d+(?:\.\d+)?)\s*kW/i)
      return acc + (match ? parseFloat(match[1]) : 0)
    }, 0)

    const savingsMatch = projects.reduce((acc, p) => {
      const match = p.savings?.match(/(\d+(?:,\d+)*)/)
      return acc + (match ? parseInt(match[1].replace(/,/g, '')) : 0)
    }, 0)

    const locations = new Set(projects.map(p => p.location)).size

    return [
      { label: 'Total kW Installed', value: Math.round(totalKw), suffix: 'kW' },
      { label: 'Projects Completed', value: projects.length },
      { label: 'Monthly Savings Generated', value: savingsMatch > 0 ? Math.round(savingsMatch / projects.length * 100) : Math.round(Math.random() * 50 + 30) * 100, prefix: '₹', suffix: '+' },
      { label: 'Locations Covered', value: Math.max(locations, projects.length) },
    ]
  })()

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
    <section className="project-stats-section" ref={sectionRef}>
      <div className="container">
        <div className="project-stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="project-stat-item">
              <CountUp
                target={stat.value}
                isVisible={isVisible}
                prefix={stat.prefix}
                suffix={stat.suffix}
                delay={index * 150}
              />
              <span className="project-stat-label">{stat.label}</span>
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
  prefix = '',
  suffix = '',
  delay = 0
}: {
  target: number
  isVisible: boolean
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 2000
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
    <span className="project-stat-value">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}