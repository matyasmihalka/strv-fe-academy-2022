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

const { ALL, FUTURE, PAST } = FilterType

const listBuilders = {
  [ALL]: (articles: NormalizedData<ArticleType>) =>
    Object.keys(articles).sort(sorts.asc(articles)),
  [FUTURE]: (articles: NormalizedData<ArticleType>) =>
    Object.keys(articles)
      .sort(sorts.asc(articles))
      .filter(filters.future(articles)),
  [PAST]: (articles: NormalizedData<ArticleType>) =>
    Object.keys(articles)
      .sort(sorts.desc(articles))
      .filter(filters.past(articles)),
}

const useEvents = (filter: FilterType) => {
  const [articles, setArticles] = useState<NormalizedData<ArticleType>>({})
  const [users, setUsers] = useState<NormalizedData<UserType>>({})
  const [isLoading, setIsLoading] = useState(true)

  const listBuilder = listBuilders[filter]
  const articleIDsToRender = useMemo(
    () => listBuilder(articles),
    [articles, listBuilder]
  )

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setArticles(normalizedEventData.entities.articles)
      setUsers(normalizedEventData.entities.users)
    }, 500)
  }, [])

  return { articles, articleIDsToRender, users, isLoading }
}

export { useEvents }
