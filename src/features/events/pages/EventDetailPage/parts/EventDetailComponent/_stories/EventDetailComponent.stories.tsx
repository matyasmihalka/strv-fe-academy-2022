import type { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'

import { createEvent } from '~/features/events/types.fixtures'

import { EventDetailComponent } from '..'
import type { Props } from '..'

export default {
  title: 'Events/Detail page',
  component: EventDetailComponent,
} as Meta

const Template: Story<Props> = (args) => {
  const [isAttending, setIsAttending] = useState(false)
  const handleAttendance = () => {
    isAttending ? setIsAttending(false) : setIsAttending(true)
  }
  return (
    <EventDetailComponent
      {...args}
      handleAttendance={handleAttendance}
      isLoggedInUserAttending={isAttending}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent(),
}
