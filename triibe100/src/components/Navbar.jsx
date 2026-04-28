const NAV_LINKS = ['Home', 'Program', 'Summit', 'Triibe100', 'Events', 'Media', 'About Us']

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#1B3A2D', height: '64px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V12" />
            <path d="M12 12C12 12 7 10 7 5a5 5 0 0 1 10 0c0 5-5 7-5 7z" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-white">TRIIBE</span>
        </div>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href="#"
              className="text-sm transition-opacity hover:opacity-70"
              style={{
                color: 'white',
                fontWeight: link === 'Triibe100' ? '700' : '400',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <button
            className="text-sm text-white transition-all hover:bg-white"
            style={{
              border: '1px solid white',
              background: 'transparent',
              padding: '8px 20px',
              borderRadius: '6px',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1B3A2D'; e.currentTarget.style.background = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'transparent' }}
          >
            Donate
          </button>
          <button
            className="text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'white',
              color: '#1B3A2D',
              padding: '8px 20px',
              borderRadius: '6px',
            }}
          >
            Apply
          </button>
        </div>

      </div>
    </nav>
  )
}
