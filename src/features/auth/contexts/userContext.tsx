import type { FC, ReactNode } from 'react'
import { useContext } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

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
  const handleLogout = useCallback(() => {
    setUser(null)
  }, [])

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
