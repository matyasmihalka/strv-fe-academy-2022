import type { Story, Meta } from '@storybook/react/types-6-0'

import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EventItem } from '..'
import { ViewType } from '../../../types'

export default {
  title: 'Events/Event Item',
  component: EventItem,
} as Meta

const Template: Story<Props> = (args) => {
  return <EventItem {...args} />
}

export const Grid = Template.bind({})
Grid.args = {
  view: ViewType.GRID,
  event: createEvent(),
}

export const Row = Template.bind({})
Row.args = {
  view: ViewType.LIST,
  event: createEvent(),
}
