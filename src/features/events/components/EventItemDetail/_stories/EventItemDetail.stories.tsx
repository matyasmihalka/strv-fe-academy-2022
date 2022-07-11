import type { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'

import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EventItemDetail } from '..'

export default {
  title: 'Events/Event item detail',
  component: EventItemDetail,
} as Meta

const Template: Story<Props> = (args) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleAttendance = () =>
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
  return (
    <EventItemDetail
      {...args}
      handleAttendance={handleAttendance}
      isLoggedInUserAttending={isLoggedIn}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  event: createEvent(),
}
