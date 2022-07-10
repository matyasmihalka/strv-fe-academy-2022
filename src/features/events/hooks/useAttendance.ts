import { useMutation, useQueryClient } from 'react-query'

import { privateApi } from '~/features/api'

import type { ArticleType } from '../types'

const useAttendance = (id: string, isLoggedInUserAttending: boolean) => {
  const queryClient = useQueryClient()

  const updateAttendance = (updatedEvent: ArticleType) => {
    queryClient.setQueriesData<ArticleType[]>(['events'], (previous) => {
      if (previous) {
        return previous.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      }
      return []
    })
  }

  const attendEvent = useMutation<ArticleType, Error>(
    'attendEvent',
    async () => {
      const response = await privateApi.post(`/events/${id}/attendees/me`)

      if (!response.ok) {
        throw Error('Joining the event has failed')
      }

      return (await response.json()) as ArticleType
    },
    {
      onSuccess: (updatedEvent) => updateAttendance(updatedEvent),
    }
  )

  const leaveEvent = useMutation(
    'leaveEvent',
    async () => {
      const response = await privateApi.delete(`/events/${id}/attendees/me`)

      if (!response.ok) {
        throw Error('Leaving the event has failed')
      }

      return (await response.json()) as ArticleType
    },
    {
      onSuccess: (updatedEvent) => updateAttendance(updatedEvent),
    }
  )

  const handleAttendance = () => {
    if (isLoggedInUserAttending) {
      leaveEvent.mutate()
    } else {
      attendEvent.mutate()
    }
  }

  return { handleAttendance }
}

export { useAttendance }
