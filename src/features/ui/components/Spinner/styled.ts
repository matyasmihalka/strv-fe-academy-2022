import styled, { keyframes } from 'styled-components'

import { colors } from '../../theme/colors'

export const SpinnerComponent = styled.div`
  content: '    ';
  display: block;
  position: absolute;
  /* top: 20px; */
  left: 30.5px;
  width: 3px;
  height: 10px;
  border-radius: 20%;
  background: ${colors.text.dimmed};
  transform-origin: center 32px;
  /* transform-origin: center; */
`

const spin = keyframes`
0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`

export const SpinnerContainer = styled.div`
  color: black;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  /* background: ${colors.background.dimmed}; */

  ${SpinnerComponent} {
    animation: 1.6s ${spin} linear infinite;
  }

  ${SpinnerComponent}:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.4s;
  }
  ${SpinnerComponent}:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: -1.2s;
  }

  ${SpinnerComponent}:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: -1s;
  }

  ${SpinnerComponent}:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: -0.8s;
  }

  ${SpinnerComponent}:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: -0.6s;
  }

  ${SpinnerComponent}:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: -0.4s;
  }

  ${SpinnerComponent}:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  ${SpinnerComponent}:nth-child(8) {
    transform: rotate(315deg);
  }
`

// .lds-spinner div:nth-child(1) {
//     transform: rotate(0deg);
//     animation-delay: -1.1s;
//   }
