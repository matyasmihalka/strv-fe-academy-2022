import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { ContainerDetailEventPages } from '~/features/events/components/ContainerDetailEventPages'
import { PositionedCreateButton } from '~/features/events/components/CreateButton/styled'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventItemDetail } from '~/features/events/components/EventItemDetail'
import type { ArticleType } from '~/features/events/types'

import { PositionedEventID } from './styled'

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
    <ContainerDetailEventPages>
      <PositionedEventID eventId={event.id} />
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
    </ContainerDetailEventPages>
  )
}
