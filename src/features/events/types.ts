import type { UserType } from '../auth/contexts/userContext'

export type UserTypeFromEvents = {
  _id: string
  firstName: string
  lastName: string
  email: string
  __v: number
  id: string
}

export type ArticleType = {
  _id: string
  updatedAt: string
  createdAt: string
  title: string
  description: string
  startsAt: string
  capacity: number
  owner: UserType
  __v: number
  attendees: UserType[]
  id: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export type NormalizedData<T> = {
  [uuid: string]: T
}

export type NormalizedEventDataType = {
  result: string[]
  entities: {
    articles: NormalizedData<ArticleType>
    users: NormalizedData<UserTypeFromEvents>
  }
}
