import { isBefore } from 'date-fns'
import Link from 'next/link'
import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { Routes } from '~/features/core/constants/routes'
import { ViewType } from '~/features/events/components/EventsList/types'
import { formattedTime } from '~/features/events/lib/formattedTime'
import type { ArticleType } from '~/features/events/types'
import { Button } from '~/features/ui/components/Button'

import {
  Article,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
  // StyledButton,
} from './styled'

import { EventActionButton } from '../EventActionButton'

export type Props = {
  view: ViewType
  event: ArticleType
}

export const EventItemComponent: FC<Props> = ({ view, event }) => {
  const { user } = useUserContext()
  const isOwner = event.owner.id === user?.id
  const isPast = isBefore(new Date(event.startsAt), new Date())

  const action = isOwner ? (
    <Link href={`/events/edit/${event.id}`}>
      <Button size="small" accent="silent" as="a">
        Edit
      </Button>
    </Link>
  ) : !isPast ? (
    <EventActionButton event={event} />
  ) : null

  return (
    <Article view={view}>
      {view === ViewType.GRID ? (
        <>
          <time>{formattedTime(event.startsAt)}</time>

          <h3>
            <Link href={`${Routes.EVENTS}/${event.id}`}>{event.title}</Link>
          </h3>
          <Author>{`${event.owner.firstName} ${event.owner.lastName}`}</Author>
          <Description>{event.description}</Description>
          <StyledActions>
            <span>
              <StyledAttendeeIcon />{' '}
              {`${event.attendees.length} of ${event.capacity}`}
            </span>

            {action}
          </StyledActions>
        </>
      ) : (
        <>
          <h3>
            <Link href={`${Routes.EVENTS}/${event.id}`}>{event.title}</Link>
          </h3>
          <Description>{event.description}</Description>
          <Author>{`${event.owner.firstName} ${event.owner.lastName}`}</Author>
          <Container>
            <time>{formattedTime(event.startsAt)}</time>
            <span>{`${event.attendees.length} of ${event.capacity}`}</span>
          </Container>

          {action}
        </>
      )}
    </Article>
  )
}
