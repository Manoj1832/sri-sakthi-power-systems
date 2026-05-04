interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 36, md: 48, lg: 80 }

export default function Logo({ size = 'md' }: LogoProps) {
  const h = sizes[size]
  const fontSize = h * 0.28

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: h * 0.22 }}>
      <img src="https://cdn-icons-png.flaticon.com/512/3248/3248316.png" alt="Sri Sakthi Power Systems Logo" width={h} height={h} />
      <div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: `${fontSize}px`,
          color: '#001a33',
          lineHeight: 1.1,
          letterSpacing: '-0.3px',
        }}>
          Sri Sakthi
        </div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
          fontSize: `${fontSize * 0.65}px`,
          color: '#0ea5e9',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}>
          Power Systems
        </div>
      </div>
    </div>
  )
}