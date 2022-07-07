import { format } from 'date-fns'
import type { FC } from 'react'

// import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'
import { useAttendance } from '~/features/events/hooks/useAttendance'
import type { ArticleType } from '~/features/events/types'

import {
  Article,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
  StyledButton,
} from './styled'

import { ViewType } from '../../types'

export type Props = {
  view: ViewType
  event: ArticleType
  // owner: UserType
}

export const EventItem: FC<Props> = ({ view, event }) => {
  const { user } = useUserContext()
  const isUserAttending =
    user && event.attendees.some((attendee) => attendee.id === user.id)
      ? true
      : false

  const { attendEvent, leaveEvent } = useAttendance(event.id)

  const handleAttendance = () => {
    if (isUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }
  }

  const Time = () => (
    <time>{format(new Date(event.startsAt), 'LLLL d, y – p')}</time>
  )
  const H3 = () => <h3>{event.title}</h3>

  const AuthorData = () => (
    <Author>{`${event.owner.firstName} ${event.owner.lastName}`}</Author>
  )

  const DescriptionData = () => <Description>{event.description}</Description>

  const ButtonData = () => (
    <StyledButton
      type="button"
      size="small"
      accent={isUserAttending ? 'destructive' : 'primary'}
      onClick={handleAttendance}
    >
      {isUserAttending ? 'LEAVE' : 'JOIN'}
    </StyledButton>
  )

  return (
    <Article view={view}>
      {view === ViewType.GRID ? (
        <>
          <Time />
          <H3 />
          <AuthorData />
          <DescriptionData />
          <StyledActions>
            <span>
              <StyledAttendeeIcon />{' '}
              {`${event.attendees.length} of ${event.capacity}`}
            </span>
            <ButtonData />
          </StyledActions>
        </>
      ) : (
        <>
          <H3 />
          <DescriptionData />
          <AuthorData />
          <Container>
            <Time />
            <span>{`${event.attendees.length} of ${event.capacity}`}</span>
          </Container>
          <ButtonData />
        </>
      )}
    </Article>
  )
}
