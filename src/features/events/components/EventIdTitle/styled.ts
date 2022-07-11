import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${StyleReset}
  ${typography.label.small}
  font-weight: bold;
  color: ${colors.text.tabs};
  margin-bottom: 2.3rem;

  ${mq.medium} {
    margin-bottom: 4rem;
  }
`

export const StyledP = styled.p`
  display: block;

  ${mq.medium} {
    display: inline;
  }
`
