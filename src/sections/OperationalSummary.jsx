import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ContentCard from '../components/ContentCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { operationalSummary } from '../data/performanceData.js'

export default function OperationalSummary() {
  const { heading, subtitle, paragraphs } = operationalSummary

  return (
    <Section>
      <SectionHeader heading={heading} subtitle={subtitle} />
      <Reveal delay={80}>
        <ContentCard>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose">
              {paragraph}
            </p>
          ))}
        </ContentCard>
      </Reveal>
    </Section>
  )
}
