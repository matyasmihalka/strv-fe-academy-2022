import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${StyleReset}
  ${typography.label.small}
  font-weight: bold;
  color: ${colors.text.tabs};
`
