import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const List = styled.ul`
  list-style: none;
  display: none;
  padding: 0;

  li {
    margin-right: 2rem;
  }

  ${mq.medium} {
    display: flex;
  }
`

export const MobileToggleLabel = styled.label`
  ${typography.label.small}
  color: ${colors.text.tabs};
  font-weight: bold;

  ${mq.medium} {
    display: none;
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    border: 0.5em solid transparent;
    border-top-color: currentColor;
    border-bottom-width: 0;
    color: ${colors.text.base};
  }

  select {
    ${StyleReset}
    color: ${colors.text.base};
    cursor: pointer;
  }

  span {
    margin-right: 1rem;
    margin-left: 2rem;
  }
`
