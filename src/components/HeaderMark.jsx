import { useEffect, useRef, useState } from 'react'

const DURATION = 2000

/* Joined CHEQ in May 2025 (month index 4). */
const JOIN_YEAR = 2025
const JOIN_MONTH = 4

/** Completed calendar months since joining (May 2025 → Nov 2026 = 18). */
export function monthsAtCheq(today = new Date()) {
  return Math.max(
    1,
    (today.getFullYear() - JOIN_YEAR) * 12 + (today.getMonth() - JOIN_MONTH),
  )
}

/**
 * Header lockup — "Awe-inspiring" over a large "<N> MONTHS", where N is the
 * tenure since May 2025.
 *
 * The number counts 1, 2, 3 … up to its target on an ease-out curve, so it
 * races through the low numbers and decelerates into the landing. A single
 * velocity value (`--v`, 1 at full speed, 0 at rest) drives the drift: while the
 * count is moving the figure is offset, motion-blurred and trailed by a ghost;
 * as it slows, all of that resolves and the number settles into place.
 */
export default function HeaderMark({ size = 24, tone = 'dark', className = '', count = monthsAtCheq() }) {
  const rootRef = useRef(null)
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  )
  const [shown, setShown] = useState(() => (reduced ? count : 1))
  const [landed, setLanded] = useState(reduced)

  useEffect(() => {
    if (reduced) return undefined
    let raf = 0
    let start

    const step = (now) => {
      if (start === undefined) start = now
      const p = Math.min(1, (now - start) / DURATION)

      /* position: ease-out, so the early numbers fly and the last few linger */
      const eased = 1 - Math.pow(1 - p, 2.2)
      const next = Math.max(1, Math.round(eased * count))
      setShown((prev) => (prev === next ? prev : next))

      /* velocity: what the drift, blur and ghost are scaled by */
      rootRef.current?.style.setProperty('--v', Math.pow(1 - p, 1.6).toFixed(3))

      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setLanded(true)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [count, reduced])

  return (
    <span
      ref={rootRef}
      className={`header-mark header-mark--${tone} ${landed ? 'is-landed' : ''} ${className}`}
      style={{ '--mark-size': `${size}px`, '--v': reduced ? 0 : 1 }}
    >
      <span className="header-mark__eyebrow">Awe-inspiring</span>
      <span className="header-mark__line">
        <span className="header-mark__count" aria-hidden="true">
          <span className="header-mark__ghost">{shown}</span>
          <span className="header-mark__num">{shown}</span>
        </span>
        <span className="header-mark__word" data-text="MONTHS" aria-hidden="true">
          MONTHS
        </span>
        <span className="header-mark__sr">{count} months</span>
      </span>
      <span className="header-mark__rule" aria-hidden="true" />
    </span>
  )
}
