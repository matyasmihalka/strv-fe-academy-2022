import type { FC, ReactNode } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

import { AccountInfo } from '../AccountInfo'

type Props = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export const Header: FC<Props> = ({
  isExternal = false,
  actionComponent = null,
}) => {
  const { user } = useUserContext()

  return (
    <StyledHeader isAbsolute={isExternal}>
      <StyledLogo />
      {actionComponent ?? (user ? <AccountInfo user={user} /> : <SignIn />)}
    </StyledHeader>
  )
}
