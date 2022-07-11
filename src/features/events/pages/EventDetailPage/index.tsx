import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'
import { Spinner } from '~/features/ui/components/Spinner'

import { BackArrowIcon } from './parts/BackArrowIcon'
import { EventDetailComponent } from './parts/EventDetailComponent'
import { PositionedSpinner, StyledLink } from './styled'

import { useAttendance } from '../../hooks/useAttendance'
import { useGetSingleEvent } from '../../hooks/useGetSingleEvent'
import { isUserAttending } from '../../lib/isUserAttending'

// import { createEvent } from '../../types.fixtures'

export const EventDetailPage: NextPage = () => {
  const router = useRouter()
  const { eventID = '' } = router.query
  const id = Array.isArray(eventID) ? '' : eventID

  const { user } = useUserContext()

  const result = useGetSingleEvent(id)
  const event = result.data

  const isLoggedInUserAttending = event ? isUserAttending(user, event) : false

  const { attendEvent, leaveEvent } = useAttendance(id)

  const handleAttendance = () => {
    if (isLoggedInUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }
  }

  return (
    <LayoutInternal
      centerHeaderComponent={
        <Link href={Routes.DASHBOARD}>
          <StyledLink>
            <BackArrowIcon aria-hidden="true" /> Back to events
          </StyledLink>
        </Link>
      }
    >
      {event ? (
        <EventDetailComponent
          event={event}
          isLoggedInUserAttending={isLoggedInUserAttending}
          handleAttendance={handleAttendance}
          loggedInUser={user}
        />
      ) : (
        <PositionedSpinner>
          <Spinner />
        </PositionedSpinner>
      )}
    </LayoutInternal>
  )
}
