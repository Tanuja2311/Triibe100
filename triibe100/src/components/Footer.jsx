import { Mail } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const NAV_COLS = [
  {
    heading: 'For Applicants',
    links: ['Apply Now', 'Fellowship Details', 'FAQ'],
  },
  {
    heading: 'About',
    links: ['Team', 'Fellows'],
  },
  {
    heading: 'Partner',
    links: ['Donate', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white" style={{ padding: '48px 0 24px' }}>
      <div className="max-w-5xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-xl font-bold" style={{ color: '#1B3A2D' }}>TRIIBE</span>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Helping next-gen nonprofit founders build for the long haul.
            </p>
          </div>

          {NAV_COLS.map(col => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-gray-800">{col.heading}</p>
              <div className="flex flex-col mt-3" style={{ gap: '8px' }}>
                {col.links.map(link => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between mt-12 pt-6"
          style={{ borderTop: '1px solid #f3f4f6' }}
        >
          <span className="text-sm text-gray-400">© 2026 TRIIBE 501(c)(3). All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><Mail size={14} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><LinkedinIcon /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><XIcon /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><InstagramIcon /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}
