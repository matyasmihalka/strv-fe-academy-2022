import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'

export const Header: FC = () => (
  <header>
    <Logo />
    <SignIn />
  </header>
)
