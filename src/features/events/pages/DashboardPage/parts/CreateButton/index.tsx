import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { CircleButton } from '~/features/ui/components/CircleButton'

import { PlusIcon } from './parts/PlusIcon'

export type Props = {
  className?: ''
}

export const CreateButton: FC<Props> = ({ className }) => (
  // Unlike with a plain <a> element, we need to pass passHref prop
  // to make sure Next.js adds the href attribute to our styled component
  <Link href={Routes.CREATE_EVENT} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a aria-label="Create event" className={className}>
      <CircleButton>
        <PlusIcon />
      </CircleButton>
    </a>
  </Link>
)
