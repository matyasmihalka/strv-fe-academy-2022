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

const currentDateRoundedToHour = () => {
  const date = new Date(Date.now()).toISOString()
  return date.slice(0, 14) + '00:00.000Z'
  // console.log(result)
}

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  const [view, setView] = useState(ViewType.GRID)
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [articles, _] = useState(normalizedEventData.entities.articles)
  // default filtering
  const sortedArticlesALL = useMemo(() => sortArticles(articles), [articles])
  const [articleIDsToRender, setArticleIDsToRender] =
    useState(sortedArticlesALL)

  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  const sortedArticlesFUTURE = useMemo(() => {
    console.log('filtering')
    return sortedArticlesALL.filter(
      (id) => articles[id].startsAt > currentDateRoundedToHour()
    )
  }, [articles, sortedArticlesALL])

  const sortedArticlesPAST = useMemo(() => {
    console.log('PAST')
    return sortArticles(articles, 'latestFirst').filter(
      (id) => articles[id].startsAt < currentDateRoundedToHour()
    )
  }, [articles])

  const filteringHandler = (filterType: FilterType) => {
    setActiveFilter(filterType)

    let results = sortedArticlesALL

    switch (filterType) {
      case FilterType.ALL:
        break
      case FilterType.FUTURE:
        results = sortedArticlesFUTURE
        break
      case FilterType.PAST:
        results = sortedArticlesPAST
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
              eventData={articles[id]}
              owner={normalizedEventData.entities.users[articles[id].owner]}
              loggedInUser={loggedInUser}
            />
          </li>
        ))}
      </List>
    </>
  )
}
