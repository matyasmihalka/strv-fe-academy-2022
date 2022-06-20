import type { FC, ReactNode } from 'react'
import { createContext, useContext } from 'react'

import { useDashboardContext } from './dashboard'

import { useEvents } from '../hooks/useEvents'
import type { ArticleType, NormalizedData, UserType } from '../types'

export type ContextValue = {
  articles: NormalizedData<ArticleType>
  articleIDsToRender: string[]
  users: NormalizedData<UserType>
  isLoading: boolean
  error: Error | null
}

export const EventsContext = createContext<ContextValue>({
  articles: {},
  users: {},
  articleIDsToRender: [],
  isLoading: false,
  error: null,
})

export const EventsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { filter } = useDashboardContext()
  const value = useEvents(filter)

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  )
}

export const useEventsContext = () => {
  return useContext(EventsContext)
}
