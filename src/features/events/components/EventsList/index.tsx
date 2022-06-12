import { normalize, schema } from 'normalizr'
import type { FC } from 'react'
import { useState } from 'react'

// eslint-disable-next-line import/extensions
import eventData from '~/events.json'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import type {
  UserType,
  ArticleType,
  NormalizedEventDataType,
  NormalizedData,
} from './types'
import { FilterType } from './types'
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

console.log(normalizedEventData)

// Temporary logged in user until we have authentication
const loggedInUser = '628a2c5ce02f11001bec0970'

console.log(normalizedEventData.result)

const sortArticles = (
  articles: NormalizedData<ArticleType>,
  order: 'oldestFirst' | 'latestFirst' = 'oldestFirst'
) => {
  const returnValue = order === 'oldestFirst' ? -1 : 1
  return Object.keys(articles).sort((a, b) => {
    if (articles[a].startsAt < articles[b].startsAt) {
      return returnValue
    } else {
      return -returnValue
    }
  })
}

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  const [view, setView] = useState(ViewType.GRID)
  const [articleIDsToRender, setArticleIDsToRender] = useState(
    sortArticles(normalizedEventData.entities.articles)
  )

  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  const filteringHandler = (filterType: FilterType) => {
    // alert(filterType)
    console.log(filterType)
    let results = sortArticles(normalizedEventData.entities.articles)

    switch (filterType) {
      case FilterType.ALL:
        console.log('ALL filter applied')
        results = sortArticles(normalizedEventData.entities.articles)
        break
      case FilterType.FUTURE:
        console.log('FUTURE filter applied')
        results = results.filter(
          (id) =>
            normalizedEventData.entities.articles[id].startsAt >
            new Date(Date.now()).toISOString()
        )
        break
      case FilterType.PAST:
        results = sortArticles(
          normalizedEventData.entities.articles,
          'latestFirst'
        )
        results = results.filter(
          (id) =>
            normalizedEventData.entities.articles[id].startsAt <
            new Date(Date.now()).toISOString()
        )
        break
      default:
        break
    }

    setArticleIDsToRender(results)
    // console.log(results)
    // console.log(normalizedEventData.result)
  }

  return (
    <>
      <Nav>
        <NavigationFilter onChange={filteringHandler} />
        <NavigationView onChange={setViewHandler} activeView={view} />
      </Nav>
      <List view={view}>
        {articleIDsToRender.map((id) => (
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
