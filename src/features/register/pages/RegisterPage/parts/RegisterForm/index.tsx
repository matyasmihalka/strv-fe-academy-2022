import { yupResolver } from '@hookform/resolvers/yup'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Input } from '~/features/ui/components/Input'

import { StyledForm, SubmitButton } from './styled'

const RegisterSchema = yup
  .object({
    firstName: yup.string().min(3),
    lastName: yup.string().min(3),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    repeatPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required()

type RegisterInputs = yup.InferType<typeof RegisterSchema>

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(RegisterSchema),
  })

  const handleRegister = (data: RegisterInputs) => {
    console.log(data)
  }

  //   const { mutate, isLoading } = useLogin()

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <StyledForm onSubmit={handleSubmit(handleRegister)} noValidate>
      <Input
        {...register('firstName')}
        label="First Name"
        type="text"
        error={errors?.firstName?.message}
        name="firstName"
      />
      <Input
        {...register('lastName')}
        label="Last Name"
        type="text"
        error={errors?.lastName?.message}
        name="lastName"
      />
      <Input
        {...register('email')}
        label="Email"
        type="email"
        error={errors?.email?.message}
        name="email"
      />
      <Input
        {...register('password')}
        label="Password"
        type="password"
        error={errors?.password?.message}
        name="password"
      />
      <Input
        {...register('repeatPassword')}
        label="Repeat password"
        type="password"
        error={errors?.repeatPassword?.message}
        name="repeatPassword"
      />
      <SubmitButton>Sign up</SubmitButton>
      {/* <SubmitButton disabled={isLoading}>
        {isLoading ? 'Submitting' : 'Sign In'}
      </SubmitButton> */}
    </StyledForm>
  )
}
