import styled from 'styled-components'

import { mq, ScreenSize } from '~/features/ui/theme/mq'

export const ContainerEventPages = styled.div`
  margin: 4rem auto 0 auto;
  padding: 0 0.8rem 10rem 0.8rem;
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: border-box;
  width: 100%;

  ${mq.medium} {
    padding: 0 2rem 10rem 2rem;
    margin: 0 auto;
  }

  ${mq.large} {
    padding: 0 4rem 10rem 4rem;
  }
`
