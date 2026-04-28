import FounderCard from './FounderCard'
import { FoodIcon, WaterIcon, ShelterIcon, HealthIcon, EducationIcon } from './icons/CategoryIcons'

const CATEGORY_ICONS = {
  Food: FoodIcon,
  Water: WaterIcon,
  Shelter: ShelterIcon,
  Health: HealthIcon,
  Education: EducationIcon,
}

const CATEGORY_IMAGES = {
  Food: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600',
  Water: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600',
  Shelter: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1600',
  Health: 'https://images.unsplash.com/photo-1676364423907-8d8ccd4e486f?w=1600',
  Education: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600',
}

export default function CategorySection({ category, founders, flip, index }) {
  const Icon = CATEGORY_ICONS[category.name]

  const categoryCard = (
    <div
      className="relative w-72 flex-shrink-0 flex flex-col justify-between p-8 overflow-hidden"
      style={{ backgroundColor: '#1B3A2D', border: '1px solid rgba(255,255,255,0.25)', position: 'relative', zIndex: 2 }}
    >
      <span className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 text-[180px] font-black leading-none text-white/10">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 flex flex-col gap-3">
        <Icon size={32} />
        <h2 className="text-2xl font-bold text-white">{category.name}</h2>
        <p className="text-xs text-white/60 leading-relaxed">{category.description}</p>
      </div>

      <a
        href={`#${category.name.toLowerCase()}`}
        className="relative z-10 text-xs font-semibold tracking-widest text-white hover:text-white/70 transition-colors"
      >
        LEARN MORE →
      </a>
    </div>
  )

  const founderGrid = (
    <div className="flex-1 grid grid-cols-4 gap-3 p-4">
      {founders.map(founder => (
        <FounderCard key={founder.id} founder={founder} />
      ))}
    </div>
  )

  return (
    <div
      className="relative parallax-section"
      style={{
        backgroundImage: `url('${CATEGORY_IMAGES[category.name]}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: category.name === 'Health' ? 'right center' : 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.45)', zIndex: 0 }} />
      <section id={category.name.toLowerCase()} className="py-4 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-hidden rounded-2xl shadow-sm">
            {flip ? (
              <>
                {founderGrid}
                {categoryCard}
              </>
            ) : (
              <>
                {categoryCard}
                {founderGrid}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
