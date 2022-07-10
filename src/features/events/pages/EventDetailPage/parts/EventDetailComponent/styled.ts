import styled from 'styled-components'

import { CreateButton } from '~/features/events/components/CreateButton'
import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${StyleReset}
  ${typography.label.small}
  font-weight: bold;
  color: ${colors.text.tabs};
  margin-bottom: 4rem;
`

export const PageLayout = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0;
  padding: 3rem, 0, 8rem;
  list-style: none;
  grid-template-columns: 2fr 1fr;
`

export const PositionedCreateButton = styled(CreateButton)`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${mq.medium} {
    bottom: 3rem;
    right: 3rem;
  }
`
