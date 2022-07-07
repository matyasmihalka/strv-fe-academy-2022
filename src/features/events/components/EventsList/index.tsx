import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import type { FilterType } from './types'
import type { ViewType } from './types'

import { useEventFilterContext } from '../../contexts/event-filter'
import { useEventViewContext } from '../../contexts/event-view'
import { useEvents } from '../../hooks/useEvents'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */

export const EventsList: FC = () => {
  const { view, setView } = useEventViewContext()
  const { filter: activeFilter, setFilter: setActiveFilter } =
    useEventFilterContext()
  const { events, isLoading, error } = useEvents(activeFilter)

  // Handle views and filter
  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  const filteringHandler = (filterType: FilterType) => {
    setActiveFilter(filterType)
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Nav>
        <NavigationFilter
          onChange={filteringHandler}
          activeFilter={activeFilter}
        />
        <NavigationView onChange={setViewHandler} activeView={view} />
      </Nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List view={view}>
          {events.map((event) => (
            <li key={event.id}>
              <EventItem
                view={view}
                event={event}
                // owner={users[articles[id].owner]}
                // loggedInUser={loggedInUser}
                // onAttendanceChange={attendanceHandler(id)}
              />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
