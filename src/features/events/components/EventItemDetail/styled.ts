import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

import { AttendeeIcon } from '../AttendeeIcon'

export const StyledTime = styled.time`
  color: ${colors.text.silent};
  margin-bottom: 1.5rem;
  display: block;
`

export const StyledH2 = styled.h2`
  ${typography.heading.h1}
  color: ${colors.text.base};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledAuthor = styled.p`
  color: ${colors.text.author};
  margin-top: 0.3rem;
`
export const StyledDescription = styled.p`
  ${typography.paragraph.normal}
  margin: 2.5rem 0 3.2rem 0;
`

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 3rem;
  margin-top: auto;
`
export const StyledButton = styled(Button)`
  padding: 0.8rem 0rem;
  min-width: 10rem;
`

export const StyledAttendeeIcon = styled(AttendeeIcon)`
  margin-right: 0.5rem;
  margin-bottom: -0.9rem;
`

export const StyledSpan = styled.span`
  color: ${colors.text.dimmed};
`
