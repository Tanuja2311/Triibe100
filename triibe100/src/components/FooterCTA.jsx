const CARDS = [
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
    desc: 'Your donation helps founders build lasting impact in the communities they serve.',
    button: 'Donate',
  },
]

export default function FooterCTA() {
  return (
    <section style={{ backgroundColor: '#1B3A2D', padding: '64px 0' }}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(card => (
            <div
              key={card.title}
              className="flex flex-col"
              style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '40px 32px' }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {card.desc}
                </p>
              </div>
              <button
                className="w-full mt-8 py-3 font-medium text-sm transition-opacity hover:opacity-90"
                style={{ background: 'white', color: '#1B3A2D' }}
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
