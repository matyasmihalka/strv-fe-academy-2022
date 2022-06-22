import type { FC, ReactNode } from 'react'
import { useContext } from 'react'
import { useMemo, useState } from 'react'
import { createContext } from 'react'

import { FilterType } from '../components/EventsList/types'

export type ContextValue = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const EventFilterContext = createContext<ContextValue>({
  filter: FilterType.ALL,
  // eslint-disable-next-line no-empty-function
  setFilter: () => {},
})

export const EventFilterContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  )

  return (
    <EventFilterContext.Provider value={value}>
      {children}
    </EventFilterContext.Provider>
  )
}

// To return a domain specific hook, and abstract away the actual context structure
export const useEventFilterContext = () => {
  return useContext(EventFilterContext)
}
