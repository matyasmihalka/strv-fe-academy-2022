import type { NextPage } from 'next'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { EventsList } from '~/features/events/components/EventsList'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'
import { HiddenH1, HiddenH2 } from '~/features/ui/components/HiddenHeadings'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { PositionedCreateButton } from '../../components/CreateButton/styled'

export const DashboardPage: NextPage = () => {
  const { user } = useUserContext()

  return (
    <LayoutInternal>
      <ContainerEventPages>
        <HiddenH1>Dashboard</HiddenH1>
        <section>
          <HiddenH2>Events List</HiddenH2>
          <EventsList />
          {user && <PositionedCreateButton />}
        </section>
      </ContainerEventPages>
    </LayoutInternal>
  )
}
