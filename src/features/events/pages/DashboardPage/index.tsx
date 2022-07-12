import type { NextPage } from 'next'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { EventsList } from '~/features/events/components/EventsList'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { H1, H2 } from './styled'

import { PositionedCreateButton } from '../../components/CreateButton/styled'

export const DashboardPage: NextPage = () => {
  const { user } = useUserContext()

  return (
    <LayoutInternal>
      <ContainerEventPages>
        <H1>Dashboard</H1>
        <section>
          <H2>Events List</H2>
          <EventsList />
          {user && <PositionedCreateButton />}
        </section>
      </ContainerEventPages>
    </LayoutInternal>
  )
}
