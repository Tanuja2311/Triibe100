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
        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 600,
            color: '#002C19',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          TRIIBE I00
        </h1>

        <p
          style={{
            fontSize: '16px',
            color: '#303641',
            opacity: 0.65,
            fontWeight: 400,
            maxWidth: '420px',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          A definitive list of next-gen nonprofit founders in their 20s to know.
        </p>
      </div>
    </section>
  )
}
