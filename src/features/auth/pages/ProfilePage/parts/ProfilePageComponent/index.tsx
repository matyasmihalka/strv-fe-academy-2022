import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { ProfileInfo } from './parts/ProfileInfo'
import { HiddenH1, HiddenH2 } from './styled'

export type Props = {
  user: UserType
}

export const ProfilePageComponent: FC<Props> = ({ user }) => {
  return (
    <>
      <HiddenH1>Profile page </HiddenH1>
      <ContainerEventPages>
        <section>
          <HiddenH2>Profile information</HiddenH2>
          <ProfileInfo user={user} />
        </section>
        <section>
          <HiddenH2>Events created by me</HiddenH2>
          <div>events</div>
        </section>
      </ContainerEventPages>
    </>
  )
}
