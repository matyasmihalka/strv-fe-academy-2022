import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

export const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;

  ${mq.medium} {
    margin-bottom: 4rem;
  }
`
