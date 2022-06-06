import type { FC } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  const [view, setView] = useState(ViewType.GRID)

  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView onChange={setViewHandler} activeView={view} />
      </Nav>
      <List view={view}>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
        <li>
          <EventItem view={view} />
        </li>
      </List>
    </>
  )
}
