import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})`
  margin-top: 3rem;

  ${mq.medium} {
    margin-top: 6rem;
  }
`

export const TriggerErrorButton = styled(Button).attrs({
  size: 'small',
  accent: 'destructive',
})`
  margin-top: 2rem;
`

export const H1 = styled.h1`
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: -8.5rem;

  ${mq.medium} {
    width: 50%;
    align-items: flex-start;
    margin-top: 0;
  }
`

export const P = styled.p`
  ${typography.paragraph.small}
  margin: 1rem 0 4rem 0;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${mq.medium} {
    align-items: baseline;
  }
`
