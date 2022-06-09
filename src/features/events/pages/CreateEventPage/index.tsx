import type { NextPage } from 'next'
import Link from 'next/link'
import type { FormEvent } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { CloseIcon } from './parts/CloseIcon'
import {
  CenterContainer,
  CloseLink,
  H1,
  InputFormContainer,
  P,
  StyledButton,
  StyledForm,
} from './styled'

export const CreateEventPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('TODO - Creating new form')
  }
  return (
    <LayoutInternal
      headerComponent={
        <Link href={Routes.DASHBOARD}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <CloseLink>
            <CloseIcon aria-hidden="true" />
            Close
          </CloseLink>
        </Link>
      }
    >
      <CenterContainer>
        <InputFormContainer>
          <H1>Create new event</H1>
          <P>Enter details below</P>
          <StyledForm onSubmit={onSubmit}>
            <Input label="Title" type="text" name="title" />
            <Input label="Description" type="text" name="description" />
            <Input label="Date" type="date" name="date" />
            <Input label="Time" type="time" name="time" />
            <Input label="Capacity" type="number" name="capacity" />
            <StyledButton type="submit" accent="primary">
              Create new Event
            </StyledButton>
          </StyledForm>
        </InputFormContainer>
      </CenterContainer>
    </LayoutInternal>
  )
}
