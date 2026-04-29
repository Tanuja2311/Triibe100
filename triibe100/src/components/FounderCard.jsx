export default function FounderCard({ founder, expanded, onToggle }) {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onToggle}>

      <div
        className="relative overflow-hidden w-full"
        style={{
          aspectRatio: '1 / 1',
          background: '#c4c9cc',
          outline: expanded ? '1.5px solid rgba(255,255,255,0.5)' : 'none',
          transition: 'outline 200ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1"
            style={{
              width: '55%',
              height: '55%',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
          </svg>
        )}

        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '8px',
            background: 'rgba(0,0,0,0.3)',
            color: 'rgba(255,255,255,0.7)',
            padding: '2px 6px',
            lineHeight: 1.6,
          }}
        >
          #{String(founder.id).padStart(2, '0')}
        </span>
      </div>

      <p className="text-xs font-medium text-white text-center mt-2 leading-tight">
        {founder.name}
      </p>
      <p className="text-xs text-center mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
        {founder.org}
      </p>

      <div
        style={{
          maxHeight: expanded ? '120px' : '0px',
          overflow: 'hidden',
          opacity: expanded ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}
      >
        <div
          style={{
            paddingTop: '8px',
            marginTop: '8px',
            borderTop: '0.5px solid rgba(255,255,255,0.12)',
          }}
        >
          <p
            className="text-xs leading-relaxed text-left"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {founder.bio}
          </p>
        </div>
      </div>

    </div>
  )
}
