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

const initialLoginState = {
  email: '',
  password: '',
}

export const LoginPage: NextPage = () => {
  const [error, setError] = useState('')
  const [loginState, setLoginState] = useState(initialLoginState)

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(loginState)
    alert('TODO')
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state = { ...loginState }
    if (event.target.name === 'email') {
      state.email = event.target.value
    }

    if (event.target.name === 'password') {
      state.password = event.target.value
    }

    setLoginState(state)
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

        <StyledForm onSubmit={onSubmitHandler} noValidate>
          <Input
            label="Email"
            type="email"
            name="email"
            error={error}
            value={loginState.email}
            onChange={inputChangeHandler}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={error}
            value={loginState.password}
            onChange={inputChangeHandler}
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
