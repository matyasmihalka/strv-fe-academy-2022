import type { Story, Meta } from '@storybook/react/types-6-0'

import type { AttendeeProps } from '../styled'
import { StyledAttendees } from '../styled'

export default {
  title: 'Events/Detail page/Styled attendees',
  component: StyledAttendees,
} as Meta

const Template: Story<AttendeeProps> = (args) => {
  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ display: 'flex' }}>
      <StyledAttendees {...args}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {args.isAttending ? 'You' : 'Steve Balmer'}
      </StyledAttendees>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const LoggedInUserAttending = Template.bind({})
LoggedInUserAttending.args = {
  isAttending: true,
}
