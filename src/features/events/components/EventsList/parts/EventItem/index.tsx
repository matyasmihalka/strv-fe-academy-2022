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
}

export const EventItem: FC<Props> = ({
  view,
  eventData,
  owner,
  loggedInUser,
}) => {
  const Time = () => <time>{eventData.startsAt}</time>
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
      onClick={() => alert('TODO')}
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
