import type { Story, Meta } from '@storybook/react/types-6-0'

import { EventDetailComponent } from '..'

export default {
  title: 'Events/Detail page',
  component: EventDetailComponent,
} as Meta

const Template: Story = () => {
  return <EventDetailComponent />
}

export const Default = Template.bind({})
Default.args = {}
