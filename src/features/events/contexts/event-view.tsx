import type { FC, ReactNode } from 'react'
import { useContext } from 'react'
import { createContext, useMemo, useState } from 'react'

import { ViewType } from '../components/EventsList/types'

export type ContextValue = {
  view: ViewType
  setView: (view: ViewType) => void
}

export const EventViewContext = createContext<ContextValue>({
  view: ViewType.GRID,
  // eslint-disable-next-line no-empty-function
  setView: () => {},
})

export const EventViewContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  const value = useMemo(
    () => ({
      view,
      setView,
    }),
    [view]
  )

  return (
    <EventViewContext.Provider value={value}>
      {children}
    </EventViewContext.Provider>
  )
}

// To return a domain specific hook, and abstract away the actual context structure
export const useEventViewContext = () => {
  return useContext(EventViewContext)
}
