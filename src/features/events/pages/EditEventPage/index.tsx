// import { set as setDate } from 'date-fns'
import type { NextPage } from 'next'

import { useEditEvent } from '~/features/auth/hooks/useEditEvent'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { EditEventComponent } from './parts/EditEventComponent'

import { createEvent, createUser } from '../../types.fixtures'
import type { EventFormTypes } from '../CreateEventPage'
import { PositionedSpinner } from '../EventDetailPage/styled'

export const EditEventPage: NextPage = () => {
  const event = createEvent()
  const user = createUser()

  const { isLoading } = useEditEvent(event.id)

  const handleSubmit = (data: EventFormTypes) => {
    console.log(data)
    // const [hours, minutes] = data.time.split(':').map(Number)
    // const startsAt = setDate(new Date(data.date), {
    //   hours: hours,
    //   minutes: minutes,
    // }).toISOString()
    // mutate({
    //   startsAt,
    //   title: data.title,
    //   description: data.description,
    //   capacity: data.capacity,
    // })
  }
  return (
    <LayoutInternal>
      {isLoading ? (
        <PositionedSpinner />
      ) : (
        <EditEventComponent
          event={event}
          loggedInUser={user}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutInternal>
  )
}
