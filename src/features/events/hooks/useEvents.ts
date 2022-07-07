import { isAfter, isBefore } from 'date-fns'
// import { normalize, schema } from 'normalizr'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/features/api'
// import type { UserType } from '~/features/auth/contexts/userContext'

import { FilterType } from '../components/EventsList/types'
import type {
  ArticleType,
  // NormalizedData,
  // NormalizedEventDataType,
} from '../types'

// const userSchema: schema.Entity<UserType> = new schema.Entity('users')
// const articleSchema: schema.Entity<ArticleType> = new schema.Entity(
//   'articles',
//   {
//     owner: userSchema,
//     attendees: [userSchema],
//   }
// )
// const articleListSchema = [articleSchema]

const sorts = {
  asc: () => (a: ArticleType, b: ArticleType) =>
    a.startsAt < b.startsAt ? -1 : 1,
  desc: () => (a: ArticleType, b: ArticleType) =>
    a.startsAt < b.startsAt ? 1 : -1,
}

const filters = {
  future: (event: ArticleType) => isAfter(new Date(event.startsAt), new Date()),
  past: (event: ArticleType) => isBefore(new Date(event.startsAt), new Date()),
}

const { ALL, FUTURE, PAST } = FilterType

const listBuilders = {
  [ALL]: (articles: ArticleType[]) => articles.sort(sorts.asc()),
  [FUTURE]: (articles: ArticleType[]) =>
    articles.sort(sorts.asc()).filter(filters.future),
  [PAST]: (articles: ArticleType[]) =>
    articles.sort(sorts.desc()).filter(filters.past),
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
  // const normalizedData: NormalizedEventDataType = normalize(
  //   data,
  //   articleListSchema
  // )

  // const articles = normalizedData.entities.articles
  // const users = normalizedData.entities.users

  const listBuilder = listBuilders[filter]

  const events = useMemo(() => listBuilder(data), [data, listBuilder])

  // return { ...result, articles, articleIDsToRender, users }
  return { ...result, events }
}

export { useEvents }
