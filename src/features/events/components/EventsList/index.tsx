import type { FC } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { FilterType } from './types'
import { ViewType } from './types'

import { useEvents } from '../../hooks/useEvents'
import type { ArticleType, NormalizedData } from '../../types'

/**
 * Renders a list of events, with filtering/sorting/view type options.
 */

// Temporary logged in user until we have authentication
const loggedInUser = '628a2c5ce02f11001bec0970'

const sortArticles = (
  articles: NormalizedData<ArticleType>,
  order: 'oldestFirst' | 'latestFirst' = 'oldestFirst'
) => {
  // console.log('sorting')
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
  const [articles, setArticles] = useState<NormalizedData<ArticleType>>({})
  const [articleIDsToRender, setArticleIDsToRender] = useState<string[]>([])

  const { articles: initArticles, users, isLoading } = useEvents()

  const sortedArticlesALL = useMemo(() => sortArticles(articles), [articles])

  const sortedArticlesFUTURE = useMemo(() => {
    // console.log('filtering')
    return sortedArticlesALL.filter(
      (id) => articles[id].startsAt > currentDateRoundedToHour()
    )
  }, [articles, sortedArticlesALL])

  const sortedArticlesPAST = useMemo(() => {
    // console.log('PAST')
    return sortArticles(articles, 'latestFirst').filter(
      (id) => articles[id].startsAt < currentDateRoundedToHour()
    )
  }, [articles])

  // Temp solution: put articles and ids to sate to be able to modify the articles state
  useEffect(() => {
    setArticles(initArticles)
  }, [initArticles])

  useEffect(() => {
    setArticleIDsToRender(sortedArticlesALL)
  }, [sortedArticlesALL])

  // Handle views and filter
  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

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

    setArticles({ ...articles, [id]: newArticle })
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
