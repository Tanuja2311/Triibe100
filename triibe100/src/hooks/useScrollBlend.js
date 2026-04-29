import { useEffect, useRef, useState } from 'react'

export function useScrollBlend(totalZones) {
  const [activeZone, setActiveZone] = useState(0)
  const [nextZone, setNextZone] = useState(1)
  const [blendOpacity, setBlendOpacity] = useState(0)
  const zoneRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      zoneRefs.current.forEach((zone, i) => {
        if (!zone) return
        const rect = zone.getBoundingClientRect()
        const vh = window.innerHeight

        if (rect.top <= vh * 0.5 && rect.bottom >= vh * 0.5) {
          setActiveZone(i)
          const next = Math.min(i + 1, totalZones - 1)
          setNextZone(next)

          const blendStart = vh * 0.3
          const progress = Math.max(0, Math.min(1,
            (blendStart - rect.bottom + vh) / (vh * 0.4)
          ))
          setBlendOpacity(progress)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [totalZones])

  return { activeZone, nextZone, blendOpacity, zoneRefs }
}
