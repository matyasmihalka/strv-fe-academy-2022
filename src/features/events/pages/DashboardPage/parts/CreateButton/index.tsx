import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { CircleButton } from '~/features/ui/components/CircleButton'

import { PlusIcon } from './parts/PlusIcon'

type Props = {
  className?: ''
}

export const CreateButton: FC<Props> = ({ className }) => (
  <Link href={Routes.CREATE_EVENT}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a aria-label="Create event" className={className}>
      <CircleButton>
        <PlusIcon />
      </CircleButton>
    </a>
  </Link>
)

CreateButton.defaultProps = {
  className: '',
}
