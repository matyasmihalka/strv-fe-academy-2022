import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { SignIn } from '~/features/ui/components/Header/parts/SignIn'
import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { Container, H1, P, StyledForm, SubmitButton } from './styled'

export const LoginPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('TODO')
  }

  return (
    <LayoutExternal>
      <Container>
        <H1>Sign in to Eventio!</H1>
        <P>Enter your details below</P>
        <StyledForm onSubmit={onSubmit}>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <SignIn position="form" /> {/* Renders only on small screens */}
          <SubmitButton>SIGN IN</SubmitButton>
        </StyledForm>
      </Container>
    </LayoutExternal>
  )
}
