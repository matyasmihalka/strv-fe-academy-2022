import styled, { keyframes } from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

const closeIconAnimation = keyframes`
  from {transform: none;}
  40% {transform: scale(0.7);}
  to   {transform: none;}
`

export const CloseLink = styled.a`
  display: flex;
  cursor: pointer;
  color: ${colors.text.base};

  svg {
    &:hover,
    &:focus-visible {
      animation: 0.4s ${closeIconAnimation};
    }
  }
`

export const CenterContainer = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 95%;
  margin-top: -8.6rem;
  background-color: ${colors.background.light};
  padding: 4rem 3.2rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  ${mq.medium} {
    width: 45%;
  }
`

export const H1 = styled.h1`
  ${typography.heading.h2}
  text-align: center;
  color: ${colors.text.base};
`

export const P = styled.p`
  ${typography.paragraph.large}
  color: ${colors.text.dimmed};
  margin-top: -0.5rem;
  text-align: center;
`

export const StyledButton = styled(Button)`
  font-weight: bold;
  margin-top: 4rem;

  padding: 1.5rem 5rem;

  ${mq.medium} {
    padding: 0.8em 4rem;
  }
`
