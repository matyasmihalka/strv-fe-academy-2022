import type { NextPage } from 'next'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { EventsList } from '~/features/events/components/EventsList'
import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { H1, H2, PositionedCreateButton } from './styled'

export const DashboardPage: NextPage = () => {
  const { user } = useUserContext()

  return (
    <LayoutInternal>
      <Container>
        <H1>Dashboard</H1>
        <section>
          <H2>Events List</H2>
          <EventsList />
          {user && <PositionedCreateButton />}
        </section>
      </Container>
    </LayoutInternal>
  )
}
