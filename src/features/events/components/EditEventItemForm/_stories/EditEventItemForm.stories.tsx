import type { Meta, Story } from '@storybook/react/types-6-0'

import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EditEventItemForm } from '..'

export default {
  title: 'Events/ Edit form',
  component: EditEventItemForm,
} as Meta

const Template: Story<Props> = (args) => {
  return <EditEventItemForm {...args} />
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent(),
}
