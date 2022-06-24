import styled from 'styled-components'

import { typography } from '~/features/ui/theme/typography'

import { colors } from '../../theme/colors'
import { mq } from '../../theme/mq'

export const P = styled.p`
  display: none;

  ${mq.medium} {
    display: block;
    ${typography.paragraph.small}
    color: ${colors.text.dimmed};
    font-weight: 500;
    margin-right: 0.8rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const DropdownIcon = styled.div`
  content: '';
  display: inline-block;
  vertical-align: middle;
  border: 0.4em solid transparent;
  border-top-color: currentColor;
  border-bottom-width: 0;
  color: ${colors.text.silent};
`
