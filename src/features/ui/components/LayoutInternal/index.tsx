import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'
// FC - function components

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutInternal: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
