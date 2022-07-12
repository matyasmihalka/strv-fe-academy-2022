import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const H1 = styled.h1`
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const StyledError = styled.p`
  ${typography.paragraph.small}
  color: ${colors.accent.destructive};
  margin: 1rem 0 4rem 0;

  span {
    display: block;
  }
`
export const P = styled.p`
  ${typography.paragraph.small}
  margin: 1rem 0 4rem 0;
`
