import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { useAttendance } from '~/features/events/hooks/useAttendance'
import type { ArticleType } from '~/features/events/types'

import { EventItemComponent } from './parts/EventItemComponent'

import type { ViewType } from '../EventsList/types'

export type Props = {
  view: ViewType
  event: ArticleType
}

export const EventItemContainer: FC<Props> = ({ view, event }) => {
  const { user } = useUserContext()

  const isUserAttending =
    user && event.attendees.some((attendee) => attendee.id === user.id)
      ? true
      : false

  const { attendEvent, leaveEvent } = useAttendance(event.id)

  const handleAttendance = () => {
    if (isUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }
  }
  return (
    <EventItemComponent
      view={view}
      event={event}
      isLoggedInUserAttending={isUserAttending}
      handleAttendance={handleAttendance}
    />
  )
}
