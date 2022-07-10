import type { FC } from 'react'

import { EventCard } from '~/features/events/components/EventCard'
import type { ArticleType } from '~/features/events/types'

import { AttendeesContainer, StyledAttendees, StyledH2 } from './styled'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
}

export const AttendeesCard: FC<Props> = ({
  event,
  isLoggedInUserAttending,
}) => (
  <EventCard>
    <StyledH2>Attendees</StyledH2>
    <AttendeesContainer>
      {isLoggedInUserAttending && (
        <StyledAttendees isAttending>You</StyledAttendees>
      )}
      {event.attendees?.map((attendee) => (
        <StyledAttendees key={attendee.id}>
          {attendee.firstName} {attendee.lastName}
        </StyledAttendees>
      ))}
    </AttendeesContainer>
  </EventCard>
)
