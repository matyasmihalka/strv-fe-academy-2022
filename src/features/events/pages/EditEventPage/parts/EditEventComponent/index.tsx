import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { ContainerDetailEventPages } from '~/features/events/components/ContainerDetailEventPages'
import { DeleteEventButton } from '~/features/events/components/DeleteEventButtom'
import { EditEventItemForm } from '~/features/events/components/EditEventItemForm'
import { PositionedEditFormButton } from '~/features/events/components/EditFormButton/styled'
import { EventDetailsLayout } from '~/features/events/components/EventDetailsLayout'
import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import type { ArticleType } from '~/features/events/types'

import { TitleLayout } from './styled'

import type { EventFormTypes } from '../../../CreateEventPage'
import { AttendeesCard } from '../../../EventDetailPage/parts/AttendeesCard'

export type Props = {
  event: ArticleType
  loggedInUser: UserType | null
  handleSubmit: (data: EventFormTypes) => void
  isLoading: boolean
}

export const EditEventComponent: FC<Props> = ({
  event,
  loggedInUser,
  handleSubmit,
  isLoading,
}) => {
  return (
    <ContainerDetailEventPages>
      <TitleLayout>
        <EventIdTitle eventId={event.id} />
        <DeleteEventButton eventID={event.id} />
      </TitleLayout>

      <EventDetailsLayout>
        <EditEventItemForm event={event} onSubmitHandler={handleSubmit} />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </EventDetailsLayout>
      <PositionedEditFormButton formID={event.id} isDisabled={isLoading} />
    </ContainerDetailEventPages>
  )
}
