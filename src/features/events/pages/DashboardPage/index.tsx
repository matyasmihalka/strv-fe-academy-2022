import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { CreateButton } from '~/features/events/components/EventsList/parts/CreateButton'
import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { Section } from './styled'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <h1>Dashboard</h1>
      <Section>
        <h2>Events List</h2>
        <EventsList />
        <CreateButton />
      </Section>
    </Container>
  </LayoutInternal>
)
