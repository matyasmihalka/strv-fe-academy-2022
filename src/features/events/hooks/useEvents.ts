import { isAfter, isBefore } from 'date-fns'
import { normalize, schema } from 'normalizr'
import { useEffect, useState, useMemo } from 'react'

import events from '~/events.json'

import { FilterType } from '../components/EventsList/types'
import type {
  ArticleType,
  UserType,
  NormalizedEventDataType,
  NormalizedData,
} from '../types'

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
  events,
  articleListSchema
)

const sorts = {
  asc: (articles: NormalizedData<ArticleType>) => (a: string, b: string) =>
    articles[a].startsAt < articles[b].startsAt ? -1 : 1,
  desc: (articles: NormalizedData<ArticleType>) => (a: string, b: string) =>
    articles[a].startsAt < articles[b].startsAt ? 1 : -1,
}

const filters = {
  future: (articles: NormalizedData<ArticleType>) => (id: string) =>
    isAfter(new Date(articles[id].startsAt), new Date()),
  past: (articles: NormalizedData<ArticleType>) => (id: string) =>
    isBefore(new Date(articles[id].startsAt), new Date()),
}

const useEvents = (filter: FilterType) => {
  const [articles, setArticles] = useState<NormalizedData<ArticleType>>({})
  const [users, setUsers] = useState<NormalizedData<UserType>>({})
  const [isLoading, setIsLoading] = useState(true)

  const sortedArticlesALL = useMemo(
    () => Object.keys(articles).sort(sorts.asc(articles)),
    [articles]
  )

  const sortedArticlesFUTURE = useMemo(() => {
    return sortedArticlesALL.filter(filters.future(articles))
  }, [articles, sortedArticlesALL])

  const sortedArticlesPAST = useMemo(() => {
    // console.log('PAST')
    return Object.keys(articles)
      .sort(sorts.desc(articles))
      .filter(filters.past(articles))
  }, [articles])

  let articleIDsToRender: string[] = []

  switch (filter) {
    case FilterType.ALL:
      articleIDsToRender = sortedArticlesALL
      break
    case FilterType.FUTURE:
      articleIDsToRender = sortedArticlesFUTURE
      break
    case FilterType.PAST:
      articleIDsToRender = sortedArticlesPAST
      break
    default:
      break
  }

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setArticles(normalizedEventData.entities.articles)
      setUsers(normalizedEventData.entities.users)
    }, 500)
  }, [])

  //   console.log(articles)

  return { articles, articleIDsToRender, users, isLoading }
}

export { useEvents }
