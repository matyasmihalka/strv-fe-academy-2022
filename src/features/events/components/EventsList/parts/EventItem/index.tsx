import { format } from 'date-fns'
import type { FC } from 'react'

import {
  Article,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
  StyledButton,
} from './styled'

import type { ArticleType, UserType } from '../../../../types'
import { ViewType } from '../../types'

type Props = {
  view: ViewType
  eventData: ArticleType
  owner: UserType
  loggedInUser: string
  onAttendanceChange: () => void
}

export const EventItem: FC<Props> = ({
  view,
  eventData,
  owner,
  loggedInUser,
  onAttendanceChange,
}) => {
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
      accent={
        eventData.attendees.includes(loggedInUser) ? 'destructive' : 'primary'
      }
      onClick={() => onAttendanceChange()}
    >
      {eventData.attendees.includes(loggedInUser) ? 'LEAVE' : 'JOIN'}
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
