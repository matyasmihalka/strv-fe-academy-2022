import type { Story, Meta } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ViewType } from '~/features/events/components/EventsList/types'
import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EventItemComponent } from '..'

export default {
  title: 'Events/Event Item',
  component: EventItemComponent,
} as Meta

const Template: Story<Props> = (args) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <EventItemComponent {...args} />
    </QueryClientProvider>
  )
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
