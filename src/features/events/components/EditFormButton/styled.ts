import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

import { EditFormButton } from '.'

export const PositionedEditFormButton = styled(EditFormButton)`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${mq.medium} {
    bottom: 3rem;
    right: 3rem;
  }
`
