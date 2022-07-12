import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { HiddenH1, HiddenH2 } from './styled'

export const ProfilePageComponent = () => {
  return (
    <>
      <HiddenH1>Profile page </HiddenH1>
      <ContainerEventPages>
        <section>
          <HiddenH2>Profile information</HiddenH2>
          <div>Profile info</div>
        </section>
        <section>
          <HiddenH2>Events created by me</HiddenH2>
          <div>events</div>
        </section>
      </ContainerEventPages>
    </>
  )
}
