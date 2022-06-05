import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { H1, H2, StyledCreateButton } from './styled'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <H1>Dashboard</H1>
      <section>
        <H2>Events List</H2>
        <EventsList />
        <StyledCreateButton />
      </section>
    </Container>
  </LayoutInternal>
)
