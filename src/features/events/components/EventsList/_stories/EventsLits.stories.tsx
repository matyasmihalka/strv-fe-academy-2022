import type { Story, Meta } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import { UserContextProvider } from '~/features/auth/contexts/userContext'
import { EventFilterContextProvider } from '~/features/events/contexts/event-filter'
import { EventViewContextProvider } from '~/features/events/contexts/event-view'

import { EventsList } from '..'

export default {
  title: 'Events/Events List',
  component: EventsList,
} as Meta

const queryClient = new QueryClient()

const Template: Story = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <EventViewContextProvider>
          <EventFilterContextProvider>
            <EventsList />
          </EventFilterContextProvider>
        </EventViewContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
