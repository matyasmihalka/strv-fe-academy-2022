import type { FC, ReactNode } from 'react'
import { useMemo, useState, useContext } from 'react'
import { createContext } from 'react'

import { FilterType, ViewType } from '../components/EventsList/types'

export type ContextValue = {
  view: ViewType
  setView: (view: ViewType) => void
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const DashboardContext = createContext<ContextValue>({
  view: ViewType.GRID,
  // eslint-disable-next-line no-empty-function
  setView: () => {},
  filter: FilterType.ALL,
  // eslint-disable-next-line no-empty-function
  setFilter: () => {},
})

export const DashboardContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const value = useMemo(
    () => ({
      view,
      setView,
      filter,
      setFilter,
    }),
    [view, filter]
  )

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

// To return a domain specific hook, and abstract away the actual context structure
export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
