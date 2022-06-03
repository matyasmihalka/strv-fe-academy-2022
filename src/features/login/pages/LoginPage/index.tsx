import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { Container, H1, P, SubmitButton } from './styled'

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
        <form onSubmit={onSubmit}>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <SubmitButton>SIGN IN</SubmitButton>
        </form>
      </Container>
    </LayoutExternal>
  )
}
