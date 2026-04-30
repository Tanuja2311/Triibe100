import { useBranchReveal } from '../hooks/useBranchReveal'
import FounderCard from './FounderCard'
import FloatingLeaves from './FloatingLeaves'


export default function ZoneSection({ zone, founders, isFirst }) {
  const { ref, revealed } = useBranchReveal()

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        backgroundColor: zone.bg,
        padding: '48px 32px 56px',
        marginTop: isFirst ? 0 : '-48px',
        overflow: 'hidden',
      }}
    >
      <FloatingLeaves />

      {/* Soft overlap fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '32px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.12), transparent)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Branch decoration */}
      <img
        src={zone.branch}
        alt=""
        aria-hidden="true"
        className={revealed ? 'branch-revealed' : 'branch-hidden'}
        style={{
          position: 'absolute',
          ...(zone.id % 2 !== 0
            ? { bottom: '-80px', left: '-50px' }
            : { bottom: '-80px', right: '-50px' }
          ),
          width: '340px',
          height: '420px',
          objectFit: 'contain',
          opacity: 0.5,
          filter: 'brightness(10)',
          transform: zone.id % 2 !== 0 ? 'none' : 'scaleX(-1)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto' }}>
        <div className="zone-founder-grid">
          {founders.map(founder => (
            <FounderCard
              key={founder.id}
              founder={founder}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
