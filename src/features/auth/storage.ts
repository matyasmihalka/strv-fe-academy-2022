import type { UserType } from './contexts/userContext'

export const setPersistedUser = (user: UserType) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}

export const getPersistedUser = (): UserType | null => {
  const jsonUser = window.localStorage.getItem('user')
  return jsonUser ? (JSON.parse(jsonUser) as UserType) : null
}

export const removePersistedUser = () => {
  window.localStorage.removeItem('user')
}
