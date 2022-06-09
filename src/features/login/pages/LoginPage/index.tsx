/* eslint-disable no-useless-escape */
/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
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

const initialErrorState = {
  email: '',
  validateEmailOnBlur: false,
  password: '',
  validatePasswordOnBlur: false,
  hasError: function () {
    return !!this.email || !!this.password
  },
}

const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordValidation = (password: string) => {
  if (password.length <= 9) {
    return false
  }

  return true
}

export const LoginPage: NextPage = () => {
  const [errorState, setErrorState] = useState(initialErrorState)
  const [loginState, setLoginState] = useState(initialLoginState)

  const validate = (target?: string) => {
    const localErrorState = { ...errorState }

    if (target === 'email' || !target) {
      if (!emailValidationRegex.test(loginState.email)) {
        localErrorState.email =
          'Invalid e-mail address. Please check it once again'
      } else {
        localErrorState.email = ''
      }
    }

    if (target === 'password' || !target) {
      if (!passwordValidation(loginState.password)) {
        localErrorState.password =
          'Provided password is too short. Please check it once again'
      } else {
        localErrorState.password = ''
      }
    }

    setErrorState(localErrorState)

    return localErrorState.hasError()
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validate()) {
      return
    }

    console.log(loginState)
    alert('TODO - Form submitted')
  }

  const onBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // once the input fields were touched, validate after loosing focus
    if (event.target.name === 'email') {
      if (errorState.validateEmailOnBlur) {
        validate('email')
      }
    }

    if (event.target.name === 'password') {
      if (errorState.validatePasswordOnBlur) {
        validate('password')
      }
    }
  }

  const onFocusHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if input has error, clear error message and set set validation once focus is lost
    if (event.target.name === 'email' && errorState.email) {
      setErrorState((prevState) => ({
        ...prevState,
        email: '',
        validateEmailOnBlur: true,
      }))
    }

    if (event.target.name === 'password' && errorState.password) {
      setErrorState((prevState) => ({
        ...prevState,
        password: '',
        validatePasswordOnBlur: true,
      }))
    }
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
        {errorState.hasError() ? (
          <StyledError>
            <span>{errorState.email}</span>
            <span>{errorState.password}</span>
          </StyledError>
        ) : (
          <P>Enter your details below</P>
        )}

        <StyledForm onSubmit={onSubmitHandler} noValidate>
          <Input
            label="Email"
            type="email"
            name="email"
            error={errorState.email}
            value={loginState.email}
            onChange={inputChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={errorState.password}
            value={loginState.password}
            onChange={inputChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
          <SignIn position="form" /> {/* Renders only on small screens */}
          <SubmitButton>SIGN IN</SubmitButton>
        </StyledForm>
        <TriggerErrorButton
          onClick={() =>
            setErrorState({ ...errorState, email: Date.now().toString() })
          }
        >
          Trigger ERROR
        </TriggerErrorButton>
      </Container>
    </LayoutExternal>
  )
}
