import { isAfter, isBefore } from 'date-fns'
import { normalize, schema } from 'normalizr'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/features/api'
import type { UserType } from '~/features/auth/contexts/userContext'

import { FilterType } from '../components/EventsList/types'
import type {
  ArticleType,
  NormalizedData,
  NormalizedEventDataType,
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

const initialData: ArticleType[] = []

/**
 * Loads and filters/sorts the event list.
 */
const useEvents = (filter: FilterType) => {
  const result = useQuery<ArticleType[], Error>('events', async () => {
    const response = await api.get('/events')

    if (!response.ok) {
      throw new Error(`Failed to load events`)
    }

    return (await response.json()) as ArticleType[]
  })

  const { data = initialData } = result
  const normalizedData: NormalizedEventDataType = normalize(
    data,
    articleListSchema
  )

  const articles = normalizedData.entities.articles
  const users = normalizedData.entities.users

  const listBuilder = listBuilders[filter]

  const articleIDsToRender = useMemo(
    () => (articles ? listBuilder(articles) : []),
    [articles, listBuilder]
  )

  return { ...result, articles, articleIDsToRender, users }
}

export { useEvents }
