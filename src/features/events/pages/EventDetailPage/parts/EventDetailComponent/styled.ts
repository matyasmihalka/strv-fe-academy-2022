import styled from 'styled-components'

import { CreateButton } from '~/features/events/components/CreateButton'
import { mq } from '~/features/ui/theme/mq'

export const PositionedCreateButton = styled(CreateButton)`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${mq.medium} {
    bottom: 3rem;
    right: 3rem;
  }
`
