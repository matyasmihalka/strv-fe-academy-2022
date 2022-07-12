import styled from 'styled-components'

import { InitialsIcon } from '~/features/ui/components/AccountInfo/parts/InitialsIcon'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Name = styled.p`
  ${typography.heading.h4}
  color: ${colors.text.base};
  align-self: center;
  /* margin-bottom: 0.5rem; */
`

export const Email = styled.p`
  ${typography.paragraph.small}
  color: ${colors.text.dimmed};
  align-self: center;
  margin-bottom: 0.8rem;
`

export const BigInitialsIcon = styled(InitialsIcon)`
  font-size: 40px;
  /* font-weight: 500; */
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: calc(-1 * calc(3.2rem + 60px));
  line-height: 50px;
  margin-bottom: 3rem;

  /* to visually center the initials */
  div {
    top: 53%;
  }
`
