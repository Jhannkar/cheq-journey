import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks/useInView.js'

/**
 * The rotation dial.
 *
 * Four equal arcs — one per functional area of the weekly rotational model
 * described in the operational summary. The sweep advances a quarter turn
 * every few seconds and the centre reads out the active area's headline
 * figure. Hovering or focusing an arc pins it; clicking jumps to the section.
 *
 * Equal quarters are deliberate: the rotation splits time, not volume, so
 * sizing the arcs by case count would misstate what the dial represents.
 */

const SIZE = 260
const CENTRE = SIZE / 2
const RADIUS = 104
const CIRC = 2 * Math.PI * RADIUS
const SEGMENT = CIRC / 4
const GAP = 18
const ARC = SEGMENT - GAP
const DWELL = 2800

const CORNERS = ['tr', 'br', 'bl', 'tl']

export default function RotationDial({ items, onSelect }) {
  // `turns` only ever increases, so the sweep never rewinds past 12 o'clock.
  const [turns, setTurns] = useState(0)
  const [pinned, setPinned] = useState(null)
  const still = prefersReducedMotion()

  const count = items.length
  const active = pinned ?? turns % count

  useEffect(() => {
    if (still || pinned !== null) return
    const timer = setInterval(() => setTurns((t) => t + 1), DWELL)
    return () => clearInterval(timer)
  }, [still, pinned])

  // Pinning snaps forward to the pinned quarter rather than spinning back.
  let angle = turns * 90
  if (pinned !== null) {
    const base = Math.floor(turns / count) * 360
    angle = base + pinned * 90
    if (angle < turns * 90) angle += 360
  }

  const current = items[active]

  return (
    <div className="dial" role="group" aria-label="Weekly rotation across functional areas">
      <div className="dial__stage">
        <svg className="dial__svg" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
          <defs>
            <radialGradient id="dialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="52%" stopColor="rgba(47,217,138,0)" />
              <stop offset="100%" stopColor="rgba(47,217,138,0.16)" />
            </radialGradient>
          </defs>

          <circle cx={CENTRE} cy={CENTRE} r={RADIUS + 26} fill="url(#dialGlow)" />

          {/* Hairline plotting ring */}
          <circle className="dial__track" cx={CENTRE} cy={CENTRE} r={RADIUS} fill="none" />

          <g transform={`rotate(-90 ${CENTRE} ${CENTRE})`}>
            {items.map((item, i) => (
              <circle
                key={item.id}
                className={`dial__arc ${i === active ? 'is-active' : ''}`}
                cx={CENTRE}
                cy={CENTRE}
                r={RADIUS}
                fill="none"
                strokeDasharray={`${ARC} ${CIRC - ARC}`}
                strokeDashoffset={-(i * SEGMENT + GAP / 2)}
              />
            ))}
          </g>

          {/* Marker parked at the midpoint of the active quarter */}
          <g className="dial__sweep" style={{ transform: `rotate(${angle + 45}deg)` }}>
            <circle className="dial__marker" cx={CENTRE} cy={CENTRE - RADIUS} r="5" />
          </g>
        </svg>

        {/* keyed so the readout re-animates each time the sweep advances */}
        <div className="dial__readout" key={current.id}>
          <span className="dial__readout-label">{current.label}</span>
          <span className="dial__readout-value">{current.value}</span>
          <span className="dial__readout-caption">{current.caption}</span>
        </div>

        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`dial__tag dial__tag--${CORNERS[i]} ${i === active ? 'is-active' : ''}`}
            onMouseEnter={() => setPinned(i)}
            onMouseLeave={() => setPinned(null)}
            onFocus={() => setPinned(i)}
            onBlur={() => setPinned(null)}
            onClick={() => onSelect?.(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="dial__caption">Weekly rotational model</p>
    </div>
  )
}
