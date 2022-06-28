import { format } from 'date-fns'
import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
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

type Props = {
  view: ViewType
  eventData: ArticleType
  owner: UserType
}

export const EventItem: FC<Props> = ({ view, eventData, owner }) => {
  const { user } = useUserContext()
  const isUserAttending =
    user && eventData.attendees.includes(user.id) ? true : false

  const { attendEvent, leaveEvent } = useAttendance(eventData.id)

  const handleAttendance = () => {
    if (isUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }
  }

  const Time = () => (
    <time>{format(new Date(eventData.startsAt), 'LLLL d, y – p')}</time>
  )
  const H3 = () => <h3>{eventData.title}</h3>

  const AuthorData = () => (
    <Author>{`${owner.firstName} ${owner.lastName}`}</Author>
  )

  const DescriptionData = () => (
    <Description>{eventData.description}</Description>
  )

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
              {`${eventData.attendees.length} of ${eventData.capacity}`}
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
            <span>{`${eventData.attendees.length} of ${eventData.capacity}`}</span>
          </Container>
          <ButtonData />
        </>
      )}
    </Article>
  )
}
