import type { FC, ReactNode } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'
import { Container, Main } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container>
      <AsideCover />
      <Main>{children}</Main>
    </Container>
  </>
)
