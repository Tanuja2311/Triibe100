const NAV_LINKS = ['Home', 'Program', 'Summit', 'Triibe100', 'Events', 'Media', 'About Us']

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#1B3A2D', height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        <span className="font-bold text-xl tracking-tight text-white">TRIIBE</span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors hover:text-white"
              style={{
                color: link === 'Triibe100' ? 'white' : 'rgba(255,255,255,0.6)',
                fontWeight: link === 'Triibe100' ? '700' : '400',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden md:block text-sm text-white transition-colors"
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              background: 'transparent',
              padding: '8px 20px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = '#1B3A2D'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'white'
            }}
          >
            Donate
          </button>
          <button
            className="text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'white',
              color: '#1B3A2D',
              padding: '8px 20px',
            }}
          >
            Apply
          </button>
        </div>

      </div>
    </nav>
  )
}
