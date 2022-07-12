import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { mq } from '~/features/ui/theme/mq'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 56rem;

  ${mq.medium} {
    align-items: baseline;
  }
`

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})`
  margin-top: 3rem;

  ${mq.medium} {
    margin-top: 6rem;
  }
`
