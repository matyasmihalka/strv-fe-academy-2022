import { isBefore } from 'date-fns'
import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventCard } from '~/features/events/components/EventCard'
import { formattedTime } from '~/features/events/lib/formattedTime'
import type { ArticleType } from '~/features/events/types'

import {
  StyledActions,
  StyledAttendeeIcon,
  StyledAuthor,
  StyledDescription,
  StyledH2,
  StyledSpan,
  StyledTime,
} from './styled'

import { EventActionButton } from '../EventActionButton'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
  loggedInUser: UserType | null
  isLoggedInUserOwner: boolean
}

export const EventItemDetail: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  loggedInUser,
  isLoggedInUserOwner,
}) => {
  //   console.log(handleAttendance)
  return (
    <EventCard>
      <StyledTime>
        <time>{formattedTime(event.startsAt)}</time>
      </StyledTime>
      <StyledH2>{event.title}</StyledH2>
      <StyledAuthor>{`${event.owner.firstName} ${event.owner.lastName}`}</StyledAuthor>
      <StyledDescription>{event.description}</StyledDescription>
      <StyledActions>
        <StyledSpan>
          <StyledAttendeeIcon />{' '}
          {`${event.attendees.length} of ${event.capacity}`}
        </StyledSpan>

        <EventActionButton
          isLoggedInUserOwner={isLoggedInUserOwner}
          isLoggedInUserAttending={isLoggedInUserAttending}
          eventID={event.id}
          user={loggedInUser}
          isPast={isBefore(new Date(event.startsAt), new Date())}
        />
      </StyledActions>
    </EventCard>
  )
}
