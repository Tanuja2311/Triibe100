import { useState } from 'react'
import FounderCard from './FounderCard'

export default function ZoneSection({ zone, founders, driftX }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div id={`zone-${zone.id}`} style={{ position: 'relative' }}>

      {/* Drifting background */}
      <div
        className="zone-drift-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${zone.image})`,
          backgroundPosition: driftX,
          backgroundRepeat: 'no-repeat',
          transition: 'background-position 0.1s linear',
          willChange: 'background-position',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(10, 20, 15, 0.60)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '48px 32px',
        }}
      >
        {/* Zone header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '0.5px solid rgba(255,255,255,0.1)',
          }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}
          >
            {zone.range}
          </span>
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Founder grid */}
        <div className="founder-grid">
          {founders.map(founder => (
            <FounderCard
              key={founder.id}
              founder={founder}
              expanded={expandedId === founder.id}
              onToggle={() =>
                setExpandedId(expandedId === founder.id ? null : founder.id)
              }
            />
          ))}
        </div>
      </div>

    </div>
  )
}
