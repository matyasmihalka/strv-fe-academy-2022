import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const StyledSvg = styled.svg`
  /* fill: ${colors.text.formLabel}; */
  color: ${colors.text.formLabel};
  &:hover,
  &:active {
    /* fill: ${colors.text.dimmed}; */
    color: ${colors.text.dimmed};
  }
`
