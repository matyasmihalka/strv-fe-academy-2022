// import Link from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { B, SignInQuestionWrapper, Span } from './styled'

export type WrapperType = {
  position?: 'form' | null
}

export const SignIn: FC<WrapperType> = ({ position = null }) => {
  const { pathname } = useRouter()
  return (
    <SignInQuestionWrapper position={position}>
      {pathname === '/login' ? (
        <Link href={Routes.REGISTER}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Span>Don&apos;t have account? </Span>
            <B>SIGN UP</B>
          </a>
        </Link>
      ) : (
        <Link href={Routes.LOGIN}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Span>Already have an have account? </Span>
            <B>SIGN IN</B>
          </a>
        </Link>
      )}
    </SignInQuestionWrapper>
  )
}
