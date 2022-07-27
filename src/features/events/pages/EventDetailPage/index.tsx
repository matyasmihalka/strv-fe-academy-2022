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

import { useGetSingleEvent } from '../../hooks/useGetSingleEvent'

export const EventDetailPage: NextPage = () => {
  const router = useRouter()
  const { eventID = '' } = router.query
  const id = Array.isArray(eventID) ? '' : eventID

  const { user } = useUserContext()

  const result = useGetSingleEvent(id)
  const event = result.data

  const isLoggedInUserOwner = user?.id === event?.owner?.id

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
          loggedInUser={user}
          isLoggedInUserOwner={isLoggedInUserOwner}
        />
      ) : (
        <PositionedSpinner>
          <Spinner />
        </PositionedSpinner>
      )}
    </LayoutInternal>
  )
}
