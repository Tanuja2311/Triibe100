import FounderCard from './FounderCard'

export default function ZoneSection({ zone, founders, zoneRef, nextImage, blendOpacity }) {
  return (
    <div
      ref={zoneRef}
      id={`zone-${zone.id}`}
      className="relative"
      style={{ minHeight: 'fit-content' }}
    >
      {/* Background layer 1: current zone image */}
      <div
        className="absolute inset-0 zone-bg"
        style={{
          zIndex: 0,
          backgroundImage: `url(${zone.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background layer 2: next zone image, fades in */}
      <div
        className="absolute inset-0 zone-bg"
        style={{
          zIndex: 1,
          backgroundImage: `url(${nextImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: blendOpacity,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 2, background: 'rgba(10, 20, 15, 0.58)' }}
      />

      {/* Content */}
      <div
        className="relative max-w-6xl mx-auto px-8 py-12"
        style={{ zIndex: 3 }}
      >
        {/* Zone header */}
        <div
          className="flex items-center mb-6 pb-4"
          style={{
            gap: '16px',
            borderBottom: '0.5px solid rgba(255,255,255,0.12)',
          }}
        >
          <span
            className="text-xs tracking-widest uppercase whitespace-nowrap"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {zone.range}
          </span>
          <div
            className="flex-1"
            style={{ height: '0.5px', background: 'rgba(255,255,255,0.08)' }}
          />
        </div>

        {/* Founder grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </div>
  )
}
