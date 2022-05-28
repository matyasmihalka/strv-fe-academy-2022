import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'
// FC - function components

type Props = {
  children: NonNullable<ReactNode>
}

// @ts-ignore // TODO: Add types in TS lesson
export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
