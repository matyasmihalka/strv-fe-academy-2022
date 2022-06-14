export type UserType = {
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
  owner: string
  __v: number
  attendees: string[]
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
    users: NormalizedData<UserType>
  }
}
