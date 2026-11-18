import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ChannelPills from '../components/ChannelPills.jsx'
import ContentCard from '../components/ContentCard.jsx'
import ImpactList from '../components/ImpactList.jsx'
import Reveal from '../components/Reveal.jsx'
import { sr } from '../data/performanceData.js'

export default function SRSection() {
  const { id, heading, subtitle, description, channels, responsibilities } = sr

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} description={description} />
      <Reveal>
        <ChannelPills heading={channels.heading} items={channels.items} />
      </Reveal>
      <Reveal delay={120}>
        <ContentCard>
          <ImpactList heading={responsibilities.heading} items={responsibilities.items} />
        </ContentCard>
      </Reveal>
    </Section>
  )
}
