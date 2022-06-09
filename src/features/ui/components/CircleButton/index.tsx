import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'

import { elevations } from '../../theme/elevations'

export const CircleButton = styled(Button)`
  border-radius: 50%;
  padding: 2.8rem;
  position: relative;
  ${elevations[900]}

  svg {
    display: block;
    position: absolute;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
