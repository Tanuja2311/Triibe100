export default function FounderCard({ founder }) {
  return (
    <div className="flex flex-col items-center gap-0">

      <div
        className="relative overflow-hidden w-full"
        style={{ aspectRatio: '1 / 1', background: '#c4c8cc' }}
      >
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1"
              style={{ width: '55%', height: '55%', opacity: 0.35 }}
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
            </svg>
          </div>
        )}

        <span
          className="absolute top-0 left-0"
          style={{
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

    </div>
  )
}
