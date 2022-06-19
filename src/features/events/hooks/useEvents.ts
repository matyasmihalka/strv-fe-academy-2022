import { isAfter, isBefore } from 'date-fns'
import { normalize, schema } from 'normalizr'
import { useEffect, useState, useMemo } from 'react'

import { api } from '~/features/api'

// import events from '~/events.json'

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
  const [error, setError] = useState<Error | null>(null)

  const listBuilder = listBuilders[filter]
  const articleIDsToRender = useMemo(
    () => listBuilder(articles),
    [articles, listBuilder]
  )

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true)
      try {
        const response = await api.get('/events')

        // Fetch is throwing on itself just if the request fails on the client side, so we need to throw manually
        // Note that this may not be the best way to handle this, because 1xx, 2xx and 3xx are not really errors, but we are treating them as errors.
        if (!response.ok) {
          throw new Error(`Failed to load events`)
        }

        const responseData = (await response.json()) as ArticleType[]
        const normalizedEventData: NormalizedEventDataType = normalize(
          responseData,
          articleListSchema
        )
        setArticles(normalizedEventData.entities.articles)
        setUsers(normalizedEventData.entities.users)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    void loadEvents()
  }, [])

  return { articles, articleIDsToRender, users, isLoading, error }
}

export { useEvents }
