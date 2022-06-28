import { format } from 'date-fns'
import type { FC } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { privateApi } from '~/features/api'
import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'
// import { getAccessToken } from '~/features/auth/storage'

import {
  Article,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
  StyledButton,
} from './styled'

import type { ArticleType } from '../../../../types'
import { ViewType } from '../../types'

type Props = {
  view: ViewType
  eventData: ArticleType
  owner: UserType
  // onAttendanceChange: () => void
}

export const EventItem: FC<Props> = ({
  view,
  eventData,
  owner,
  // onAttendanceChange,
}) => {
  const { user } = useUserContext()
  const isUserAttending =
    user && eventData.attendees.includes(user.id) ? true : false

  const queryClient = useQueryClient()

  const attendEvent = useMutation<ArticleType, Error>(
    'attendEvent',
    async () => {
      const response = await privateApi.post(
        `/events/${eventData.id}/attendees/me`
      )

      if (!response.ok) {
        throw Error('Attending the event has failed')
      }

      return (await response.json()) as ArticleType
    },
    {
      onSuccess: (updatedEvent) => {
        queryClient.setQueriesData<ArticleType[]>(['events'], (previous) => {
          if (previous) {
            return previous.map((event) =>
              event.id === updatedEvent.id ? updatedEvent : event
            )
          }
          return []
        })
      },
    }
  )

  const leaveEvent = useMutation(
    'leaveEvent',
    async () => {
      const response = await privateApi.delete(
        `/events/${eventData.id}/attendees/me`
      )

      if (!response.ok) {
        throw Error('Attending the event has failed')
      }

      return { success: response.ok }
    },
    {
      onSuccess: async () => await queryClient.invalidateQueries('events'),
    }
  )

  const handleAttendance = () => {
    if (isUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }

    console.log('mutation done')
  }

  const Time = () => (
    <time>{format(new Date(eventData.startsAt), 'LLLL d, y – p')}</time>
  )
  const H3 = () => <h3>{eventData.title}</h3>

  const AuthorData = () => (
    <Author>{`${owner.firstName} ${owner.lastName}`}</Author>
  )

  const DescriptionData = () => (
    <Description>{eventData.description}</Description>
  )

  const ButtonData = () => (
    <StyledButton
      type="button"
      size="small"
      accent={isUserAttending ? 'destructive' : 'primary'}
      onClick={handleAttendance}
    >
      {isUserAttending ? 'LEAVE' : 'JOIN'}
    </StyledButton>
  )

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
              {`${eventData.attendees.length} of ${eventData.capacity}`}
            </span>
            <ButtonData />
          </StyledActions>
        </>
      ) : (
        <>
          <H3 />
          <DescriptionData />
          <AuthorData />
          <Container>
            <Time />
            <span>{`${eventData.attendees.length} of ${eventData.capacity}`}</span>
          </Container>
          <ButtonData />
        </>
      )}
    </Article>
  )
}
