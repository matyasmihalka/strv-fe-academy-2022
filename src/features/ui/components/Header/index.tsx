import type { FC, ReactNode } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

import { AccountInfo } from '../AccountInfo'

export type ContainerProps = {
  isExternal?: boolean
  leftActionComponent?: ReactNode
  centerActionComponent?: ReactNode
}

export type ComponentProps = {
  user: UserType | null
}

export const HeaderComponent: FC<ComponentProps & ContainerProps> = ({
  isExternal,
  leftActionComponent,
  user,
  centerActionComponent,
}) => {
  return (
    <StyledHeader isAbsolute={isExternal}>
      <StyledLogo />
      {centerActionComponent}
      {leftActionComponent ?? (user ? <AccountInfo user={user} /> : <SignIn />)}
    </StyledHeader>
  )
}

export const Header: FC<ContainerProps> = ({
  isExternal = false,
  leftActionComponent = null,
  centerActionComponent = null,
}) => {
  const { user } = useUserContext()

  return (
    <HeaderComponent
      isExternal={isExternal}
      leftActionComponent={leftActionComponent}
      user={user}
      centerActionComponent={centerActionComponent}
    />
  )
}
