import styled from 'styled-components'

import { AccessibleHidden } from '~/features/ui/components/AccessibleHidden'

export const HiddenH1 = styled.h1`
  ${AccessibleHidden}
`

export const HiddenH2 = styled(HiddenH1).attrs({ as: 'h2' })``

export const PositionedSection = styled.section`
  margin-top: 3rem;
`

export const StyledProfileInfoSection = styled.section`
  margin-top: calc(1.8rem + 60px);
`
