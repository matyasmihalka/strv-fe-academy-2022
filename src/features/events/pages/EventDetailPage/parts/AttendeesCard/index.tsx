import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventCard } from '~/features/events/components/EventCard'
import type { ArticleType } from '~/features/events/types'

import { AttendeesContainer, StyledAttendees, StyledH2 } from './styled'

export type Props = {
  event: ArticleType
  loggedInUser: UserType | null
}

export const AttendeesCard: FC<Props> = ({ event, loggedInUser }) => (
  <EventCard>
    <StyledH2>Attendees</StyledH2>
    <AttendeesContainer>
      {event.attendees?.map((attendee) =>
        attendee.id === loggedInUser?.id ? (
          <StyledAttendees key={attendee.id} isAttending>
            You
          </StyledAttendees>
        ) : (
          <StyledAttendees key={attendee.id}>
            {attendee.firstName} {attendee.lastName}
          </StyledAttendees>
        )
      )}
    </AttendeesContainer>
  </EventCard>
)
