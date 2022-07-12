import type { FC } from 'react'

import { Initials, Wrapper } from './styled'

type Props = {
  initials: string
  className?: string
}

export const InitialsIcon: FC<Props> = ({ initials, className }) => {
  return (
    <Wrapper className={className}>
      <Initials>{initials}</Initials>
    </Wrapper>
  )
}
