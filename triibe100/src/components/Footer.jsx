import { Mail } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const CTA_CARDS = [
  {
    title: 'Join a Cohort',
    desc: 'Are you an undergraduate nonprofit founder? Apply to join our community of changemakers.',
    button: 'Apply',
  },
  {
    title: 'Get Involved',
    desc: 'Partner with TRIIBE to empower the next generation of nonprofit leaders.',
    button: 'Contact Us',
  },
  {
    title: 'Fund our Work',
    desc: 'Your donation helps founders make an impact in food, water, shelter, health, education, and energy.',
    button: 'Donate',
  },
]

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

export function FooterCTA() {
  return (
    <section style={{ backgroundColor: '#1B3A2D', padding: '60px 0' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {CTA_CARDS.map(card => (
            <div
              key={card.title}
              className="flex flex-col"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                padding: '40px 32px',
              }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p
                  className="text-sm text-white leading-relaxed"
                  style={{ opacity: 0.8, marginTop: '16px', lineHeight: 1.6 }}
                >
                  {card.desc}
                </p>
              </div>
              <button
                className="w-full font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'white',
                  color: '#1B3A2D',
                  padding: '14px',
                  borderRadius: '6px',
                  marginTop: '32px',
                }}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white" style={{ padding: '60px 0 32px' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-xl font-bold" style={{ color: '#1B3A2D' }}>TRIIBE</span>
            <p className="text-sm text-gray-500" style={{ marginTop: '12px', lineHeight: 1.6 }}>
              Helping next-gen nonprofit founders continue their work
            </p>
          </div>

          {NAV_COLS.map(col => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-gray-800">{col.heading}</p>
              <div className="flex flex-col" style={{ gap: '8px', marginTop: '12px' }}>
                {col.links.map(link => (
                  <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between"
          style={{ borderTop: '1px solid #e5e7eb', marginTop: '48px', paddingTop: '24px' }}
        >
          <span className="text-sm text-gray-400">© 2026 TRIIBE 501(c)(3). All rights reserved.</span>
          <div className="flex items-center" style={{ gap: '16px' }}>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><Mail size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><LinkedinIcon /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><XIcon /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><InstagramIcon /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}
