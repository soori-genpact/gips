import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { heroMetrics } from '../data/content'
import { useInView, useAnimatedCounter } from '../hooks/useInView'
import './Hero.css'

function HeroMetric({ value, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const display = useAnimatedCounter(value, inView)
  return (
    <motion.div
      ref={ref}
      className="hero-metric"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + delay * 0.1, duration: 0.7 }}
    >
      <div className="hero-metric-val">{display}</div>
      <div className="hero-metric-label">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, dots = [], animId
    const spacing = 55
    const maxDist = 130
    let mouse = { x: -999, y: -999 }

    function resize() {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      dots = []
      for (let x = spacing; x < w; x += spacing)
        for (let y = spacing; y < h; y += spacing)
          dots.push({ x, y, ox: x, oy: y })
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const dot of dots) {
        const dx = mouse.x - dot.ox, dy = mouse.y - dot.oy
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 14
          dot.x = dot.ox + (dx / dist) * force
          dot.y = dot.oy + (dy / dist) * force
        } else {
          dot.x += (dot.ox - dot.x) * 0.06
          dot.y += (dot.oy - dot.y) * 0.06
        }
        const alpha = dist < maxDist ? 0.12 + (1 - dist / maxDist) * 0.5 : 0.06
        const size = dist < maxDist ? 1 + (1 - dist / maxDist) * 2 : 0.8
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,165,92,${alpha})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', onMove)
    canvas.parentElement.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
      canvas.parentElement?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-layers" />
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          The Intelligent Enterprise &middot; 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the Future<br />on <em>ServiceNow</em>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Accelerating value through AI-powered automation, domain-specific logic,
          and enterprise platform scale — transforming insurance operations from
          email chaos to intelligent workflow.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <button className="btn-primary" onClick={() => scrollTo('#flow')}>
            Explore Architecture ↓
          </button>
          <button className="btn-outline" onClick={() => scrollTo('#comparison')}>
            Build vs Buy Analysis
          </button>
        </motion.div>

        <div className="hero-metrics">
          {heroMetrics.map((m, i) => (
            <HeroMetric key={m.label} value={m.value} label={m.label} delay={i} />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
