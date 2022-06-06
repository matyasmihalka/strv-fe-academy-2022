import styled, { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import { ViewType } from './types'

export const List = styled.ul<{ view: ViewType }>`
  ${typography.paragraph.small}
  display: grid;
  gap: 1.5rem;
  padding: 0;
  padding: 3rem, 0, 8rem;
  list-style: none;
  color: ${colors.text.dimmed};

  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

      article {
        /* display: grid; */
        /* grid-template-columns: 1fr auto; */
        align-items: center;
      }
    `}
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  ${mq.medium} {
    margin-bottom: 4rem;
  }
`
