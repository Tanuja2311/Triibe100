const NAV_LINKS = ['Home', 'Program', 'Summit', 'Triibe100', 'Events', 'Media', 'About Us']

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full flex items-center justify-between px-8"
      style={{ backgroundColor: '#1B3A2D', height: '64px' }}
    >
      <span className="text-sm font-bold text-white tracking-wider">TRIIBE</span>

      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href="#"
            className="text-xs transition-colors hover:text-white"
            style={{
              color: link === 'Triibe100' ? 'white' : 'rgba(255,255,255,0.6)',
              fontWeight: link === 'Triibe100' ? '500' : '400',
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hidden md:block text-xs text-white rounded border transition-colors hover:bg-white"
          style={{ borderColor: 'rgba(255,255,255,0.4)', padding: '8px 16px' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#1B3A2D' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'white' }}
        >
          Donate
        </button>
        <button
          className="text-xs font-medium rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'white', color: '#1B3A2D', padding: '8px 16px' }}
        >
          Apply
        </button>
      </div>
    </nav>
  )
}
