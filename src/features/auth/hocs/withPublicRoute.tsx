import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { useUserContext } from '../contexts/userContext'
import { getPersistedUser } from '../storage'

export const withPublicRoute = (WrappedComponent: NextPage): NextPage => {
  // HOC aims to wrap routes which should be not visible for authenticated users
  const HOCComponent: NextPage = ({ ...props }) => {
    const router = useRouter()

    const { user } = useUserContext()

    useEffect(() => {
      const checkUser = async () => {
        // we have to check the localStorage directly to ensure on page reload the user is directly checked
        if (getPersistedUser()) await router.replace(Routes.DASHBOARD)
      }
      checkUser().catch(console.error)
    }, [router])

    // flickering is mainly happening because router.replace returns a promise
    // For not authenticated users we immediately return the requested page
    // for auth we return an empty page until the re-routing resolves
    if (!user) {
      return <WrappedComponent {...props} />
    }
    return null
  }
  return HOCComponent
}
