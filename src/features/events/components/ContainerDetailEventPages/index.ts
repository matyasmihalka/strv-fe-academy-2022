import styled from 'styled-components'

import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'
import { mq } from '~/features/ui/theme/mq'

export const ContainerDetailEventPages = styled(ContainerEventPages)`
  ${mq.medium} {
    margin-top: 4rem;
  }
`
