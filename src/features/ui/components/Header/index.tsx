import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const Header: FC = () => (
  <header>
    <Link href={Routes.DASHBOARD}>E.</Link>
  </header>
)
