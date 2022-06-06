import styled, { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import { AttendeeIcon } from './parts/AttendeeIcon'

import { ViewType } from '../../types'

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

export const AttendeeCount = styled.span``

export const Container = styled.div`
  ${mq.medium} {
    display: flex;
    justify-content: space-between;
    min-width: 18rem;
  }
`

export const Article = styled.article<{ view: ViewType }>`
  background-color: ${colors.background.light};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1.6rem;
  display: block;

  time {
    color: ${colors.text.silent};
    margin-bottom: 1.5rem;
    display: block;
  }

  h3 {
    ${typography.heading.h3}
    color: ${colors.text.base};
  }

  ${(props) =>
    props.view === ViewType.LIST &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      time {
        margin: 0;
      }

      h3 {
        ${typography.heading.h4}
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      ${Description} {
        padding: 0;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: -0.3rem;
        margin-bottom: 0.8rem;
      }

      ${Author} {
        display: none;
      }

      /* Media query - MEDIUM */
      ${mq.medium} {
        padding: 3rem;
        flex-wrap: nowrap;

        ${Author} {
          margin: 0;
          display: block;
        }

        h3 {
          width: auto;
          min-width: 20%;
          margin-right: 1rem;
        }

        ${Description} {
          width: auto;
          margin-top: 0;
          margin-bottom: 0;
          width: auto;
          max-width: 24rem;
        }
      }
    `}
`
