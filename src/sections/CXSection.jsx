import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import KPIGrid from '../components/KPIGrid.jsx'
import HighlightCard from '../components/HighlightCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { cx } from '../data/performanceData.js'

export default function CXSection() {
  const { id, heading, subtitle, description, kpis, tatApproach } = cx

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} description={description} />
      <KPIGrid items={kpis} columns={3} />
      <Reveal delay={120}>
        <HighlightCard heading={tatApproach.heading} body={tatApproach.body} />
      </Reveal>
    </Section>
  )
}
