import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export const Logo = () => (
  <Link href={Routes.DASHBOARD}>
    {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>E.</a>
  </Link>
)
