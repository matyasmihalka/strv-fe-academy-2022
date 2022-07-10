import type { UserType } from '~/features/auth/contexts/userContext'

import type { ArticleType } from '../types'

// type Props = {
//     user: UserType
//     event: ArticleType

// }

export const isUserAttending = (user: UserType | null, event: ArticleType) => {
  return user && event.attendees.some((attendee) => attendee.id === user.id)
    ? true
    : false
}
