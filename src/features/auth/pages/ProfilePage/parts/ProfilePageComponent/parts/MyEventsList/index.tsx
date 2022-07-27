import type { FC } from 'react'
import { useMemo } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventItemComponent } from '~/features/events/components/EventItemComponent'
import { NavigationView } from '~/features/events/components/EventsList/parts/NavigationView'
import {
  List,
  Nav,
  SpinnerContainer,
} from '~/features/events/components/EventsList/styled'
import { FilterType } from '~/features/events/components/EventsList/types'
import { useEventViewContext } from '~/features/events/contexts/event-view'
import { useEvents } from '~/features/events/hooks/useEvents'
import type { ArticleType } from '~/features/events/types'
import { Spinner } from '~/features/ui/components/Spinner'

import { StyledH2 } from './styled'

type Props = {
  user: UserType
}

export const MyEventsList: FC<Props> = ({ user }) => {
  const { view, setView } = useEventViewContext()
  const { events, isLoading, error } = useEvents(FilterType.ALL)

  const myEvents = useMemo(
    () => events.filter((event: ArticleType) => event.owner.id === user.id),
    [events, user.id]
  )

  return (
    <>
      <Nav>
        <StyledH2>My Events</StyledH2>
        <NavigationView
          onChange={(passedView) => setView(passedView)}
          activeView={view}
        />
      </Nav>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : !error ? (
        <List view={view}>
          {myEvents.map((event) => (
            <li key={event.id}>
              <EventItemComponent view={view} event={event} />
            </li>
          ))}
        </List>
      ) : (
        <p>Cant load Events</p>
      )}
    </>
  )
}
