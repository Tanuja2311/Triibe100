const STATS = [
  { value: '100', label: 'Founders' },
  { value: '5',   label: 'Commons' },
  { value: '30+', label: 'Countries' },
  { value: 'U30', label: 'Under 30' },
]

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen"
      style={{ backgroundColor: '#1B3A2D', paddingTop: '80px' }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
          TRIIBE I00 — Class of 2026
        </p>

        <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Honoring{' '}
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>100</span>
          {' '}next-gen nonprofit founders.
        </h1>

        <p
          className="text-sm leading-relaxed mx-auto mt-3 mb-8 max-w-sm"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          A seal of credibility for founders under 30 building with humility,
          staying after the meeting, earning the trust of the communities they serve.
        </p>

        <div className="w-10 h-px mx-auto mb-6" style={{ background: 'rgba(255,255,255,0.2)' }} />

        <div className="flex items-center justify-center">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}
            >
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <span className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
