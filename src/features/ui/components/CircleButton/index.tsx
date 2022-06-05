import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'

export const CircleButton = styled(Button)`
  border-radius: 50%;
  padding: 2.8rem;
  position: relative;

  svg {
    display: block;
    position: absolute;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
