import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'

import { InitialsIcon } from './parts/InitialsIcon'
import { DropdownIcon, P, Wrapper } from './styled'

type Props = {
  user: UserType
}

export const AccountInfo: FC<Props> = ({ user }) => {
  const { firstName, lastName } = user
  const initials = `${firstName[0]}${lastName[0]}`
  return (
    <Wrapper>
      <InitialsIcon initials={initials} />
      <P>{`${firstName} ${lastName}`}</P>
      <DropdownIcon />
    </Wrapper>
  )
}
