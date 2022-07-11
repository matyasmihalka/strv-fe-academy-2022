import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { PositionedCreateButton } from '~/features/events/components/CreateButton/styled'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import { EventItemDetail } from '~/features/events/components/EventItemDetail'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { AttendeesCard } from '../AttendeesCard'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
  handleAttendance: () => void
  loggedInUser: UserType | null
}

export const EventDetailComponent: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  handleAttendance,
  loggedInUser,
}) => {
  return (
    <ContainerEventPages>
      <EventIdTitle eventId={event.id} />
      <EventDetailsLayout>
        <EventItemDetail
          event={event}
          handleAttendance={handleAttendance}
          isLoggedInUserAttending={isLoggedInUserAttending}
          loggedInUser={loggedInUser}
        />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
      {loggedInUser && <PositionedCreateButton />}
    </ContainerEventPages>
  )
}
