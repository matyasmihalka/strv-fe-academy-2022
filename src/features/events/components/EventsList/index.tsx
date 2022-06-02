import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const view = ViewType.GRID as ViewType

  return (
    <>
      <nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView onChange={(viewType) => alert(viewType)} />
      </nav>
      <List view={view}>
        <li>
          <EventItem />
        </li>
        <li>
          <EventItem />
        </li>
        <li>
          <EventItem />
        </li>
      </List>
    </>
  )
}
