import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventItemDetail } from '~/features/events/components/EventItemDetail'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { PageLayout, StyledH1, StyledP } from './styled'

import { PositionedCreateButton } from '../../../DashboardPage/styled'
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
      <StyledH1>
        Detail Event: <StyledP>#{event.id}</StyledP>{' '}
      </StyledH1>

      <PageLayout>
        <EventItemDetail
          event={event}
          handleAttendance={handleAttendance}
          isLoggedInUserAttending={isLoggedInUserAttending}
          loggedInUser={loggedInUser}
        />
        <AttendeesCard event={event} loggedInUser={loggedInUser} />
      </PageLayout>
      <PositionedCreateButton />
    </ContainerEventPages>
  )
}
