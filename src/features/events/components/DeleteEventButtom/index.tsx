import type { FC } from 'react'

import { BinIcon } from './parts/BinIcon'
import { StyledButton } from './styled'

import { useEditEvent } from '../../hooks/useDeleteEvent'

export type Props = {
  eventID: string
}

export const DeleteEventButton: FC<Props> = ({ eventID }) => {
  const { mutate, isLoading } = useEditEvent(eventID)

  return (
    <StyledButton type="button" onClick={() => mutate()} disabled={isLoading}>
      <BinIcon /> DELETE EVENT
    </StyledButton>
  )
}
