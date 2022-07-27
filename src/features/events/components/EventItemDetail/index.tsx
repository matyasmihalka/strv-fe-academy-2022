import { isBefore } from 'date-fns'
import Link from 'next/link'
import type { FC } from 'react'

import { EventCard } from '~/features/events/components/EventCard'
import { formattedTime } from '~/features/events/lib/formattedTime'
import type { ArticleType } from '~/features/events/types'
import { Button } from '~/features/ui/components/Button'

import {
  StyledActions,
  StyledAttendeeIcon,
  StyledAuthor,
  StyledDescription,
  StyledH2,
  StyledSpan,
  StyledTime,
} from './styled'

import { EventActionButton } from '../EventActionButton'

export type Props = {
  event: ArticleType
  isLoggedInUserOwner: boolean
}

export const EventItemDetail: FC<Props> = ({ event, isLoggedInUserOwner }) => {
  const isPast = isBefore(new Date(event.startsAt), new Date())
  //   console.log(handleAttendance)
  return (
    <EventCard>
      <StyledTime>
        <time>{formattedTime(event.startsAt)}</time>
      </StyledTime>
      <StyledH2>{event.title}</StyledH2>
      <StyledAuthor>{`${event.owner.firstName} ${event.owner.lastName}`}</StyledAuthor>
      <StyledDescription>{event.description}</StyledDescription>
      <StyledActions>
        <StyledSpan>
          <StyledAttendeeIcon />{' '}
          {`${event.attendees.length} of ${event.capacity}`}
        </StyledSpan>

        {isLoggedInUserOwner ? (
          <Link href={`/events/edit/${event.id}`}>
            <Button size="small" accent="silent" as="a">
              Edit
            </Button>
          </Link>
        ) : !isPast ? (
          <EventActionButton event={event} />
        ) : null}
      </StyledActions>
    </EventCard>
  )
}
