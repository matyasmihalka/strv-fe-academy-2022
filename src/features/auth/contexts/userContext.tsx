import * as Sentry from '@sentry/nextjs'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { Routes } from '~/features/core/constants/routes'

import {
  getPersistedUser,
  removeAccessToken,
  removePersistedUser,
} from '../storage'

export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
}

type ContextValue = {
  user: UserType | null
  setUser: (user: UserType) => void
  handleLogout: () => void
}

export const UserContext = createContext<ContextValue>({
  user: null,
  // eslint-disable-next-line no-empty-function
  setUser: () => {},
  // eslint-disable-next-line no-empty-function
  handleLogout: () => {},
})

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => setUser(getPersistedUser()), [])
  const router = useRouter()

  const handleLogout = useCallback(() => {
    Sentry.captureMessage('handling logout')

    setUser(null)
    removePersistedUser()
    removeAccessToken()
    removeAccessToken()
    void router.push(Routes.LOGIN)
  }, [router])

  const value = useMemo(
    () => ({
      user,
      setUser,
      handleLogout,
    }),
    [user, setUser, handleLogout]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  return useContext(UserContext)
}
