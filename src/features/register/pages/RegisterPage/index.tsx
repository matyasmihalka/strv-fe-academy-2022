import type { NextPage } from 'next'
import { useState } from 'react'

import { withPublicRoute } from '~/features/auth/hocs/withPublicRoute'
import { ContainerExternal } from '~/features/ui/components/ContainerExternal'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { RegisterForm } from './parts/RegisterForm'
import { H1, P, StyledError } from './styled'

export const RegisterPage: NextPage = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  return (
    <LayoutExternal>
      <ContainerExternal>
        <H1>Get started absolutely free.</H1>
        {submitError ? (
          <StyledError>{submitError}</StyledError>
        ) : (
          <P>Enter your details below</P>
        )}
        <RegisterForm setSubmitError={setSubmitError} />
      </ContainerExternal>
    </LayoutExternal>
  )
}

export const PublicRegisterPage = withPublicRoute(RegisterPage)
