import styled from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${StyleReset}
  ${typography.label.small}
  font-weight: bold;
  color: ${colors.text.tabs};
`

export const PageLayout = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0;
  padding: 3rem, 0, 8rem;
  list-style: none;
  /* grid-template-columns: 64% 33%; */
  grid-template-columns: 2fr 1fr;
  /* grid-column-gap: 3rem; */
`

export const StyledH2 = styled.h2`
  ${StyleReset}
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const AttendeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const StyledAttendees = styled.p`
  color: ${colors.text.dimmed};
  background: ${colors.background.inactive};
  border-radius: 100px;
  padding: 0.5rem 1.6rem;
  ${typography.paragraph.small}
`
