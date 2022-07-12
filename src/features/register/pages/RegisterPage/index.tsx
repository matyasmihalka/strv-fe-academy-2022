import type { NextPage } from 'next'

import { ContainerExternal } from '~/features/ui/components/ContainerExternal'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { RegisterForm } from './parts/RegisterForm'
import { H1, P, StyledError } from './styled'

export const RegisterPage: NextPage = () => {
  const submitError = ''
  return (
    <LayoutExternal>
      <ContainerExternal>
        <H1>Get started absolutely free.</H1>
        {submitError ? (
          <StyledError>{submitError}</StyledError>
        ) : (
          <P>Enter your details below</P>
        )}
        <RegisterForm />
      </ContainerExternal>
    </LayoutExternal>
  )
}
