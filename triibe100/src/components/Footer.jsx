import { NAV_LINKS } from './Navbar'

const FOOTER_COLS = [
  {
    title: 'Join a Cohort',
    desc: 'Apply to be recognized as a TRIIBE I00 founder and join a community of next-gen changemakers building across the five commons.',
  },
  {
    title: 'Get Involved',
    desc: 'Volunteer, mentor, or partner with TRIIBE to support founders who are building with humility across food, water, shelter, health, and education.',
  },
  {
    title: 'Fund our Work',
    desc: 'Your support helps TRIIBE provide unrestricted funding, visibility, and credibility to the next generation of nonprofit founders.',
  },
]

export default function Footer() {
  return (
    <footer className="px-6 py-16 text-white" style={{ backgroundColor: '#1B3A2D' }}>
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-white/20">
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h3 className="text-base font-semibold mb-3">{col.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{col.desc}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 placeholder-white/30 text-white focus:outline-none focus:border-white/50 transition-colors"
                />
                <button className="flex-shrink-0 px-4 py-2 text-sm font-semibold bg-white text-[#1B3A2D] rounded-lg hover:bg-white/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-bold text-xl tracking-tight">TRIIBE</span>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/50 hover:text-white/90 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <span className="text-sm text-white/30">© 2026 TRIIBE. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}
