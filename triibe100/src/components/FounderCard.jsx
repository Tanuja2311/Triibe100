import { useEffect, useRef, useState } from 'react'

export default function FounderCard({ founder, expanded, onToggle }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const delay = (founder.id % 10) * 60

  return (
    <div
      ref={ref}
      style={{
        cursor: 'pointer',
        borderRadius: '4px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Photo square — hover lift lives here, not on outer div */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1/1',
          background: 'rgba(255,255,255,0.92)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '4px',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1), box-shadow 200ms cubic-bezier(0.4,0,0.2,1)',
          boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.25)' : '0 0px 0px rgba(0,0,0,0)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '9px',
            background: hovered ? 'rgba(0,44,25,0.95)' : 'rgba(0,44,25,0.8)',
            color: 'rgba(255,255,255,0.9)',
            padding: '3px 7px',
            lineHeight: 1.6,
            zIndex: 1,
            transition: 'background 200ms ease',
          }}
        >
          #{String(founder.id).padStart(2, '0')}
        </span>

        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1"
            style={{
              width: '52%',
              height: '52%',
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
      </div>

      <p
        style={{
          fontSize: '11px',
          fontWeight: 500,
          color: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.92)',
          textAlign: 'center',
          marginTop: '8px',
          lineHeight: 1.3,
          transition: 'color 200ms ease',
        }}
      >
        {founder.name}
      </p>

      <p
        style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.38)',
          textAlign: 'center',
          marginTop: '2px',
        }}
      >
        {founder.org}
      </p>

      <div
        style={{
          maxHeight: expanded ? '100px' : '0px',
          overflow: 'hidden',
          opacity: expanded ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}
      >
        <div
          style={{
            marginTop: '8px',
            paddingTop: '8px',
            borderTop: '0.5px solid rgba(255,255,255,0.12)',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.65,
            textAlign: 'left',
          }}
        >
          {founder.bio}
        </div>
      </div>

    </div>
  )
}
