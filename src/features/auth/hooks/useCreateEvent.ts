import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { api } from '~/features/api'

type EventInput = {
  title: string
  description: string
  startsAt: string
  capacity: number
}

const useCreateEvent = () => {
  const router = useRouter()

  const result = useMutation<{ success: boolean }, Error, EventInput>(
    'createEvent',
    async (event) => {
      const response = await api.post('/events', { json: event })

      if (!response.ok) {
        throw Error('Creating event failed')
      }

      return { success: response.ok }
    },
    {
      onSuccess: () => {
        void router.push('/')
      },
    }
  )

  return result
}

export { useCreateEvent }