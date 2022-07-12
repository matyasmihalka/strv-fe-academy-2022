import type { FC } from 'react'

import { CircleButton } from '~/features/ui/components/CircleButton'

import { TickIcon } from './parts/TickIcon'

export type Props = {
  formID?: string
  className?: string
  isDisabled?: boolean
}

export const EditFormButton: FC<Props> = ({
  formID,
  className,
  isDisabled,
}) => {
  return (
    <CircleButton
      accent="primary"
      type="submit"
      form={formID}
      className={className}
      disabled={isDisabled}
    >
      <TickIcon />
    </CircleButton>
  )
}
