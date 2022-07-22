import { isBefore } from 'date-fns'
import Link from 'next/link'
import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { Routes } from '~/features/core/constants/routes'
import { EventActionButton } from '~/features/events/components/EventActionButton'
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

export type Props = {
  view: ViewType
  event: ArticleType
}

export const EventItemComponent: FC<Props> = ({ view, event }) => {
  const isPast = isBefore(new Date(event.startsAt), new Date())
  const { user } = useUserContext()
  const isOwner = event.owner.id === user?.id

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

  // Note: the above pattern of creating components for simple syntax
  // sugar is faulty, as React will identify these as new components always
  // and therefore create new DOM operations on each render!

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
          <Time />

          <H3 />
          <AuthorData />
          <DescriptionData />
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
          <H3 />
          <DescriptionData />
          <AuthorData />
          <Container>
            <Time />
            <span>{`${event.attendees.length} of ${event.capacity}`}</span>
          </Container>

          {action}
        </>
      )}
    </Article>
  )
}
