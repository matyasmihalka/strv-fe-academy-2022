import { useMutation } from 'react-query'

import { api } from '~/features/api'

import type { UserType } from '../contexts/userContext'

type RegisterInput = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const useRegister = () => {
  const result = useMutation<UserType, Error, RegisterInput>(
    'login',
    async (userInfo) => {
      const response = await api.post('/users', { json: userInfo })

      if (!response.ok) {
        throw Error('Registration Failed')
      }

      const user = (await response.json()) as UserType
      return user
    }
  )
  return result
}
