import { useEffect, useRef, useState } from 'react'

/**
 * Fires once, the first time the element enters the viewport.
 * Returns [ref, inView]. Used by every reveal, meter and counter so the
 * whole page shares one entrance rhythm.
 */
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, threshold, rootMargin])

  return [ref, inView]
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
