import type { Story, Meta } from '@storybook/react/types-6-0'

import { StyledAttendees } from '../styled'

export default {
  title: 'Events/Detail page/Styled attendees',
  component: StyledAttendees,
} as Meta

const Template: Story = () => {
  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ display: 'flex' }}>
      <StyledAttendees>Steve Balmer</StyledAttendees>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
