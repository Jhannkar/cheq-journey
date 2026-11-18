import SummaryTable from '../components/SummaryTable.jsx'
import Reveal from '../components/Reveal.jsx'
import { overallSummary } from '../data/performanceData.js'

/**
 * The closing band. Dark, like the hero — the review opens and shuts on the
 * same surface, with the light document held between them.
 */
export default function OverallSummary() {
  const { heading, subtitle, description, table } = overallSummary

  return (
    <section className="closing">
      <div className="closing__grid" aria-hidden="true" />
      <div className="container closing__inner">
        <Reveal as="header" className="closing__header">
          <h2 className="closing__title">{heading}</h2>
          <p className="closing__subtitle">{subtitle}</p>
        </Reveal>

        <Reveal delay={100}>
          <p className="closing__description">{description}</p>
        </Reveal>

        <Reveal delay={180}>
          <SummaryTable rows={table} />
        </Reveal>
      </div>
    </section>
  )
}
