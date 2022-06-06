import type { FC, ReactNode } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'
import { Container, Main, MainContainer } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => (
  <Container>
    <Header isExternal />
    <MainContainer>
      <AsideCover />
      <Main>{children}</Main>
    </MainContainer>
  </Container>
)
