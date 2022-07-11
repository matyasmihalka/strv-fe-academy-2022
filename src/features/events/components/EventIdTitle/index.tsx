import type { FC } from 'react'

import { StyledH1, StyledP } from './styled'

type Props = {
  eventId: string
}

export const EventIdTitle: FC<Props> = ({ eventId }) => (
  <StyledH1>
    Detail Event: <StyledP>#{eventId}</StyledP>{' '}
  </StyledH1>
)
