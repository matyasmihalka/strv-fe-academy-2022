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

import { ViewType } from '../../types'

type Props = {
  view: ViewType
  eventData: {
    date: string
    title: string
    author: string
    description: string
    attendance: string
    buttonType: string
  }
}

export const EventItem: FC<Props> = ({ view, eventData }) => {
  const Time = () => <time>{eventData.date}</time>
  const H3 = () => <h3>{eventData.title}</h3>
  const AuthorData = () => <Author>{eventData.author}</Author>
  const DescriptionData = () => (
    <Description>{eventData.description}</Description>
  )
  const ButtonData = () => (
    <StyledButton
      type="button"
      size="small"
      accent={eventData.buttonType === 'LEAVE' ? 'destructive' : 'primary'}
      onClick={() => alert('TODO')}
      disabled={eventData.buttonType === 'EDIT' ? true : false}
    >
      {eventData.buttonType}
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
              <StyledAttendeeIcon /> {eventData.attendance}
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
            <span>{eventData.attendance}</span>
          </Container>
          <ButtonData />
        </>
      )}
    </Article>
  )
}
