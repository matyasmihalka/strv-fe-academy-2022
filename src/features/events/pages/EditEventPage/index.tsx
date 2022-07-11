import { set as setDate } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { useEditEvent } from '~/features/events/hooks/useEditEvent'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { EditEventComponent } from './parts/EditEventComponent'

import { useGetSingleEvent } from '../../hooks/useGetSingleEvent'
import type { EventFormTypes } from '../CreateEventPage'
import { PositionedSpinner } from '../EventDetailPage/styled'

export const EditEventPage: NextPage = () => {
  const router = useRouter()
  const { eventID = '' } = router.query
  const id = Array.isArray(eventID) ? '' : eventID

  const { user } = useUserContext()

  const result = useGetSingleEvent(id)
  const event = result.data

  const { mutate, isLoading } = useEditEvent(id)

  const handleSubmit = (data: EventFormTypes) => {
    console.log(data)
    const [hours, minutes] = data.time.split(':').map(Number)
    const startsAt = setDate(new Date(data.date), {
      hours: hours,
      minutes: minutes,
    }).toISOString()
    mutate({
      startsAt,
      title: data.title,
      description: data.description,
      capacity: data.capacity,
    })
  }
  return (
    <LayoutInternal>
      {!event ? (
        <PositionedSpinner />
      ) : (
        <EditEventComponent
          event={event}
          loggedInUser={user}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </LayoutInternal>
  )
}
