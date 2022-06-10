import { normalize, schema } from 'normalizr'
import type { FC } from 'react'
import { useState } from 'react'

// eslint-disable-next-line import/extensions
import eventData from '~/events.json'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import type { UserType, ArticleType, NormalizedEventDataType } from './types'
import { ViewType } from './types'

const userSchema: schema.Entity<UserType> = new schema.Entity('users')

const articleSchema: schema.Entity<ArticleType> = new schema.Entity(
  'articles',
  {
    owner: userSchema,
    attendees: [userSchema],
  }
)

const articleListSchema = [articleSchema]

const normalizedEventData: NormalizedEventDataType = normalize(
  eventData,
  articleListSchema
)

// Temporary logged in user until we have authentication
const loggedInUser = '628a2c5ce02f11001bec0970'

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
        {normalizedEventData.result.map((id) => (
          <li key={id}>
            <EventItem
              view={view}
              eventData={normalizedEventData.entities.articles[id]}
              owner={
                normalizedEventData.entities.users[
                  normalizedEventData.entities.articles[id].owner
                ]
              }
              loggedInUser={loggedInUser}
            />
          </li>
        ))}
      </List>
    </>
  )
}
