import { normalize, schema } from 'normalizr'
import { useEffect, useState } from 'react'

import events from '~/events.json'

import type {
  ArticleType,
  UserType,
  NormalizedEventDataType,
  NormalizedData,
} from '../types'

const userSchema: schema.Entity<UserType> = new schema.Entity('users')
const articleSchema: schema.Entity<ArticleType> = new schema.Entity(
  'articles',
  {
    owner: userSchema,
    attendees: [userSchema],
  }
)
const articleListSchema = [articleSchema]
const normalizedEventData: NormalizedEventDataType = normalize(
  events,
  articleListSchema
)

// console.log(normalizedEventData.entities.articles)

const useEvents = () => {
  const [articles, setArticles] = useState<NormalizedData<ArticleType>>({})
  const [users, setUsers] = useState<NormalizedData<UserType>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setArticles(normalizedEventData.entities.articles)
      setUsers(normalizedEventData.entities.users)
    }, 500)
  }, [])

  //   console.log(articles)

  return { articles, users, isLoading }
}

export { useEvents }
