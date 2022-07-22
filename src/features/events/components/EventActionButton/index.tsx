import type { FC } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import type { ArticleType } from '~/features/events/types'
import { Button } from '~/features/ui/components/Button'

import { useAttendance } from '../../hooks/useAttendance'
import { isUserAttending } from '../../lib/isUserAttending'

type Props = {
  event: ArticleType
}

export const EventActionButton: FC<Props> = ({ event }) => {
  const { user } = useUserContext()
  const { attendEvent, leaveEvent } = useAttendance(event.id)
  const isAttending = isUserAttending(user, event)

  return (
    <Button
      type="button"
      size="small"
      accent={isAttending ? 'destructive' : 'primary'}
      onClick={() => (isAttending ? leaveEvent.mutate() : attendEvent.mutate())}
    >
      {isAttending ? 'Leave' : 'Join'}
    </Button>
  )
}
