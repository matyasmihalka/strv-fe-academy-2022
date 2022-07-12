import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import type { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useRegister } from '~/features/auth/hooks/useRegister'
import { Routes } from '~/features/core/constants/routes'
import { Input } from '~/features/ui/components/Input'

import { StyledForm, SubmitButton } from './styled'

const RegisterSchema = yup
  .object({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    repeatPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required()

type RegisterInputs = yup.InferType<typeof RegisterSchema>

type RegisterFormType = {
  setSubmitError: Dispatch<SetStateAction<string | null>>
}

export const RegisterForm: FC<RegisterFormType> = ({ setSubmitError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(RegisterSchema),
  })

  const { mutate, isLoading } = useRegister()
  const router = useRouter()

  const handleRegister = (data: RegisterInputs) => {
    // Only submit in case of no errors.
    if (
      !errors.email &&
      !errors.password &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.repeatPassword
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { repeatPassword, ...registerData } = data

      mutate(registerData, {
        onSuccess: async () => {
          await router.push(Routes.LOGIN)
        },
        onError: (error) => {
          setSubmitError(error.message)
        },
      })
    }
  }

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

      <SubmitButton disabled={isLoading}>
        {isLoading ? 'Submitting' : 'Sign up'}
      </SubmitButton>
    </StyledForm>
  )
}
