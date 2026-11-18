import { useCountUp } from '../hooks/useCountUp.js'

const formatter = (decimals) =>
  new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

/**
 * An animated KPI number: `{ prefix, target, decimals, suffix }`.
 * Counts up from 0 the first time it enters the viewport.
 */
export default function Metric({ value, className = '' }) {
  const { prefix = '', target = 0, decimals = 0, suffix = '' } = value || {}
  const [ref, current] = useCountUp(target, { decimals })

  return (
    <span ref={ref} className={`metric ${className}`}>
      {prefix}
      {formatter(decimals).format(current)}
      {suffix}
    </span>
  )
}
