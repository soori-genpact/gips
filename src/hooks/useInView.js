import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export function useAnimatedCounter(target, isInView, duration = 2000, suffix = '%') {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    function update(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [isInView, target, duration])

  return value + suffix
}
