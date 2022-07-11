import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EditEventItemForm } from '~/features/events/components/EditEventItemForm'
import { PositionedEditFormButton } from '~/features/events/components/EditFormButton/styled'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import type { EventFormTypes } from '../../../CreateEventPage'
import { AttendeesCard } from '../../../EventDetailPage/parts/AttendeesCard'

export type Props = {
  event: ArticleType
  loggedInUser: UserType
  handleSubmit: (data: EventFormTypes) => void
}

export const EditEventComponent: FC<Props> = ({
  event,
  loggedInUser,
  handleSubmit,
}) => {
  return (
    <ContainerEventPages>
      <EventIdTitle eventId={event.id} />
      <EventDetailsLayout>
        <EditEventItemForm event={event} onSubmitHandler={handleSubmit} />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
      <PositionedEditFormButton formID={event.id} />
    </ContainerEventPages>
  )
}
