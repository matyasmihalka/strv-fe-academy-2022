import { isUserAttending } from './isUserAttending'

import { createEvent, createUser } from '../types.fixtures'

describe('[lib] isUserAttending', () => {
  describe('user is attending', () => {
    it('should return true', () => {
      //   ARRANGE
      const user = createUser()
      const event = createEvent()
      event.attendees.push(user)

      //   ACT
      const isAttending = isUserAttending(user, event)

      //   ASSERT
      expect(isAttending).toBe(true)
    })
  })

  describe('user is not attending', () => {
    it('should return false', () => {
      //   ARRANGE
      const user = createUser()
      const event = createEvent()

      //   ACT
      const isAttending = isUserAttending(user, event)

      //   ASSERT
      expect(isAttending).toBe(false)
    })
  })

  describe('user is null', () => {
    it('should return false', () => {
      //   ARRANGE
      const user = null
      const event = createEvent()

      //   ACT
      const isAttending = isUserAttending(user, event)

      //   ASSERT
      expect(isAttending).toBe(false)
    })
  })
})
