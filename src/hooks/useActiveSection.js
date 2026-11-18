import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently the "active" one,
 * i.e. the section nearest the top of the viewport below the sticky header.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const pick = () => {
      const headerOffset = 140
      let current = null

      for (const section of sections) {
        const top = section.getBoundingClientRect().top
        if (top - headerOffset <= 0) current = section.id
      }

      // Bottom of the page: the last section wins even if it is short.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) current = sections[sections.length - 1].id

      setActiveId(current)
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick)

    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [ids])

  return activeId
}
