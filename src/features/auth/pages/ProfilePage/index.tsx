import type { NextPage } from 'next'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { ProfilePageComponent } from './parts/ProfilePageComponent'

export const ProfilePage: NextPage = () => {
  return (
    <LayoutInternal>
      <ProfilePageComponent />
    </LayoutInternal>
  )
}
