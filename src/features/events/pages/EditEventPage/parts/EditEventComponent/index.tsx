import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { AttendeesCard } from '../../../EventDetailPage/parts/AttendeesCard'

type Props = {
  event: ArticleType
  loggedInUser: UserType
}

export const EditEventComponent: FC<Props> = ({ event, loggedInUser }) => {
  return (
    <ContainerEventPages>
      <EventIdTitle eventId={event.id} />
      <EventDetailsLayout>
        <div>Card 1</div>
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
    </ContainerEventPages>
  )
}
