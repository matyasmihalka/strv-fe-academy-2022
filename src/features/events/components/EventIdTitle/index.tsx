import type { FC } from 'react'

import { StyledH1, StyledP } from './styled'

type Props = {
  eventId: string
  className?: string
}

export const EventIdTitle: FC<Props> = ({ eventId, className }) => (
  <StyledH1 className={className}>
    Detail Event: <StyledP>#{eventId}</StyledP>{' '}
  </StyledH1>
)
