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

export const setAccessToken = (accessToken: string) => {
  window.localStorage.setItem('accessToken', accessToken)
}

export const getAccessToken = () => {
  return window.localStorage.getItem('accessToken')
}

export const removeAccessToken = () => {
  window.localStorage.removeItem('accessToken')
}

export const setRefreshToken = (refreshToken: string) => {
  window.localStorage.setItem('refreshToken', refreshToken)
}

export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshToken')
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refreshToken')
}
