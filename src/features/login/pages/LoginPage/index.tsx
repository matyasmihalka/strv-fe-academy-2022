/* eslint-disable no-useless-escape */
/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState, useCallback } from 'react'

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
} from './styled'

const validators = {
  email: (value: string) => {
    if (typeof value !== 'string') return 'Invalid e-mail value type'
    if (!value) return 'E-mail is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value)) return 'Invalid e-mail'
  },
  password: (value: string) => {
    if (typeof value !== 'string') return 'Invalid password value type'
    if (!value) return 'Password is required'
  },
}

export const LoginPage: NextPage = () => {
  // const [loginState, setLoginState] = useState(initialLoginState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Login handler.
   */
  const login = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const errors = {
        email: validators.email(email),
        password: validators.password(password),
      }

      if (errors.email) {
        setEmailError(errors.email)
      }

      if (errors.password) {
        setPasswordError(errors.password)
      }

      // Only submit in case of no errors.
      if (!errors.email && !errors.password) {
        setIsSubmitting(true)
        setTimeout(() => {
          // Mocking to represent login submit outcome.
          const shouldFail = Math.random() < 0.5
          if (shouldFail) {
            setSubmitError('Something went terribly wrong!')
          } else {
            alert('Success!')
          }

          setIsSubmitting(false)
        }, 1000)
      }
    },
    [email, password]
  )

  return (
    <LayoutExternal>
      <Container>
        <H1>Sign in to Eventio!</H1>
        {submitError ? (
          <StyledError>{submitError}</StyledError>
        ) : (
          <P>Enter your details below</P>
        )}

        <StyledForm onSubmit={login} noValidate>
          <Input
            label="Email"
            type="email"
            name="email"
            error={emailError}
            value={email}
            onChange={(e) => {
              setEmailError(null)
              setEmail(e.target.value)
            }}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            error={passwordError}
            value={password}
            onChange={(e) => {
              setPasswordError(null)
              setPassword(e.target.value)
            }}
          />
          <SignIn position="form" /> {/* Renders only on small screens */}
          <SubmitButton disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Sign In'}
          </SubmitButton>
        </StyledForm>
      </Container>
    </LayoutExternal>
  )
}
