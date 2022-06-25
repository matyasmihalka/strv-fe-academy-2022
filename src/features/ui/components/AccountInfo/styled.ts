import styled from 'styled-components'

import { typography } from '~/features/ui/theme/typography'

import { colors } from '../../theme/colors'
import { mq } from '../../theme/mq'
import { StyleReset } from '../StyleReset'

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

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  transform: translate(1.6rem, 8rem);
  background: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 1.4rem;
  padding: 1.2rem;
  padding-right: 2.5rem;
  z-index: 2;

  ${mq.medium} {
    transform: translate(2rem, 8rem);
    width: 112%;
    padding: 1.8rem;
  }
`

export const DropdownArrow = styled.div`
  /* Size */
  height: 2rem;
  width: 2rem;

  background-color: #fff;
  position: absolute;
  /* Position at the top right corner */
  right: 0.7rem;
  top: 0;

  /* Border */
  /* border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3); */
  transform: translate(-50%, -50%) rotate(45deg);
  border-top-left-radius: 0.5rem;
  /* box-shadow: 0px 8px 15px -3px rgba(0, 0, 0, 0.198087); */
  /* clip-path: inset(-15px 0px 0px -15px); */

  ${mq.medium} {
    right: 1.7rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const DropdownIcon = styled.div`
  content: '';
  display: inline-block;
  vertical-align: middle;
  border: 0.4em solid transparent;
  border-top-color: currentColor;
  border-bottom-width: 0;
  color: ${colors.text.silent};

  ${mq.medium} {
    margin-right: 1rem;
  }
`

export const Button = styled.button`
  ${StyleReset}
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ActionButton = styled.button`
  ${StyleReset}
  ${typography.paragraph.small}
  display: block;
  cursor: pointer;
  color: ${colors.text.dimmed};
  font-weight: 500;

  &:hover {
    color: ${colors.text.base};
  }
`
