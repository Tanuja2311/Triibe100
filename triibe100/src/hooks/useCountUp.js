import { useEffect, useState } from 'react'

export function useCountUp(target, duration = 1500, delay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isNumber = typeof target === 'number'

      if (!isNumber) {
        setCount(target)
        return
      }

      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) requestAnimationFrame(animate)
        else setCount(target)
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [target, duration, delay])

  return count
}
