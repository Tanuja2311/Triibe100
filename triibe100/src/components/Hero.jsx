import { CATEGORIES } from '../data/founders'
import { FoodIcon, WaterIcon, ShelterIcon, HealthIcon, EducationIcon } from './icons/CategoryIcons'

const CATEGORY_ICONS = {
  Food: FoodIcon,
  Water: WaterIcon,
  Shelter: ShelterIcon,
  Health: HealthIcon,
  Education: EducationIcon,
}

export default function Hero({ activeCategory, onCategoryToggle }) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center relative parallax-section"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(27, 58, 45, 0.55)', zIndex: 0 }} />
      <div className="max-w-3xl mx-auto relative" style={{ zIndex: 1 }}>
        <span className="text-xs font-semibold tracking-widest text-white uppercase">
          TRIIBE I00
        </span>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
          Honoring 100 next-gen
          <br />
          nonprofit founders.
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Twenty changemakers each in food, water, shelter, health, and education.
          <br className="hidden sm:block" />
          Founders under 30 whose organizations are taking root today to advance tomorrow.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.name
            const Icon = CATEGORY_ICONS[cat.name]
            const iconColor = isActive ? '#1B3A2D' : 'white'
            return (
              <button
                key={cat.name}
                onClick={() => onCategoryToggle(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? 'bg-white text-[#1B3A2D] border-white shadow-sm'
                    : 'bg-transparent text-white border-white hover:bg-white/20'
                }`}
              >
                <Icon size={16} color={iconColor} />
                {cat.name}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
