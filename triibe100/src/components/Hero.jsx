export default function Hero() {
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
          className="text-sm leading-relaxed mx-auto mt-3 max-w-sm"
          style={{ color: '#6b7280' }}
        >
          A seal of credibility for founders in their 20s building with humility,
          staying after the meeting, earning the trust of the communities they serve.
        </p>

      </div>
    </section>
  )
}
