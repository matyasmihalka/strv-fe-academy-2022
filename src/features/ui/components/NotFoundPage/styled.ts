import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { typography } from '../../theme/typography'

export const Container = styled.section`
  width: 60%;
`

export const Title = styled.h1`
  ${typography.heading.h2}
  color: ${colors.text.base};
  font-weight: normal;
`

export const Description = styled.p`
  color: ${colors.text.dimmed};
  ${typography.paragraph.large}
  margin: 0.6rem 0 4rem 0;
`
