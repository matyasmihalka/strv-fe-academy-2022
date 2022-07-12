import type { Story, Meta } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import { createEvent, createUser } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EventItemDetail } from '..'

export default {
  title: 'Events/Event item detail',
  component: EventItemDetail,
} as Meta

const Template: Story<Props> = (args) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <EventItemDetail {...args} />
    </QueryClientProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent(),
  loggedInUser: createUser(),
}
