import { useQuery } from 'react-query'

import { api } from '~/features/api'

import type { ArticleType } from '../types'

export const useGetSingleEvent = (id: string) => {
  const result = useQuery<ArticleType, Error>(
    ['events', id],
    async () => {
      const response = await api.get(`/events/${id}`)

      if (!response.ok) {
        throw new Error(`Failed to load events`)
      }

      return (await response.json()) as ArticleType
    },
    { enabled: !!id }
  )

  return result
}
