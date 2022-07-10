import type { FC } from 'react'

import { EventCard } from '~/features/events/components/EventCard'
import { EventItemContainer } from '~/features/events/components/EventItemContainer'
import { ViewType } from '~/features/events/components/EventsList/types'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import {
  AttendeesContainer,
  PageLayout,
  StyledAttendees,
  StyledH1,
  StyledH2,
} from './styled'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
}

export const EventDetailComponent: FC<Props> = ({
  event,
  isLoggedInUserAttending,
}) => {
  console.log(isLoggedInUserAttending)
  return (
    <ContainerEventPages>
      <StyledH1>Detail Event: #{event.id}</StyledH1>

      <PageLayout>
        <EventItemContainer view={ViewType.GRID} event={event} />
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
      </PageLayout>
    </ContainerEventPages>
  )
}
