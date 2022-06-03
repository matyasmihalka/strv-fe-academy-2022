import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { StyledHeader } from './styled'

export const Header: FC = () => (
  <StyledHeader>
    <Logo />
    <SignIn />
  </StyledHeader>
)
