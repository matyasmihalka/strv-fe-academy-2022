import type { NextPage } from 'next'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { ProfilePageComponent } from './parts/ProfilePageComponent'

import { useUserContext } from '../../contexts/userContext'
import { withPrivateRoute } from '../../hocs/withPrivateRoute'

export const ProfilePage: NextPage = () => {
  const { user } = useUserContext()

  if (!user) return null

  return (
    <LayoutInternal>
      <ProfilePageComponent user={user} />
    </LayoutInternal>
  )
}

export const PrivateProfilePage = withPrivateRoute(ProfilePage)
