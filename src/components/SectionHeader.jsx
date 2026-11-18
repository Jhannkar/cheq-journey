import Reveal from './Reveal.jsx'

/**
 * Section heading. The rule beneath the title draws itself out on reveal —
 * the one bit of motion the headings get.
 */
export default function SectionHeader({ heading, subtitle, description }) {
  return (
    <Reveal as="header" className="section-header">
      <h2 className="section-header__title">{heading}</h2>
      <span className="section-header__rule" aria-hidden="true" />
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      {description && <p className="section-header__description">{description}</p>}
    </Reveal>
  )
}
