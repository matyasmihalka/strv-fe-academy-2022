// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'
import { Routes } from '~/features/core/constants/routes'

import type { ArticleType } from '../types'

export type EventInput = {
  title: string
  description: string
  startsAt: string
  capacity: number
}

const useCreateEvent = () => {
  const router = useRouter()

  const result = useMutation<ArticleType, Error, EventInput>(
    'createEvent',
    async (event) => {
      const response = await privateApi.post('/events', { json: event })

      if (!response.ok) {
        throw Error('Creating event failed')
      }

      return (await response.json()) as ArticleType
    },
    {
      onSuccess: async (event: ArticleType) => {
        console.log(event)
        await privateApi.post(`/events/${event.id}/attendees/me`)

        await router.push(Routes.DASHBOARD)
      },
    }
  )

  return result
}

export { useCreateEvent }
