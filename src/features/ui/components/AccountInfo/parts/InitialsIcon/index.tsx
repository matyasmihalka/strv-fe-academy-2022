import type { FC } from 'react'

import { Initials, Wrapper } from './styled'

type Props = {
  initials: string
}

export const InitialsIcon: FC<Props> = ({ initials }) => {
  return (
    <Wrapper>
      <Initials>{initials}</Initials>
    </Wrapper>
  )
}
