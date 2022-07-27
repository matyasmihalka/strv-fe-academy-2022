import type { FC } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'
import { HiddenH1, HiddenH2 } from '~/features/ui/components/HiddenHeadings'

import { MyEventsList } from './parts/MyEventsList'
import { ProfileInfo } from './parts/ProfileInfo'
import { PositionedSection, StyledProfileInfoSection } from './styled'

export type Props = {
  user: UserType
}

export const ProfilePageComponent: FC<Props> = ({ user }) => {
  return (
    <>
      <HiddenH1>Profile page </HiddenH1>
      <ContainerEventPages>
        <StyledProfileInfoSection>
          <HiddenH2>Profile information</HiddenH2>
          <ProfileInfo user={user} />
        </StyledProfileInfoSection>
        <PositionedSection>
          <MyEventsList user={user} />
        </PositionedSection>
      </ContainerEventPages>
    </>
  )
}
