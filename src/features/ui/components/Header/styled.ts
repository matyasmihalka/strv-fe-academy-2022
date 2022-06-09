import styled, { css } from 'styled-components'

import { Logo } from './parts/Logo'

import { colors } from '../../theme/colors'
import { mq } from '../../theme/mq'

export const StyledLogo = styled(Logo)``

export const StyledHeader = styled.header<{ isAbsolute?: boolean }>`
  top: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 5rem; */
  padding: 2.4rem;
  z-index: 100;

  ${mq.medium} {
    padding: 4rem;
  }

  ${(props) =>
    props.isAbsolute &&
    css`
      ${mq.medium} {
        position: absolute;
        top: 0;
        left: 0;

        ${StyledLogo} {
          color: ${colors.text.inverted};
        }
      }
    `}
`
