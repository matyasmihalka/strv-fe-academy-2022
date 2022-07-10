import type { FC } from 'react'

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
}

export const EventItemDetail: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  handleAttendance,
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
        <StyledButton
          type="button"
          size="small"
          accent={isLoggedInUserAttending ? 'destructive' : 'primary'}
          onClick={handleAttendance}
        >
          {isLoggedInUserAttending ? 'LEAVE' : 'JOIN'}
        </StyledButton>
      </StyledActions>
    </EventCard>
  )
}
