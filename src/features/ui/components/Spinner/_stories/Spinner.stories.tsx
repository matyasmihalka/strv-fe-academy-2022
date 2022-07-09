import type { Story, Meta } from '@storybook/react/types-6-0'

import { Spinner } from '..'

export default {
  title: 'UI/ Spinner',
  component: Spinner,
} as Meta

const Template: Story = () => {
  return <Spinner />
}

export const Default = Template.bind({})
Default.args = {}
