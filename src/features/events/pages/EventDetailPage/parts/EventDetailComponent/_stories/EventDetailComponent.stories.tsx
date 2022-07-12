import type { Story, Meta } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import { createEvent } from '~/features/events/types.fixtures'

import { EventDetailComponent } from '..'
import type { Props } from '..'

export default {
  title: 'Events/Detail page',
  component: EventDetailComponent,
} as Meta

const Template: Story<Props> = (args) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <EventDetailComponent {...args} />
    </QueryClientProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent(),
}
