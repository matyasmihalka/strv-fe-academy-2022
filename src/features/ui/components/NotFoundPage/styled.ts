import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { mq } from '../../theme/mq'
import { typography } from '../../theme/typography'

export const Container = styled.section`
  width: 90%;
  margin-top: -8.5rem;
  text-align: center;

  ${mq.medium} {
    width: 60%;
    margin-top: 0;
    text-align: left;
  }
`

export const Title = styled.h1`
  color: ${colors.text.base};
  font-weight: normal;
`

export const Description = styled.p`
  color: ${colors.text.dimmed};
  ${typography.paragraph.large}
  margin: 0.6rem 0 4rem 0;
`
