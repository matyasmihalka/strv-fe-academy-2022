import { isAfter, isBefore } from 'date-fns'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/features/api'

import { FilterType } from '../components/EventsList/types'
import type { ArticleType } from '../types'

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

export const listBuilders = {
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

  const listBuilder = listBuilders[filter]

  const events = useMemo(() => listBuilder(data), [data, listBuilder])

  return { ...result, events }
}

export { useEvents }
