import styled from 'styled-components'

import { mq } from '../../theme/mq'

export const ContainerExternal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: -8.5rem;

  ${mq.medium} {
    width: 50%;
    align-items: flex-start;
    margin-top: 0;
  }
`
