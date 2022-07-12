import type { Meta, Story } from '@storybook/react/types-6-0'

import type { Props } from '..'
import { EditFormButton } from '..'

export default {
  title: 'Events/Edit Button',
  component: EditFormButton,
} as Meta

const Template: Story<Props> = (args) => {
  return <EditFormButton {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}
