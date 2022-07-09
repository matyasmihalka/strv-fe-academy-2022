import { faker } from '@faker-js/faker'

import type { UserType } from '../auth/contexts/userContext'

export const createUser = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
})

export const createEvent = (data?: {
  user?: UserType
  attendees?: UserType[]
  isPastEvent?: boolean
}) => {
  const id = faker.datatype.uuid()
  const title = faker.lorem.words(3)
  const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return {
    id: id,
    _id: id,
    __v: 0,
    title: capitalTitle,
    description: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.past().toISOString(),
    startsAt: data?.isPastEvent
      ? faker.date.past().toISOString()
      : faker.date.future().toISOString(),
    capacity: faker.datatype.number({ min: 0, max: 10 }),
    owner: data?.user ?? createUser(),
    attendees:
      data?.attendees ??
      Array(10)
        .fill(0)
        .map(() => createUser()),
  }
}
