import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { EventCard } from '~/features/events/components/EventCard'

import { BigInitialsIcon, Email, Name } from './styled'

export type Props = {
  user: UserType
}

export const ProfileInfo: FC<Props> = ({ user }) => {
  return (
    <EventCard>
      <BigInitialsIcon initials={`${user.firstName[0]}${user.lastName[0]}`} />
      <Name>{`${user.firstName} ${user.lastName}`}</Name>
      <Email>{user.email}</Email>
    </EventCard>
  )
}
