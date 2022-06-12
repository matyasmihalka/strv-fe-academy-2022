import { normalize, schema } from 'normalizr'
import type { FC } from 'react'
import { useMemo } from 'react'
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

// Temporary logged in user until we have authentication
const loggedInUser = '628a2c5ce02f11001bec0970'

const sortArticles = (
  articles: NormalizedData<ArticleType>,
  order: 'oldestFirst' | 'latestFirst' = 'oldestFirst'
) => {
  console.log('sorting')
  const returnValue = order === 'oldestFirst' ? -1 : 1
  return Object.keys(articles).sort((a, b) => {
    if (articles[a].startsAt < articles[b].startsAt) {
      return returnValue
    } else {
      return -returnValue
    }
  })
}

const actualDateRoundedToHour = () => {
  const date = new Date(Date.now()).toISOString()
  return date.slice(0, 14) + '00:00.000Z'
  // console.log(result)
}

actualDateRoundedToHour()

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  // default filtering
  const filteredArticlesALL = useMemo(
    () => sortArticles(normalizedEventData.entities.articles),
    []
  )

  console.log('Memoized array')
  console.log(filteredArticlesALL)

  const [view, setView] = useState(ViewType.GRID)
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL)
  const [articleIDsToRender, setArticleIDsToRender] =
    useState(filteredArticlesALL)

  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  const filteringHandler = (filterType: FilterType) => {
    setActiveFilter(filterType)

    let results = filteredArticlesALL

    switch (filterType) {
      case FilterType.ALL:
        results = filteredArticlesALL
        break
      case FilterType.FUTURE:
        results = results.filter(
          (id) =>
            normalizedEventData.entities.articles[id].startsAt >
            actualDateRoundedToHour()
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
            actualDateRoundedToHour()
        )
        break
      default:
        break
    }

    setArticleIDsToRender(results)
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
