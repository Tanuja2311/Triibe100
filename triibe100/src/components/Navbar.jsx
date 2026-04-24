export const NAV_LINKS = ['Home', 'Program', 'Summit', 'Press', 'About Us']

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <span className="font-bold text-xl tracking-tight text-[#1B3A2D]">TRIIBE</span>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
            Sign In
          </button>
          <button className="text-sm px-4 py-2 bg-[#1B3A2D] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Apply
          </button>
        </div>
      </div>
    </nav>
  )
}
