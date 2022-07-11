import { useRouter } from 'next/router'
import type { FC } from 'react'

import { StyledButton } from './styled'

import { useAttendance } from '../../hooks/useAttendance'

type Props = {
  isLoggedInUserOwner: boolean
  isLoggedInUserAttending: boolean
  eventID: string
}

type ButtonProps = {
  buttonText: 'EDIT' | 'JOIN' | 'LEAVE'
  accent: 'primary' | 'destructive' | 'edit'
}

const getButtonInfo = (
  isLoggedInUserOwner: boolean,
  isLoggedInUserAttending: boolean
): ButtonProps => {
  if (isLoggedInUserOwner) {
    return { buttonText: 'EDIT', accent: 'edit' }
  }
  if (isLoggedInUserAttending) {
    return { buttonText: 'LEAVE', accent: 'destructive' }
  }

  return { buttonText: 'JOIN', accent: 'primary' }
}

export const EventActionButton: FC<Props> = ({
  isLoggedInUserOwner,
  isLoggedInUserAttending,
  eventID,
}) => {
  const router = useRouter()
  const { attendEvent, leaveEvent } = useAttendance(eventID)

  const { buttonText, accent } = getButtonInfo(
    isLoggedInUserOwner,
    isLoggedInUserAttending
  )

  const handleButtonAction = () => {
    if (isLoggedInUserOwner) {
      void router.push(`/events/edit/${eventID}`)
    } else {
      if (isLoggedInUserAttending) {
        leaveEvent.mutate()
      } else {
        attendEvent.mutate()
      }
    }
  }

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
