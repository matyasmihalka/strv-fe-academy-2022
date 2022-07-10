import type { Story, Meta } from '@storybook/react/types-6-0'

import { AttendeesContainer, StyledAttendees } from '../styled'

export default {
  title: 'Events/Detail page/Attendees container',
  component: AttendeesContainer,
} as Meta

const Template: Story = () => {
  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ width: '30%' }}>
      <AttendeesContainer>
        <StyledAttendees>Steve Balmer</StyledAttendees>
        <StyledAttendees>Bil Gates</StyledAttendees>
        <StyledAttendees>Richard Brandson</StyledAttendees>
        <StyledAttendees>Steve Balmer</StyledAttendees>
        <StyledAttendees>Bil Gates</StyledAttendees>
        <StyledAttendees>Richard Brandson</StyledAttendees>
      </AttendeesContainer>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
