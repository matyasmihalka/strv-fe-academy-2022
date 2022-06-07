import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { Main } from './styled'
// FC - function components

type Props = {
  children: NonNullable<ReactNode>
  headerComponent?: ReactNode
}

export const LayoutInternal: FC<Props> = ({ children, headerComponent }) => (
  <Main>
    <Header actionComponent={headerComponent} />
    {children}
  </Main>
)

LayoutInternal.defaultProps = {
  headerComponent: null,
}
