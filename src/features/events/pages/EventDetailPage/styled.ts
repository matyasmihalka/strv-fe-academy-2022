import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const StyledLink = styled.span`
  color: ${colors.text.base};
  cursor: pointer;
  display: flex;

  svg {
    margin-top: 0.4rem;
    margin-right: 0.8rem;
  }
`
