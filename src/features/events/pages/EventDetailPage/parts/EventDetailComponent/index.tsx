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
  isLoggedInUserOwner: boolean
  loggedInUser: UserType | null
}

export const EventDetailComponent: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  loggedInUser,
  isLoggedInUserOwner,
}) => {
  return (
    <ContainerEventPages>
      <EventIdTitle eventId={event.id} />
      <EventDetailsLayout>
        <EventItemDetail
          event={event}
          isLoggedInUserAttending={isLoggedInUserAttending}
          loggedInUser={loggedInUser}
          isLoggedInUserOwner={isLoggedInUserOwner}
        />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
      {loggedInUser && <PositionedCreateButton />}
    </ContainerEventPages>
  )
}
