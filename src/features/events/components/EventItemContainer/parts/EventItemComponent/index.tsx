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
  StyledButton,
} from './styled'

export type Props = {
  view: ViewType
  event: ArticleType
  isLoggedInUserAttending: boolean
  handleButtonAction: () => void
  isLoggedInUserOwner: boolean
}

export const EventItemComponent: FC<Props> = ({
  view,
  event,
  isLoggedInUserAttending,
  handleButtonAction,
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

  const ButtonData = () => {
    if (isPast || !user) {
      return null
    }

    type Props = {
      buttonText: 'EDIT' | 'JOIN' | 'LEAVE'
      accent: 'primary' | 'destructive' | 'edit'
    }

    const getButtonProps = (): Props => {
      if (isLoggedInUserOwner) {
        return { buttonText: 'EDIT', accent: 'edit' }
      }
      if (isLoggedInUserAttending) {
        return { buttonText: 'LEAVE', accent: 'destructive' }
      }

      return { buttonText: 'JOIN', accent: 'primary' }
    }

    const { buttonText, accent } = getButtonProps()

    return (
      <StyledButton
        type="button"
        size="small"
        accent={accent}
        onClick={handleButtonAction}
      >
        {buttonText}
      </StyledButton>
    )
  }

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
            <span>{`${event.attendees.length} of ${event.capacity}`}</span>
          </Container>
          <ButtonData />
        </>
      )}
    </Article>
  )
}
