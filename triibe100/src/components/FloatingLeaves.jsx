import { useEffect, useRef } from 'react'

export default function FloatingLeaves() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let leaves = []
    let animId

    const count = 45
    const maxSize = 8
    const speed = 2

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function createLeaf(randomY = true) {
      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + 20,
        size: Math.random() * maxSize + maxSize * 0.5,
        opacity: Math.random() * 0.18 + 0.06,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -(Math.random() * speed * 0.4 + 0.15),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.018,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: (Math.random() - 0.5) * 0.025,
        fatness: Math.random() * 0.3 + 0.25,
      }
    }

    function drawLeaf(x, y, size, rotation, fatness, opacity) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity

      const w = size * fatness
      const h = size

      ctx.beginPath()
      ctx.moveTo(0, -h)
      ctx.bezierCurveTo(w, -h * 0.5, w, h * 0.5, 0, h)
      ctx.bezierCurveTo(-w, h * 0.5, -w, -h * 0.5, 0, -h)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(0, -h * 0.85)
      ctx.lineTo(0, h * 0.85)
      ctx.strokeStyle = 'rgba(0,44,25,0.3)'
      ctx.lineWidth = size * 0.06
      ctx.stroke()

      ctx.restore()
    }

    function initLeaves() {
      resize()
      leaves = Array.from({ length: count }, () => createLeaf(true))
    }

    function draw() {
      resize()
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      leaves.forEach((l, i) => {
        l.wobble += l.wobbleSpeed
        l.rotation += l.rotSpeed
        l.x += l.speedX + Math.sin(l.wobble) * 0.35
        l.y += l.speedY + Math.cos(l.wobble * 0.7) * 0.12

        drawLeaf(l.x, l.y, l.size, l.rotation, l.fatness, l.opacity)

        if (l.y < -30 || l.x < -30 || l.x > canvas.width + 30) {
          leaves[i] = createLeaf(false)
        }
      })

      while (leaves.length < count) leaves.push(createLeaf(false))

      animId = requestAnimationFrame(draw)
    }

    initLeaves()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
