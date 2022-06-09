import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { SignIn } from '~/features/ui/components/Header/parts/SignIn'
import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import {
  Container,
  H1,
  P,
  StyledError,
  StyledForm,
  SubmitButton,
  TriggerErrorButton,
} from './styled'

export const LoginPage: NextPage = () => {
  const [error, setError] = useState('')
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('TODO')
  }

  return (
    <LayoutExternal>
      <Container>
        <H1>Sign in to Eventio!</H1>
        {!error ? (
          <P>Enter your details below</P>
        ) : (
          <StyledError>{error}</StyledError>
        )}

        <StyledForm onSubmit={onSubmit}>
          <Input label="Email" type="email" name="email" error={error} />
          <Input
            label="Password"
            type="password"
            name="password"
            error={error}
          />
          <SignIn position="form" /> {/* Renders only on small screens */}
          <SubmitButton>SIGN IN</SubmitButton>
        </StyledForm>
        <TriggerErrorButton onClick={() => setError(Date.now().toString())}>
          Trigger ERROR
        </TriggerErrorButton>
      </Container>
    </LayoutExternal>
  )
}
