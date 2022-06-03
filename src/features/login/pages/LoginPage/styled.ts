import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})``

export const H1 = styled.h1`
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const P = styled.p`
  ${typography.paragraph.small}
  margin: 1rem 0 4rem 0;
`
