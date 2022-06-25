import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { useUserContext } from '../contexts/userContext'

export const withPrivateRoute = (WrappedComponent: NextPage): NextPage => {
  const HOCComponent: NextPage = ({ ...props }) => {
    const router = useRouter()
    const { user } = useUserContext()
    useEffect(() => {
      const checkUser = async () => {
        if (!user) await router.replace(Routes.LOGIN)
      }
      checkUser().catch(console.error)
    }, [router, user])

    // flickering is mainly happening because router.replace returns a promise
    // For authenticated users we immediately return the requested page
    // for not auth we return an empty page until the re-routing resolves
    if (user) {
      return <WrappedComponent {...props} />
    }
    return null
  }
  return HOCComponent
}
