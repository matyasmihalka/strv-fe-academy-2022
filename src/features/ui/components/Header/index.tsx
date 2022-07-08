import type { FC, ReactNode } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

import { AccountInfo } from '../AccountInfo'

export type ContainerProps = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export type ComponentProps = {
  user: UserType | null
}

export const HeaderComponent: FC<ComponentProps & ContainerProps> = ({
  isExternal,
  actionComponent,
  user,
}) => {
  return (
    <StyledHeader isAbsolute={isExternal}>
      <StyledLogo />
      {actionComponent ?? (user ? <AccountInfo user={user} /> : <SignIn />)}
    </StyledHeader>
  )
}

export const Header: FC<ContainerProps> = ({
  isExternal = false,
  actionComponent = null,
}) => {
  const { user } = useUserContext()

  return (
    <HeaderComponent
      isExternal={isExternal}
      actionComponent={actionComponent}
      user={user}
    />
  )
}
