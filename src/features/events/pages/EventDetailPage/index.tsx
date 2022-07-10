import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { EventDetailComponent } from './parts/EventDetailComponent'

import { createEvent } from '../../types.fixtures'

export const EventDetailPage: NextPage = () => {
  const router = useRouter()
  const { eventID } = router.query
  console.log(eventID)
  return (
    <LayoutInternal>
      <EventDetailComponent event={createEvent()} />
    </LayoutInternal>
  )
}
