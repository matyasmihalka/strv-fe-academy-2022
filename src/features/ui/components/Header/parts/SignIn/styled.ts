import styled from 'styled-components'
import { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import type { WrapperType } from '.'

// type WrapperType = {
//   position?: 'form'
// }

export const Span = styled.span`
  ${typography.paragraph.small}
  color: ${colors.text.light};
`

export const B = styled.b`
  ${typography.paragraph.small}
  color: ${colors.text.dimmed};
`

export const SignInQuestionWrapper = styled.span<WrapperType>`
  display: none;

  ${mq.medium} {
    display: inline;
  }

  ${(props) =>
    props.position === 'form' &&
    css`
      display: inline;
      margin: 1.5rem;

      ${mq.medium} {
        display: none;
      }
    `}
`
