import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { MyEventsList } from './parts/MyEventsList'
import { ProfileInfo } from './parts/ProfileInfo'
import { HiddenH1, HiddenH2, PositionedSection } from './styled'

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
        <PositionedSection>
          <MyEventsList user={user} />
        </PositionedSection>
      </ContainerEventPages>
    </>
  )
}
