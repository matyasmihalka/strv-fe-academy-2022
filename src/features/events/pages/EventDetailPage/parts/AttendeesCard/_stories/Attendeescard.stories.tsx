import type { Story, Meta } from '@storybook/react/types-6-0'

import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { AttendeesCard } from '..'

export default {
  title: 'Events/Detail page/Attendees card',
  component: AttendeesCard,
} as Meta

const event = createEvent()

const Template: Story<Props> = (args) => <AttendeesCard {...args} />

export const Default = Template.bind({})
Default.args = {
  event: event,
  loggedInUser: event.attendees[1],
}
