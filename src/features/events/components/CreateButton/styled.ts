import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

import { CreateButton } from '../CreateButton'

export const PositionedCreateButton = styled(CreateButton)`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${mq.medium} {
    bottom: 3rem;
    right: 3rem;
  }
`
