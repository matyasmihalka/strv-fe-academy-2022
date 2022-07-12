import { set as setDate } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { withPrivateRoute } from '~/features/auth/hocs/withPrivateRoute'
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

  // protect route id the logged in user is not the owner
  // not the ideal solution as a quick flick is there between the SSR page
  // is shown and the React logic decision in browser to redirect
  // Better solution would be to determine on Next.js server side if the user
  // has access then redirect it right away -> no reason to complicate things here
  useEffect(() => {
    const redirectIfNotOwner = async () => {
      if (event) {
        if (!(user?.id === event?.owner?.id)) {
          await router.replace('/')
        }
      }
    }
    redirectIfNotOwner().catch(console.error)
  }, [event, user, router])

  const handleSubmit = (data: EventFormTypes) => {
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

export const EditEventPagePrivate = withPrivateRoute(EditEventPage)
