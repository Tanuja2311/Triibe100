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
    <section className="pt-20 pb-16 px-6 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          TRIIBE I00
        </span>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
          Honoring 100 next-gen
          <br />
          nonprofit founders.
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-500 leading-relaxed">
          Twenty changemakers each in food, water, shelter, health, and education.
          <br className="hidden sm:block" />
          Founders under 30 whose organizations are taking root today to advance tomorrow.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.name
            const Icon = CATEGORY_ICONS[cat.name]
            const iconColor = isActive ? 'white' : '#1B3A2D'
            return (
              <button
                key={cat.name}
                onClick={() => onCategoryToggle(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? 'bg-[#1B3A2D] text-white border-[#1B3A2D] shadow-sm'
                    : 'bg-white text-[#1B3A2D] border-[#e5e7eb] hover:border-[#1B3A2D]'
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
