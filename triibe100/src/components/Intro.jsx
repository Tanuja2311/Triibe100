export default function Intro() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '64px 0',
        borderBottom: '0.5px solid #f3f4f6',
      }}
    >
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div>
          <p className="text-xs tracking-widest uppercase text-green-900 mb-3">TRIIBE I00</p>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Next-gen for next-gen. A definitive list of founders building with humility.
          </h2>
        </div>

        <div>
          <p className="text-sm text-gray-500 leading-relaxed">
            These aren't the loudest voices. They're the ones staying after the meeting,
            showing up on Saturdays, earning the trust of the communities they serve.
            The TRIIBE I00 is a seal of credibility, a community of peers, and a signal
            to the world that this work matters.
          </p>
        </div>

      </div>
    </section>
  )
}
