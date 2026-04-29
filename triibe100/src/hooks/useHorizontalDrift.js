import { useEffect, useState } from 'react'

export function useHorizontalDrift() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getDriftX = (zoneIndex) => {
    const directions = [1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    const speeds = [0.02, 0.015, 0.025, 0.018, 0.022,
                    0.016, 0.024, 0.019, 0.021, 0.017]
    const direction = directions[zoneIndex]
    const speed = speeds[zoneIndex]
    const raw = scrollY * speed * direction
    const pct = ((raw % 100) + 100) % 100
    return `${pct.toFixed(2)}% 50%`
  }

  return { getDriftX }
}
