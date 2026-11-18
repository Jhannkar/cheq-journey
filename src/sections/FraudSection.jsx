import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import KPIGrid from '../components/KPIGrid.jsx'
import HighlightCard from '../components/HighlightCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { fraud } from '../data/performanceData.js'

export default function FraudSection() {
  const { id, heading, subtitle, description, kpis, keyContribution } = fraud

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} description={description} />
      <KPIGrid items={kpis} columns={4} />
      <Reveal delay={120}>
        <HighlightCard heading={keyContribution.heading} body={keyContribution.body} />
      </Reveal>
    </Section>
  )
}
