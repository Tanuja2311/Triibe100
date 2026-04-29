export default function Intro() {
  return (
    <section
      className="bg-white"
      style={{ padding: '64px 0', borderBottom: '0.5px solid #f3f4f6' }}
    >
      <div className="max-w-4xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">

        <div>
          <p className="text-xs tracking-widest uppercase text-green-800 mb-3">TRIIBE I00</p>
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
