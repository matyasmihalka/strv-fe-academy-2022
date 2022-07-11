import type { NextPage } from 'next'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { EditEventComponent } from './parts/EditEventComponent'

import { createEvent, createUser } from '../../types.fixtures'

export const EditEventPage: NextPage = () => {
  const event = createEvent()
  const user = createUser()
  return (
    <LayoutInternal>
      <EditEventComponent event={event} loggedInUser={user} />
    </LayoutInternal>
  )
}
