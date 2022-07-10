import type { Story, Meta } from '@storybook/react/types-6-0'

import { EventCard } from '~/features/events/components/EventCard'
import { createEvent } from '~/features/events/types.fixtures'

import { AttendeesContainer, StyledAttendees, StyledH2 } from '../styled'

export default {
  title: 'Events/Detail page/Attendees card',
  component: EventCard,
} as Meta

const event = createEvent()

const Template: Story = () => (
  // eslint-disable-next-line react/forbid-dom-props

  <EventCard>
    <StyledH2>Attendees</StyledH2>
    <AttendeesContainer>
      <StyledAttendees isAttending>You</StyledAttendees>
      {event.attendees?.map((attendee) => (
        <StyledAttendees key={attendee.id}>
          {attendee.firstName} {attendee.lastName}
        </StyledAttendees>
      ))}
    </AttendeesContainer>
  </EventCard>
)

export const Default = Template.bind({})
Default.args = {}
