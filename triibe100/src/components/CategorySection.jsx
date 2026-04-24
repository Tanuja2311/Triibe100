import FounderCard from './FounderCard'

export default function CategorySection({ category, founders, flip, index }) {
  return (
    <section
      id={category.name.toLowerCase()}
      className={`py-16 px-6 ${flip ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Feature card — content flips left / right per section */}
        <div
          className="rounded-2xl px-10 py-12 md:px-16 md:py-14 mb-10 relative overflow-hidden"
          style={{ backgroundColor: '#1B3A2D' }}
        >
          <div
            className={`relative z-10 text-white flex flex-col max-w-sm ${
              flip ? 'items-end ml-auto text-right' : 'items-start'
            }`}
          >
            <span className="text-5xl leading-none">{category.emoji}</span>
            <h2 className="text-3xl font-bold mt-5">{category.name}</h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {category.description}
            </p>
            <button className="mt-8 text-sm font-semibold tracking-wider text-white hover:text-white/70 transition-colors">
              LEARN MORE ↗
            </button>
          </div>
          <span
            className={`pointer-events-none select-none absolute top-1/2 -translate-y-1/2 text-[220px] font-black leading-none text-white/[0.04] ${
              flip ? 'left-8' : 'right-8'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* 4-column founder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>

      </div>
    </section>
  )
}
