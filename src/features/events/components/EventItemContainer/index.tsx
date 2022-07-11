import { useRouter } from 'next/router'
import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { useAttendance } from '~/features/events/hooks/useAttendance'
import type { ArticleType } from '~/features/events/types'

import { EventItemComponent } from './parts/EventItemComponent'

import { isUserAttending } from '../../lib/isUserAttending'
import type { ViewType } from '../EventsList/types'

export type Props = {
  view: ViewType
  event: ArticleType
}

export const EventItemContainer: FC<Props> = ({ view, event }) => {
  const { user } = useUserContext()

  const isLoggedInUserAttending = isUserAttending(user, event)

  const { attendEvent, leaveEvent } = useAttendance(event.id)

  const isLoggedInUserOwner = event.owner?.id === user?.id

  const router = useRouter()

  const handleButtonAction = () => {
    if (isLoggedInUserOwner) {
      void router.push(`/events/edit/${event.id}`)
    } else {
      if (isLoggedInUserAttending) {
        leaveEvent.mutate()
      } else {
        attendEvent.mutate()
      }
    }
  }

  return (
    <EventItemComponent
      view={view}
      event={event}
      isLoggedInUserAttending={isLoggedInUserAttending}
      handleButtonAction={handleButtonAction}
      isLoggedInUserOwner={isLoggedInUserOwner}
    />
  )
}
