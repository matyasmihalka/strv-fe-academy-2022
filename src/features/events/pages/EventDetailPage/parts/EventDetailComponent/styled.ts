import styled from 'styled-components'

import { EventIdTitle } from '~/features/events/components/EventIdTitle'
import { mq } from '~/features/ui/theme/mq'

export const PositionedEventID = styled(EventIdTitle)`
  margin-bottom: 2.3rem;

  ${mq.medium} {
    margin-bottom: 4rem;
  }
`
