import type { Story, Meta } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import { UserContextProvider } from '~/features/auth/contexts/userContext'
import { createEvent } from '~/features/events/types.fixtures'

import { EventDetailComponent } from '..'
import type { Props } from '..'

export default {
  title: 'Events/Detail page',
  component: EventDetailComponent,
} as Meta

const queryClient = new QueryClient()

const Template: Story<Props> = (args) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <EventDetailComponent {...args} />
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export const Default = Template.bind({})
Default.args = { event: createEvent() }
