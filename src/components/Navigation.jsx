import { useEffect, useRef } from 'react'

/**
 * Anchor navigation. The active item gets the outlined pill treatment
 * and, on narrow screens, scrolls itself into view inside the
 * horizontally scrollable strip.
 */
export default function Navigation({ items, activeId, onNavigate }) {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (!activeId || !list) return
    // Only relevant when the strip actually scrolls (narrow screens).
    if (list.scrollWidth <= list.clientWidth) return
    const el = list.querySelector(`[data-nav-id="${activeId}"]`)
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [activeId])

  return (
    <nav className="nav" aria-label="Sections">
      <ul className="nav__list" ref={listRef}>
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-nav-id={item.id}
                className={`nav__link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => onNavigate?.(event, item.id)}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
