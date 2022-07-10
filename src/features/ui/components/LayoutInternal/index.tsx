import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { Main } from './styled'
// FC - function components

type Props = {
  children: NonNullable<ReactNode>
  leftHeaderComponent?: ReactNode
  centerHeaderComponent?: ReactNode
}

export const LayoutInternal: FC<Props> = ({
  children,
  leftHeaderComponent,
  centerHeaderComponent,
}) => (
  <Main>
    <Header
      leftActionComponent={leftHeaderComponent}
      centerActionComponent={centerHeaderComponent}
    />
    {children}
  </Main>
)
