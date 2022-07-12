import { isBefore } from 'date-fns'
import Link from 'next/link'
import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { Routes } from '~/features/core/constants/routes'
import { ViewType } from '~/features/events/components/EventsList/types'
import { formattedTime } from '~/features/events/lib/formattedTime'
import type { ArticleType } from '~/features/events/types'

import {
  Article,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
  // StyledButton,
} from './styled'

import { EventActionButton } from '../../../EventActionButton'

export type Props = {
  view: ViewType
  event: ArticleType
  isLoggedInUserAttending: boolean
  isLoggedInUserOwner: boolean
}

export const EventItemComponent: FC<Props> = ({
  view,
  event,
  isLoggedInUserAttending,
  isLoggedInUserOwner,
}) => {
  const isPast = isBefore(new Date(event.startsAt), new Date())

  const { user } = useUserContext()

  const Time = () => <time>{formattedTime(event.startsAt)}</time>
  const H3 = () => (
    <h3>
      <Link href={`${Routes.EVENTS}/${event.id}`}>{event.title}</Link>
    </h3>
  )

  const AuthorData = () => (
    <Author>{`${event.owner.firstName} ${event.owner.lastName}`}</Author>
  )

  const DescriptionData = () => <Description>{event.description}</Description>

  return (
    <Article view={view}>
      {view === ViewType.GRID ? (
        <>
          <Time />

          <H3 />
          <AuthorData />
          <DescriptionData />
          <StyledActions>
            <span>
              <StyledAttendeeIcon />{' '}
              {`${event.attendees.length} of ${event.capacity}`}
            </span>

            <EventActionButton
              isLoggedInUserOwner={isLoggedInUserOwner}
              isLoggedInUserAttending={isLoggedInUserAttending}
              eventID={event.id}
              user={user}
              isPast={isPast}
            />
          </StyledActions>
        </>
      ) : (
        <>
          <H3 />
          <DescriptionData />
          <AuthorData />
          <Container>
            <Time />
            <span>{`${event.attendees.length} of ${event.capacity}`}</span>
          </Container>

          <EventActionButton
            isLoggedInUserOwner={isLoggedInUserOwner}
            isLoggedInUserAttending={isLoggedInUserAttending}
            eventID={event.id}
            user={user}
            isPast={isPast}
          />
        </>
      )}
    </Article>
  )
}
