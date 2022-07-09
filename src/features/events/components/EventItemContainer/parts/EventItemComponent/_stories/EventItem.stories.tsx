import type { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'

import { ViewType } from '~/features/events/components/EventsList/types'
import { createEvent } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { EventItemComponent } from '..'

export default {
  title: 'Events/Event Item',
  component: EventItemComponent,
} as Meta

const Template: Story<Props> = (args) => {
  const [isAttending, setIsAttending] = useState(false)

  const handleChange = () => {
    setIsAttending(!isAttending)
  }
  return (
    <EventItemComponent
      {...args}
      isLoggedInUserAttending={isAttending}
      handleAttendance={handleChange}
    />
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
