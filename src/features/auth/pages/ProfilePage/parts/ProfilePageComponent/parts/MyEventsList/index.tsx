import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventItemContainer } from '~/features/events/components/EventItemContainer'
import { NavigationView } from '~/features/events/components/EventsList/parts/NavigationView'
import {
  List,
  Nav,
  SpinnerContainer,
} from '~/features/events/components/EventsList/styled'
import type { ViewType } from '~/features/events/components/EventsList/types'
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

  const myEvents = events.filter(
    (event: ArticleType) => event.owner.id === user.id
  )

  // Handle views and filter
  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  return (
    <>
      <Nav>
        <StyledH2>My Events</StyledH2>
        <NavigationView onChange={setViewHandler} activeView={view} />
      </Nav>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : !error ? (
        <List view={view}>
          {myEvents.map((event) => (
            <li key={event.id}>
              <EventItemContainer view={view} event={event} />
            </li>
          ))}
        </List>
      ) : (
        <p>Cant load Events</p>
      )}
    </>
  )
}
