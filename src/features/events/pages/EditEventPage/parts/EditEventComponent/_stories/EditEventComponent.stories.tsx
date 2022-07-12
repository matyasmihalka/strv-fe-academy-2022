import type { Meta, Story } from '@storybook/react/types-6-0'

import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EditEventComponent } from '..'

export default {
  title: 'Events/Edit component',
  component: EditEventComponent,
} as Meta

const Template: Story<Props> = (args) => {
  return <EditEventComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent({ attendeesCount: 5 }),
}
