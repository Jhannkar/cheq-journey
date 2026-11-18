import { useEffect, useState } from 'react'

/**
 * Read progress (0–100) plus whether the reader has left the hero band.
 * One passive scroll listener, throttled to a frame.
 */
export function useScrollState(settleAt = 120) {
  const [state, setState] = useState({ progress: 0, scrolled: false })

  useEffect(() => {
    let ticking = false

    const measure = () => {
      ticking = false
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setState({
        progress: Math.min(100, Math.max(0, progress)),
        scrolled: window.scrollY > settleAt,
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [settleAt])

  return state
}
