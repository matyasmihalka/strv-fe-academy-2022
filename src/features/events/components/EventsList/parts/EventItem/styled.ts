import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

import { AttendeeIcon } from './parts/AttendeeIcon'

export const Article = styled.article`
  background-color: ${colors.background.light};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 3rem;
`

export const Time = styled.time`
  color: ${colors.text.silent};
  margin-bottom: 1.5rem;
  display: block;
`
export const H3 = styled.h3`
  ${typography.heading.h3}
  color: ${colors.text.base};
`

export const Description = styled.p`
  ${typography.paragraph.normal}
  padding: 2.5rem 0 4rem 0;
  width: 90%;
  box-sizing: content-box;
  height: 5rem;
`

export const Author = styled.p`
  color: ${colors.text.author};
  margin-top: -0.3rem;
`
export const StyledActions = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const StyledAttendeeIcon = styled(AttendeeIcon)`
  margin-right: 0.5rem;
  margin-bottom: -0.3rem;
`
