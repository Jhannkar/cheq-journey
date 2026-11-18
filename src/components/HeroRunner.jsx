import { useEffect, useState } from 'react'

/**
 * The gait sequence. Both falls land inside the first six seconds — the opening
 * beats are deliberately short — and the figure then settles into walking and
 * running. Each entry holds its phase for `ms`; the last has `ms: null`, so it
 * never ends. Every `ms` is >= its phase's CSS animation, so nothing is cut off.
 */
const SEQUENCE = [
  { phase: 'walk', ms: 900 },
  { phase: 'run', ms: 800 },
  { phase: 'fall', ms: 950 },
  { phase: 'getup', ms: 850 },
  { phase: 'run', ms: 750 },
  { phase: 'fall', ms: 950 },
  { phase: 'getup', ms: 850 },
  { phase: 'walk', ms: 2600 },
  { phase: 'run', ms: null },
]

/* Leg and arm are two-segment chains; each joint group rotates about its own
   pivot, and nesting composes the rotations the way a skeleton would. */
function Leg({ side }) {
  return (
    <g className={`rn-thigh rn-thigh-${side}`}>
      <line className="rn-pants" x1="75" y1="108" x2="75" y2="137" />
      <path className="rn-pocket" d="M76 113 h9 a2 2 0 0 1 2 2 v11 a2 2 0 0 1 -2 2 h-9 z" />
      <path className="rn-pocket-flap" d="M76 118 h11" />
      <g className={`rn-shin rn-shin-${side}`}>
        <line className="rn-pants rn-pants--shin" x1="75" y1="136" x2="75" y2="160" />
        <g className={`rn-foot rn-foot-${side}`}>
          <path
            className="rn-shoe"
            d="M68 151 L82 151 Q88 153 93 161 Q96 167 90 168 L71 168 Q66 168 66 163 L66 155 Q66 151 68 151 Z"
          />
          <path className="rn-swoosh" d="M71 164 Q79 163 89 157" />
          <path className="rn-sole" d="M66.5 165 L91.5 165" />
        </g>
      </g>
    </g>
  )
}

function Arm({ side }) {
  return (
    <g className={`rn-arm rn-arm-${side}`}>
      <line className="rn-sleeve" x1="77" y1="70" x2="77" y2="92" />
      <g className={`rn-fore rn-fore-${side}`}>
        <line className="rn-sleeve rn-sleeve--fore" x1="77" y1="92" x2="77" y2="109" />
        <circle className="rn-hand" cx="77" cy="113" r="6" />
      </g>
    </g>
  )
}

/**
 * Hero runner — a figure in a loose hoodie, cargo pants, sneakers and a
 * backpack. It walks, runs, trips and falls, gets back up, does it once more,
 * then settles into a jog it keeps forever. The ground scrolls under it, so the
 * figure holds its lane while still reading as forward travel.
 */
export default function HeroRunner() {
  const [still] = useState(
    () =>
      typeof window !== 'undefined' &&
      Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  )
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (still) return undefined
    const { ms } = SEQUENCE[step]
    if (ms == null) return undefined
    const id = setTimeout(() => setStep((s) => s + 1), ms)
    return () => clearTimeout(id)
  }, [step, still])

  const phase = still ? 'idle' : SEQUENCE[step].phase

  return (
    <div className={`runner is-${phase}`} aria-hidden="true">
      <svg className="runner__svg" viewBox="0 0 200 200" role="presentation">
        {/* ground */}
        <line className="rn-floor-base" x1="-20" y1="170.5" x2="220" y2="170.5" />
        <line className="rn-floor" x1="-20" y1="170.5" x2="220" y2="170.5" />

        {/* speed streaks, run and jog only */}
        <g className="rn-speed">
          <line className="rn-streak rn-streak--1" x1="30" y1="86" x2="60" y2="86" />
          <line className="rn-streak rn-streak--2" x1="18" y1="118" x2="54" y2="118" />
          <line className="rn-streak rn-streak--3" x1="34" y1="146" x2="58" y2="146" />
        </g>

        <ellipse className="rn-shadow" cx="78" cy="172" rx="27" ry="4.2" />

        <g className="rn-figure">
          {/* far leg */}
          <g className="rn-leg rn-leg--b">
            <Leg side="b" />
          </g>

          <g className="rn-upper">
            {/* backpack, behind the body */}
            <g className="rn-pack">
              <rect x="45" y="76" width="21" height="39" rx="9" />
              <path className="rn-pack-flap" d="M45 90 q10 5 21 0 v6 q-11 5 -21 0 z" />
              <path className="rn-pack-mark" d="M50 106 q6 -1 13 -8" />
            </g>

            {/* far arm */}
            <g className="rn-limb--b">
              <Arm side="b" />
            </g>

            {/* neck, then the loose hoodie */}
            <rect className="rn-skin" x="72" y="56" width="10" height="16" rx="4" />
            <path
              className="rn-hoodie"
              d="M60 68 Q76 61 94 68 Q101 73 102 88 L100 116 Q88 121 76 121 Q63 121 55 116 L53 88 Q54 73 60 68 Z"
            />
            <path className="rn-hoodie-pocket" d="M61 95 Q76 100 92 95 L90 110 Q76 114 63 110 Z" />
            <path className="rn-strap" d="M67 73 Q73 88 69 106" />
            <path className="rn-string" d="M74 70 L75 84" />
            <path className="rn-string" d="M83 70 L83 82" />
            <circle className="rn-string-tip" cx="75" cy="85" r="1.8" />
            <circle className="rn-string-tip" cx="83" cy="83" r="1.8" />

            {/* head: hood up, face in the opening */}
            <g className="rn-head">
              <ellipse className="rn-skin" cx="88" cy="50" rx="8" ry="9.5" />
              <path
                className="rn-hood"
                d="M70 28 Q86 29 88 44 Q84 40 79 43 Q73 47 76 56 Q80 64 88 63 Q80 70 70 66 Q54 60 54 47 Q54 30 70 28 Z"
              />
              <path className="rn-hood-rim" d="M82 33 Q90 40 89 50 Q88 59 82 65" />
            </g>

            {/* near arm */}
            <g className="rn-limb--a">
              <Arm side="a" />
            </g>
          </g>

          {/* near leg */}
          <g className="rn-leg rn-leg--a">
            <Leg side="a" />
          </g>
        </g>
      </svg>
    </div>
  )
}
