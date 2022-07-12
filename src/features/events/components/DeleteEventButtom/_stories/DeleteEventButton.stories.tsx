import type { Meta, Story } from '@storybook/react/types-6-0'

import type { Props } from '..'
import { DeleteEventButton } from '..'

export default {
  title: 'Events/Delete event',
  component: DeleteEventButton,
} as Meta

const Template: Story<Props> = (args) => {
  return <DeleteEventButton {...args} />
}

export const Default = Template.bind({})
Default.args = {}
