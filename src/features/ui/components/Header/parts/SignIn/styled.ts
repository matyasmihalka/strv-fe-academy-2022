import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Span = styled.span`
  ${typography.paragraph.small}
  color: ${colors.text.light};
`

export const B = styled.b`
  ${typography.paragraph.small}
  color: ${colors.text.dimmed};
  margin-right: 3rem;
`
