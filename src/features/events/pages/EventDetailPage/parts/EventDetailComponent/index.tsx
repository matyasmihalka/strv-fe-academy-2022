import type { FC } from 'react'

import { EventItemDetail } from '~/features/events/components/EventItemDetail'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { PageLayout, StyledH1 } from './styled'

import { AttendeesCard } from '../AttendeesCard'

export type Props = {
  event: ArticleType
  isLoggedInUserAttending: boolean
  handleAttendance: () => void
}

export const EventDetailComponent: FC<Props> = ({
  event,
  isLoggedInUserAttending,
  handleAttendance,
}) => {
  return (
    <ContainerEventPages>
      <StyledH1>Detail Event: #{event.id}</StyledH1>

      <PageLayout>
        <EventItemDetail
          event={event}
          handleAttendance={handleAttendance}
          isLoggedInUserAttending={isLoggedInUserAttending}
        />
        <AttendeesCard
          event={event}
          isLoggedInUserAttending={isLoggedInUserAttending}
        />
      </PageLayout>
    </ContainerEventPages>
  )
}
