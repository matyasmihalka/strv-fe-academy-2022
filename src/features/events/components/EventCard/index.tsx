import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

// This component serves as styling which is similar to Article component from EventItemComponent -
// where styling is combined with containing components
// this should be the better way to do
export const EventCard = styled.div`
  background-color: ${colors.background.light};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1.6rem;
  display: block;

  ${mq.medium} {
    padding: 3.2rem;
  }
`
