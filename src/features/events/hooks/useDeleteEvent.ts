import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'

export const useEditEvent = (id: string) => {
  const router = useRouter()

  const result = useMutation<{ success: boolean }, Error>(
    'deleteEvent',
    async () => {
      const response = await privateApi.delete(`/events/${id}`)

      if (!response.ok) {
        throw Error('Deleting event failed')
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
