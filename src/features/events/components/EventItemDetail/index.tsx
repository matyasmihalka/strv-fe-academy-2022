import { isAfter } from 'date-fns'
import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventCard } from '~/features/events/components/EventCard'
import { formattedTime } from '~/features/events/lib/formattedTime'
import type { ArticleType } from '~/features/events/types'

import {
  StyledActions,
  StyledAttendeeIcon,
  StyledAuthor,
  StyledButton,
  StyledDescription,
  StyledH2,
  StyledSpan,
  StyledTime,
} from './styled'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
  handleAttendance: () => void
  loggedInUser: UserType | null
}

export const EventItemDetail: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  handleAttendance,
  loggedInUser,
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

        {isAfter(new Date(event.startsAt), new Date()) && loggedInUser && (
          <StyledButton
            type="button"
            size="small"
            accent={isLoggedInUserAttending ? 'destructive' : 'primary'}
            onClick={handleAttendance}
          >
            {isLoggedInUserAttending ? 'LEAVE' : 'JOIN'}
          </StyledButton>
        )}
      </StyledActions>
    </EventCard>
  )
}
