import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EditEventItemForm } from '~/features/events/components/EditEventItemForm'
import { PositionedEditFormButton } from '~/features/events/components/EditFormButton/styled'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { AttendeesCard } from '../../../EventDetailPage/parts/AttendeesCard'

export type Props = {
  event: ArticleType
  loggedInUser: UserType
}

export const EditEventComponent: FC<Props> = ({ event, loggedInUser }) => {
  return (
    <ContainerEventPages>
      <EventIdTitle eventId={event.id} />
      <EventDetailsLayout>
        {/* <div>Card 1</div> */}
        <EditEventItemForm event={event} />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
      <PositionedEditFormButton formID={event.id} />
      {/* <button form="myform" type="submit">
        Should submit form
      </button> */}
    </ContainerEventPages>
  )
}
