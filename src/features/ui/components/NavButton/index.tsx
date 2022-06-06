import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

type Props = {
  isActive?: boolean
}

export const NavButton = styled.button<Props>`
  ${StyleReset}
  ${typography.label.small}
  font-weight: bold;
  color: ${colors.text.tabs};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${colors.text.base};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.text.base};
    `}
`
