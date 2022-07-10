import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export type AttendeeProps = {
  isAttending?: boolean
}

export const StyledH2 = styled.h2`
  ${StyleReset}
  ${typography.heading.h3}
color: ${colors.text.base};
  margin-bottom: 2rem;
`

export const AttendeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const StyledAttendees = styled.p<AttendeeProps>`
  color: ${colors.text.dimmed};
  background: ${colors.background.inactive};
  border-radius: 100px;
  padding: 0.7rem 1.6rem;
  ${typography.paragraph.small}
  margin: 0.2rem 0;
  border: 2px solid ${colors.background.inactive};

  ${(props) =>
    props.isAttending === true &&
    css`
      background: ${colors.background.light};
    `}
`
