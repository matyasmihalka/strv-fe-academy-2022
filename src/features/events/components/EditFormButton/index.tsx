import type { FC } from 'react'

import { CircleButton } from '~/features/ui/components/CircleButton'

import { TickIcon } from './parts/TickIcon'

export type Props = {
  formID?: string
  className?: string
}

export const EditFormButton: FC<Props> = ({ formID, className }) => {
  return (
    <CircleButton
      accent="primary"
      type="submit"
      form={formID}
      className={className}
    >
      <TickIcon />
    </CircleButton>
  )
}
