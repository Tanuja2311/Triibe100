import { useCountUp } from '../hooks/useCountUp'

export default function Hero() {
  const foundersCount = useCountUp(100, 1500, 300)
  const countriesCount = useCountUp(30, 1500, 500)

  const STATS = [
    { display: String(foundersCount),       label: 'Founders'     },
    { display: `${countriesCount}+`,        label: 'Countries'    },
    { display: '20s',                       label: 'All Founders' },
  ]

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: '#ffffff', padding: '80px 0 64px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: '#1B3A2D' }}
        >
          TRIIBE I00
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: '#111111' }}>
          Honoring{' '}
          <span style={{ color: '#002C19' }}>100</span>
          {' '}next-gen nonprofit founders.
        </h1>

        <p
          className="text-sm leading-relaxed mx-auto mt-3 mb-8 max-w-sm"
          style={{ color: '#6b7280' }}
        >
          A seal of credibility for founders in their 20s building with humility,
          staying after the meeting, earning the trust of the communities they serve.
        </p>

        <div className="w-10 h-px mx-auto mb-6" style={{ background: '#e5e7eb' }} />

        <div className="flex items-center justify-center">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid #e5e7eb' : 'none',
              }}
            >
              <span className="text-xl font-bold" style={{ color: '#1B3A2D' }}>{stat.display}</span>
              <span
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: '#9ca3af' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
