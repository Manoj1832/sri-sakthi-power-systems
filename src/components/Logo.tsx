interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 36, md: 48, lg: 80 }

export default function Logo({ size = 'md' }: LogoProps) {
  const h = sizes[size]
  const fontSize = h * 0.28

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/logo.png" alt="Sri Sakthi Power Systems" style={{ height: h * 1.5, width: 'auto', objectFit: 'contain' }} />
    </div>
  )
}