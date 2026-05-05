import { useEffect, useRef, useState } from 'react'

export default function FounderCard({ founder }) {
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
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 400ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        paddingBottom: '24px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Photo */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1/1',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 200ms ease',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          style={{
            width: '45%',
            height: '45%',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M2 22c0-5.5 4.5-9 10-9s10 3.5 10 9" />
        </svg>
      </div>

      <p
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#ffffff',
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          textAlign: 'center',
          marginTop: '10px',
          lineHeight: 1.3,
        }}
      >
        {founder.name}
      </p>

      <p
        style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.75)',
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
          textAlign: 'center',
          marginTop: '3px',
        }}
      >
        {founder.org}
      </p>

      {founder.bio && (
        <p
          style={{
            fontSize: '10px',
            color: 'rgba(255,255,255,0.65)',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            lineHeight: 1.65,
            textAlign: 'center',
            marginTop: '8px',
            marginBottom: '32px',
          }}
        >
          {founder.bio}
        </p>
      )}

    </div>
  )
}
