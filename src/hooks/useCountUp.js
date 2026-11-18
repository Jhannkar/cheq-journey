import { useEffect, useState } from 'react'
import { useInView, prefersReducedMotion } from './useInView.js'

// easeOutExpo — fast start, long settle. Reads like a meter finding its value.
const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Returns [ref, currentValue].
 */
export function useCountUp(target, { duration = 1700, delay = 0 } = {}) {
  const [ref, inView] = useInView({ threshold: 0.35 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (target === 0) {
      setValue(0)
      return
    }

    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    let frame = 0
    let timer = 0

    const start = () => {
      const t0 = performance.now()
      const step = (now) => {
        const progress = Math.min((now - t0) / duration, 1)
        setValue(target * ease(progress))
        if (progress < 1) frame = requestAnimationFrame(step)
        else setValue(target)
      }
      frame = requestAnimationFrame(step)
    }

    timer = setTimeout(start, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [inView, target, duration, delay])

  return [ref, value]
}
