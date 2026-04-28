import { useState } from 'react'

const PersonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9ca3af"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="40"
    height="40"
    style={{ opacity: 0.3 }}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

export default function FounderCard({ founder }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'white' : 'rgba(255,255,255,0.93)',
        border: hovered ? '0.5px solid #1B3A2D' : '0.5px solid rgba(255,255,255,0.4)',
        borderRadius: '10px',
        overflow: 'hidden',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 200ms',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          height: '120px',
          backgroundColor: '#E8EFE8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '9px',
            color: 'rgba(27,58,45,0.45)',
            padding: '6px 8px',
            lineHeight: 1,
          }}
        >
          #{String(founder.id).padStart(2, '0')}
        </span>
        <span
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: '#1B3A2D',
            color: 'white',
            fontSize: '8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '3px 7px',
            borderRadius: '99px',
          }}
        >
          Coming Soon
        </span>
        <PersonIcon />
      </div>

      <div style={{ padding: '8px 10px' }}>
        <div
          style={{
            height: '10px',
            background: '#e5e7eb',
            borderRadius: '4px',
            width: '70%',
            marginBottom: '6px',
          }}
        />
        <div
          style={{
            height: '8px',
            background: '#f3f4f6',
            borderRadius: '4px',
            width: '50%',
          }}
        />
      </div>
    </div>
  )
}
