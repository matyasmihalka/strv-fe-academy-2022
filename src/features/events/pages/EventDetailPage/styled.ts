import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

export const StyledLink = styled.span`
  display: none;

  ${mq.medium} {
    color: ${colors.text.base};
    cursor: pointer;
    display: flex;

    svg {
      margin-top: 0.4rem;
      margin-right: 0.8rem;
    }
  }
`

export const PositionedSpinner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`
