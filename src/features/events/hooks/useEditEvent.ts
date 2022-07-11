import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'

import type { EventInput } from './useCreateEvent'

export const useEditEvent = (id: string) => {
  const router = useRouter()

  const result = useMutation<{ success: boolean }, Error, EventInput>(
    'editEvent',
    async (event) => {
      const response = await privateApi.patch(`/events/${id}`, {
        json: event,
      })

      if (!response.ok) {
        throw Error('Editing event failed')
      }

      return { success: response.ok }
    },
    {
      onSuccess: async () => {
        await router.push('/')
      },
    }
  )

  return result
}
