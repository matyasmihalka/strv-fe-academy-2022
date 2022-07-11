import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledButton = styled.button`
  ${StyleReset}
  ${typography.label.small}
  color: ${colors.accent.destructive};
  cursor: pointer;

  &:disabled {
    color: ${colors.text.inactive};
    /* --background-color: ${colors.background.inactive}; */
  }

  svg {
    margin-right: 1rem;
  }
`
