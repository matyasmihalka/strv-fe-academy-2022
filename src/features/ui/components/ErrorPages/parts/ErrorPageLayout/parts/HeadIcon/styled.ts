import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

export const Svg = styled.svg`
  position: absolute;
  left: 0%;
  overflow: hidden;
  transform: translate(-50%, 0);

  ${mq.medium} {
    left: 20%;
    transform: none;
  }
`
