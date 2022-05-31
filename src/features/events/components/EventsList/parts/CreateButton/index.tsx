import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const CreateButton: FC = () => (
  <Link href={Routes.CREATE_EVENT}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a aria-label="Create event">+</a>
  </Link>
)
