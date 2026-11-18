import KPICard from './KPICard.jsx'
import Reveal from './Reveal.jsx'

/**
 * Responsive KPI row. `columns` is the desktop column count; it collapses to
 * 2 on tablet and 1 on mobile via CSS. Cards reveal in a short stagger.
 */
export default function KPIGrid({ items, columns = 4 }) {
  return (
    <div className="kpi-grid" data-columns={columns}>
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 90}>
          <KPICard {...item} />
        </Reveal>
      ))}
    </div>
  )
}
