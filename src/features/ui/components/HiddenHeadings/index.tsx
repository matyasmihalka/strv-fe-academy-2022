import styled from 'styled-components'

import { AccessibleHidden } from '../AccessibleHidden'

export const HiddenH1 = styled.h1`
  ${AccessibleHidden}
`

export const HiddenH2 = styled(HiddenH1).attrs({ as: 'h2' })``
