import { useState } from 'react'
import { CATEGORIES } from '../data/founders'
import { FoodIcon, WaterIcon, ShelterIcon, HealthIcon, EducationIcon } from './icons/CategoryIcons'

const CATEGORY_ICONS = {
  Food: FoodIcon,
  Water: WaterIcon,
  Shelter: ShelterIcon,
  Health: HealthIcon,
  Education: EducationIcon,
}

export default function Hero() {
  const [active, setActive] = useState('Food')

  function handlePillClick(name) {
    setActive(name)
    const el = document.getElementById(name.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

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
        <div className="mt-10 flex flex-wrap items-center justify-center" style={{ gap: '10px' }}>
          {CATEGORIES.map(cat => {
            const Icon = CATEGORY_ICONS[cat.name]
            const isActive = active === cat.name
            return (
              <button
                key={cat.name}
                onClick={() => handlePillClick(cat.name)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: isActive ? '1px solid rgba(255,255,255,0.6)' : '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '99px',
                  padding: '8px 20px 8px 14px',
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'transparent',
                  color: 'white',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                <Icon size={16} color="white" />
                {cat.name}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
