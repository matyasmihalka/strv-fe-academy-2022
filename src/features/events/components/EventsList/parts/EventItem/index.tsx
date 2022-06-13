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

import type { ArticleType, UserType } from '../../types'
import { ViewType } from '../../types'

type Props = {
  view: ViewType
  eventData: ArticleType
  owner: UserType
  loggedInUser: string
  onAttendanceChange: () => void
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const formatDate = (ISODate: string) => {
  const startDate = new Date(ISODate)
  const day = startDate.getUTCDate()
  const month = startDate.getMonth()
  const year = startDate.getFullYear()
  let hour = startDate.getUTCHours()
  const minute = startDate.getMinutes()
  let pmAm = 'AM'

  if (hour > 12) {
    pmAm = 'PM'
    hour -= 12
  }

  return `${months[month]} ${day}, ${year} - ${hour}:${minute} ${pmAm}`
}

export const EventItem: FC<Props> = ({
  view,
  eventData,
  owner,
  loggedInUser,
  onAttendanceChange,
}) => {
  const Time = () => <time>{formatDate(eventData.startsAt)}</time>
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
      // disabled={eventData.buttonType === 'EDIT' ? true : false}
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
