import type { FC } from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { FilterType } from './types'
import { ViewType } from './types'

import { useEvents } from '../../hooks/useEvents'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */

// Temporary logged in user until we have authentication
const loggedInUser = '628a2c5ce02f11001bec0970'

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  const [view, setView] = useState(ViewType.GRID)
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL)

  const { articles, articleIDsToRender, users, isLoading, error } =
    useEvents(activeFilter)

  // Handle views and filter
  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  const filteringHandler = (filterType: FilterType) => {
    setActiveFilter(filterType)
  }

  // Not in use, needs to be reactivated when Context API will be set
  const attendanceHandler = (id: string) => () => {
    const article = { ...articles[id] }
    let newAttendeesList
    if (article.attendees.includes(loggedInUser)) {
      newAttendeesList = article.attendees.filter(
        (user) => user !== loggedInUser
      )
    } else {
      newAttendeesList = [...article.attendees, loggedInUser]
    }

    const newArticle = {
      ...articles[id],
      attendees: newAttendeesList,
    }

    console.log(newArticle)
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
        // eslint-disable-next-line react/jsx-no-useless-fragment

        <List view={view}>
          {articleIDsToRender.map((id) => (
            <li key={id}>
              <EventItem
                view={view}
                eventData={articles[id]}
                owner={users[articles[id].owner]}
                loggedInUser={loggedInUser}
                onAttendanceChange={attendanceHandler(id)}
              />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
