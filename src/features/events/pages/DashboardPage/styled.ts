import styled from 'styled-components'

import { AccessibleHidden } from '~/features/ui/components/AccessibleHidden'
import { mq } from '~/features/ui/theme/mq'

import { CreateButton } from './parts/CreateButton'

export const H1 = styled.h1`
  ${AccessibleHidden}
`

export const H2 = styled(H1).attrs({ as: 'h2' })``

export const StyledCreateButton = styled(CreateButton)`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${mq.medium} {
    bottom: 3rem;
    right: 3rem;
  }
`