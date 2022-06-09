// import Link from 'next/link'
import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { B, SignInQuestionWrapper, Span } from './styled'

export type WrapperType = {
  position?: 'form' | null
}

export const SignIn: FC<WrapperType> = ({ position = null }) => (
  <SignInQuestionWrapper position={position}>
    <Link href={Routes.LOGIN}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <Span>Don&apos;t have account? </Span>
        <B>SIGN UP</B>
      </a>
    </Link>
  </SignInQuestionWrapper>
)
